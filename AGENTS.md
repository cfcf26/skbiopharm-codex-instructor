# 이 레포에서 작업하는 규칙

이 레포는 SK바이오팜 Codex + GitHub 과정의 강사 레포입니다. 수강생이 자기 Skill을 올리면 강사가 Merge하고, 안내 페이지(GitHub Pages)에 자동으로 모입니다. 작업을 시작하기 전에 이 규칙을 먼저 따릅니다.

## 1. 내 Skill을 올리는 위치

- 내 Skill은 반드시 `skills/[내 GitHub 아이디]/[스킬 이름]/SKILL.md`에 둡니다.
  - 예: `skills/bp10675-SojeongYang/budget-report/SKILL.md`
  - `[내 GitHub 아이디]`는 회사 GitHub 계정 아이디(`bp사번-이름성` 형식)를 그대로 씁니다. 모르면 먼저 묻습니다. 한글 이름이나 밑줄(_)을 쓰지 않습니다.
  - `[스킬 이름]`은 영어 소문자와 하이픈으로 짓습니다. 예: `budget-report`
- Skill에 필요한 다른 파일(예시 데이터, 템플릿)도 같은 `[스킬 이름]` 폴더 안에 둡니다.

## 2. SKILL.md 형식

맨 위에 아래 이름표를 넣습니다. 이름표가 있어야 안내 페이지에 제목과 설명이 보입니다.

```
---
name: budget-report
description: 이 Skill이 무엇을 하는지, 언제 쓰는지 한두 문장으로 적습니다.
---
```

- 이름표 아래에 Skill의 순서와 기준을 적습니다.
- SKILL.md 안에 중괄호 두 개(`{` 두 번)나 중괄호와 퍼센트 기호를 붙여 쓴 표기를 넣지 않습니다. 안내 페이지 빌드가 실패해 모두의 Skill 목록이 갱신되지 않습니다.
- 실명, 연락처, 키나 비밀번호, 실제 사내 데이터를 넣지 않습니다.

## 3. 건드리면 안 되는 파일

내 Skill 폴더 밖의 파일은 고치지 않습니다. 특히 아래 파일과 폴더는 수정하거나 지우지 않습니다.

- 다른 사람의 `skills/[GitHub 아이디]/` 폴더
- 강사가 준비한 Skill: `skills/self-check`, `skills/git-helper`, `skills/dashboard-verify`, `skills/readme-writer`
- 안내 페이지와 설정: `index.html`, `skills-local.js`, `skills.json`, `_config.yml`, `_layouts/`, `assets/`
- `data/`, `examples/`, `README.md`, 이 `AGENTS.md`

## 4. 올리는 순서

한 단계씩 진행하고, 각 단계가 끝나면 결과를 보고한 뒤 사용자가 확인하면 다음 단계로 넘어갑니다.

1. `main`에서 바로 작업하지 않습니다. `[내 GitHub 아이디]` 이름으로 Branch를 만들고 그 Branch로 옮겨 갑니다.
2. 내 Skill 폴더만 추가하고, 내 Skill 폴더의 파일만 지정해서 커밋합니다. `git add .`이나 `git add -A`를 쓰지 않습니다.
3. 커밋한 뒤 Self-check Skill로 점검합니다. 공유 보류가 나오면 고치고 다시 점검합니다.
4. 사용자가 요청하면 내 Branch를 GitHub에 올립니다(Push). `main`에 Push하지 않습니다. 인증 창이 나타나 진행되지 않으면 멈추고, GitHub Desktop의 Push origin 버튼으로 올리도록 안내합니다.
5. 사용자가 요청하면 내 Branch에서 `main`으로 PR을 만듭니다. PR 설명에는 추가한 Skill 이름, 하는 일, Self-check 결과를 적습니다.
6. Merge는 강사가 합니다. 수강생은 Merge하지 않습니다. 회사 설정에 따라 PR에 자동 검사가 붙으면, 검사를 통과해야 Merge할 수 있습니다.

## 5. 받아오기

- 강사 레포의 최신 내용을 받을 때는 `main`으로 옮겨 간 뒤 Pull합니다.
- 받아오기 전에 커밋하지 않은 변경이 있으면 먼저 사용자에게 알리고 어떻게 할지 묻습니다.
- 인증 문제로 받아오기가 되지 않으면 GitHub Desktop의 Fetch origin → Pull origin을 안내합니다.

## 6. 압축 파일을 올리지 않습니다

- `.zip` 같은 압축 파일은 회사 설정에 따라 Push가 거절될 수 있으므로 레포에 넣지 않습니다. 필요한 파일은 압축을 푼 상태로 넣습니다.

## 7. Skill 설치

이 레포의 Skill을 쓰려면 Skill 폴더를 사용자 Skill 폴더(`%USERPROFILE%\.agents\skills`)로 복사합니다. 복사할 위치를 사용자에게 보여 주고, 같은 이름의 폴더가 이미 있으면 덮어쓰기 전에 묻습니다.
