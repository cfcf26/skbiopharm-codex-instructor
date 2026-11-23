const fs = require('node:fs');
const path = require('node:path');
const assets = path.join(__dirname, '../assets');
const XLSX = require(path.join(assets, 'lib/xlsx.full.min.js'));

function build(workbookPath, outputDir, sampleFlag) {
  if (!workbookPath || !outputDir || path.extname(workbookPath).toLowerCase() !== '.xlsx'
      || (sampleFlag !== undefined && sampleFlag !== '--sample')) {
    throw new Error('사용법: node build-dashboard.cjs <입력.xlsx> <새 출력 폴더> [--sample]');
  }

  const bytes = fs.readFileSync(workbookPath);
  const { Sheets } = XLSX.read(bytes, { type: 'buffer' });
  if (!Sheets['데이터']) throw new Error('데이터 시트를 찾을 수 없습니다.');

  const [headers = [], ...records] = XLSX.utils.sheet_to_json(Sheets['데이터'], {
    header: 1, defval: null, blankrows: true,
  });
  const required = ['부서', '계정 대분류', '월', '예산 (억 원)', '집행액 (억 원)'];
  const missing = required.filter(label => !headers.includes(label));
  if (missing.length) throw new Error('데이터 시트에 필요한 열: ' + missing.join(', '));

  const indices = required.map(label => headers.indexOf(label));
  const categories = new Set(['인건비', '경비', '외주비', '마케팅비']);
  for (const [index, record] of records.entries()) {
    if (record.every(value => value == null)) continue;
    const [department, category, month, budget, spent] = indices.map(column => record[column]);
    if (typeof department !== 'string' || !department.trim() || !categories.has(category)
        || typeof month !== 'string' || !/^\d{4}-(0[1-9]|1[0-2])$/.test(month)
        || !Number.isFinite(budget) || !Number.isFinite(spent)) {
      throw new Error('데이터 시트 ' + (index + 2) + '행의 부서, 대분류, 월 또는 금액을 확인해 주세요.');
    }
  }

  const filename = JSON.stringify(path.basename(workbookPath)).replaceAll('<', '\\u003c');
  const template = fs.readFileSync(path.join(assets, 'dashboard.html'), 'utf8');
  const html = template
    .replace('__WORKBOOK_FILENAME__', () => filename)
    .replace('__WORKBOOK_BASE64__', () => bytes.toString('base64'))
    .replace('__SAMPLE_LABEL__', sampleFlag ? '<p class="sample-data">가상 데이터</p>' : '');
  fs.mkdirSync(outputDir);
  fs.cpSync(path.join(assets, 'lib'), path.join(outputDir, 'lib'), { recursive: true });
  const outputPath = path.join(outputDir, '예산집행-대시보드.html');
  fs.writeFileSync(outputPath, html);
  console.log(outputPath);
}

try {
  build(...process.argv.slice(2));
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
