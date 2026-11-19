// 내 PC에서 index.html을 파일로 열었을 때 보여 줄 Skill 목록.
// GitHub Pages 주소로 열면 이 목록 대신 skills.json(자동 생성)을 읽어 수강생 Skill까지 모두 보여 준다.
// 강사가 Skill을 추가할 때 이 목록에도 한 줄 추가한다.
window.LOCAL_SKILLS = [
  { dir: 'skills/self-check', title: 'self-check', description: '공유하거나 GitHub에 올리기 전에 민감정보·README·변경 사항·올라갈 레포·복구 지점을 점검하고 공유 가능 여부를 판정합니다.' },
  { dir: 'skills/git-helper', title: 'git-helper', description: 'Git 작업을 한 단계씩 확인받으며 진행합니다. 지금 상태 설명, 저장 지점 이름 붙이기, 받아오기를 돕습니다.' },
  { dir: 'skills/dashboard-verify', title: 'dashboard-verify', description: '대시보드의 숫자가 원본 엑셀과 맞는지 다시 계산해 대조합니다.' },
  { dir: 'skills/readme-writer', title: 'readme-writer', description: '처음 보는 사람도 열어 볼 수 있도록 README.md를 작성합니다.' },
];
