# SK바이오팜 Codex + GitHub 과정 강사 레포

1일차 오후 실습에서 수강생이 Clone·Pull로 받고, Branch·PR로 자기 Skill을 올리는 레포입니다. 모든 데이터는 가상 데이터입니다.

## 안내 페이지

- **GitHub Pages 주소**로 열면 `skills/` 아래 모든 Skill(수강생이 올린 Skill 포함)이 자동으로 모입니다.
- **내 PC에서 `index.html`을 파일로 열면** 강사가 준비한 Skill만 보입니다.
- 카드마다 **설치 프롬프트 복사** 버튼이 있어 Codex에 붙여 넣으면 됩니다.

## 폴더 구성

| 경로 | 내용 |
|---|---|
| `AGENTS.md` | Codex가 이 레포를 열 때 먼저 읽는 작업 규칙 (Skill 올리는 위치·형식, 건드리면 안 되는 파일, Branch·Self-check·PR 순서) |
| `index.html` | 안내 페이지 (Skill 목록, 설치 프롬프트 복사) |
| `skills/self-check` | 공유 전 점검. 민감정보·README·변경 사항·올라갈 레포·복구 지점을 확인하고 공유 가능 여부를 판정 |
| `skills/git-helper` | Git 작업 도우미. 상태 설명, 저장 지점 이름 붙이기, 받아오기를 한 단계씩 진행 |
| `skills/dashboard-verify` | 대시보드 숫자를 원본 엑셀과 다시 계산해 대조 |
| `skills/readme-writer` | 처음 보는 사람도 열어 볼 수 있게 README 작성 |
| `skills/[내 이름]/` | 수강생이 Branch·PR로 올리는 자리 |
| `data/` | 대시보드 실습용 가상 엑셀 5종과 엑셀을 읽는 라이브러리(`data/lib/xlsx.full.min.js`) |
| `examples/self-check-demo` | Self-check가 공유 보류를 내는 시연용 예제 (README가 안내하는 파일이 없음) |

## Skill 설치

이 레포 폴더를 Codex에서 연 상태에서 아래처럼 요청합니다. 사용자 Skill 폴더는 지금 폴더 밖에 있어 승인 창이 나타나니, 복사할 위치를 확인하고 승인합니다.

```
이 레포의 skills/self-check 폴더를 내 사용자 Skill 폴더(%USERPROFILE%\.agents\skills)에 복사해서 설치해줘.
```

## 내 Skill 올리기 (Branch와 PR 실습)

1. 내 Branch를 만들고 `skills/[내 이름]/[스킬 이름]/SKILL.md`에 내 Skill을 넣어 커밋합니다.
2. Self-check로 점검한 뒤 Push하고 main으로 PR을 만듭니다.
3. 다른 사람의 폴더와 `index.html`은 고치지 않습니다.
4. 강사가 Merge하면 안내 페이지에 자동으로 나타납니다.

## 강사 운영 메모

- **Pages 설정**: Settings → Pages → Build and deployment → Source를 *Deploy from a branch*, Branch를 `main` / `(root)`로 둡니다. 공개 범위는 사내로 제한합니다. 별도 워크플로 파일은 없습니다.
- **강사 Skill 추가**: `skills/[스킬 이름]/SKILL.md`를 추가하고, 내 PC에서 파일로 열 때도 보이도록 `skills-local.js`에도 한 줄 추가합니다.
- **수업 중 Pull 시연**: 강사 PC의 `instructor-extras/skills/excel-check`를 `skills/excel-check`로 복사해 커밋·Push한 뒤 수강생에게 Pull을 요청합니다.
- **주의**: SKILL.md 안에 `{{`나 `{%`가 있으면 Pages 빌드가 실패할 수 있습니다. PR 검토 때 확인합니다.
