// 복사 버튼: 같은 카드(또는 구역) 안의 .prompt 내용을 복사한다
document.addEventListener('click', function (e) {
  var btn = e.target.closest('button.copy');
  if (!btn) return;
  var box = btn.closest('.card, .install');
  var pre = box && box.querySelector('.prompt');
  if (!pre) return;
  var label = btn.textContent;
  function done(t) { btn.textContent = t; btn.classList.add('done'); setTimeout(function () { btn.textContent = label; btn.classList.remove('done'); }, 1600); }
  function fallback() {
    var r = document.createRange(); r.selectNodeContents(pre);
    var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
    done('선택됨 · Ctrl+C');
  }
  try { navigator.clipboard.writeText(pre.textContent.trim()).then(function () { done('복사됨'); }, fallback); } catch (err) { fallback(); }
});
