# 이월드 일루미네이션 스탬프투어 어플

**설명**: **이월드 일루미네이션 축제**를 주제로 학생들이 교육 목적으로 제작한 **웹뷰 기반 스탬프 투어 어플리케이션**입니다. QR 스탬프 투어 및 리워드 시스템이 구현되어 있지만, 실제 쿠폰 발급이나 응모는 이루어지지 않습니다.

---

## 목차

1. [프로젝트 소개](#프로젝트-소개)
2. [설치 및 실행 방법](#설치-및-실행-방법)
3. [팀원](#팀원)
4. [사용한 기술 스택](#사용한-기술-스택)
5. [프로젝트 상태 및 로드맵](#프로젝트-상태-및-로드맵)
6. [기술적 이슈와 해결 과정](#기술적-이슈와-해결-과정)

---

## 프로젝트 소개

- **목적**: 본 프로젝트는 학생들이 소프트웨어 개발 교육의 일환으로 제작한 앱으로, QR 스탬프 투어와 리워드 시스템을 학습하기 위한 목적으로 만들어졌습니다.

- **주의 사항**:

  - 이 어플리케이션은 **교육용**으로 제작되었으며, 실제 이월드에서 사용할 수 없습니다.
  - 앱 내의 쿠폰 발급 및 응모 기능은 실제로 이루어지지 않습니다.

- **주요 기능**:
  - QR 코드 스탬프 투어 기능
  - 수집한 스탬프에 따른 리워드 제공
  - 마이페이지에서 쿠폰 및 참여 현황 확인
  - 소셜 로그인 지원 (Kakao, Google, Naver)

---

## 설치 및 실행 방법

- **앱 다운로드** : [구글 플레이](https://play.google.com/store/apps/details?id=com.luminote.eworld)
- **웹사이트 URL**: [배포 주소](https://eworld-illumination.netlify.app/)
- **API 엔드포인트** : `http://ec2-3-27-186-168.ap-southeast-2.compute.amazonaws.com/`

---

## 팀 소개

본 프로젝트는 학생들이 소프트웨어 개발 교육 과정에서 협업을 통해 제작한 프로젝트입니다. 팀원별 역할은 다음과 같습니다:

- **손근영 (팀장)**:
  - 프론트엔드 개발 및 웹 퍼블리싱
  - 주요 기능 구현 (QR 스캔, 스탬프 관리)
- **권혜진**:
  - React 기반 프론트엔드 레이아웃 구성 및 스타일링
  - UI/UX 디자인 및 보고서 작성
- **장정규**:
  - 백엔드 개발 및 데이터베이스 설계
  - 인증 시스템(JWT) 및 API 개발

**교육 목표**: 팀원들은 각자의 역할을 맡아 실무에 가까운 프로젝트를 경험하며, React, Node.js, Android Studio 등 다양한 기술을 학습했습니다.

---

## 사용한 기술 스택

- **프론트엔드**: ![js](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white) ![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
- **백엔드**: ![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) ![]()
- **모바일 앱 개발**: ![](https://img.shields.io/badge/Android_Studio-3DDC84?style=for-the-badge&logo=android-studio&logoColor=white)
- **데이터베이스**: ![](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)
- **인증**: ![](https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink)
- **배포**: ![](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white) ![](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
- **협업 도구**: ![](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white) ![](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ![](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)

---

## 페이지 별 기능 설명

### 1. **Home**

- **설명**: 앱의 메인 화면으로, 사용자에게 주요 기능과 축제 정보를 소개합니다.
- **주요 기능**:
  - 축제 관련 안내 및 QR 스탬프 투어 소개

![home](https://github.com/user-attachments/assets/d44533bd-d26d-44a1-9f34-016172ef1110)

### 2. **SignUp**

- **설명**: 사용자가 새 계정을 생성할 수 있는 페이지입니다.
- **주요 기능**:

  - **회원가입**: 이름, ID, 비밀번호, 휴대전화 번호 등을 입력하여 계정 생성.
  - **ID 중복 확인**: 입력한 ID가 이미 존재하는지 실시간으로 확인.
  - **비밀번호 유효성 검사**: 영문자와 숫자를 포함하여 최소 8자 이상의 비밀번호만 허용.
  - **오류 처리**: 입력 값이 유효하지 않거나 필수 입력 항목이 비어 있을 경우 경고 메시지 표시.
  - **회원가입 완료 후 로그인**: 회원가입 성공 시 자동으로 로그인 처리 및 홈 화면으로 이동.

  ![signup2](https://github.com/user-attachments/assets/86f918f4-69f7-4f91-bad6-00af32a046c5)

### 3. **Login**

- **설명**: 사용자가 앱에 접근할 수 있도록 로그인 기능을 제공하는 페이지입니다.
- **주요 기능**:
  - **일반 로그인**: 사용자가 ID와 비밀번호를 입력해 로그인.
  - **소셜 로그인**: Kakao, Google, Naver 계정을 사용한 간편 로그인.
  - **오류 처리**: 로그인 실패 시 사용자에게 에러 메시지를 표시.

![social](https://github.com/user-attachments/assets/567afc4b-9294-4272-b381-f6466fd4d833)

### 4. **MyPage**

- **설명**: 사용자 계정 정보와 스탬프 활동 내역을 관리할 수 있는 페이지입니다.
- **접근 조건**: **로그인이 필요한 페이지**로, 로그인하지 않은 사용자는 접근할 수 없습니다.

  - 로그인하지 않은 상태에서 MyPage로 이동을 시도하면, 로그인 페이지로 자동 리디렉션됩니다.

- **주요 기능**:

  - **회원정보 확인 및 수정**: 사용자 이름, 프로필 이미지 등 회원정보 표시 및 수정.
  - **수집한 쿠폰 확인**: 발급된 쿠폰 내역 확인.
  - **이벤트 응모 내역**: 사용자의 이벤트 응모 내역 확인.
  - **로그아웃**: 사용자가 현재 계정에서 로그아웃 가능.

  ![modify](https://github.com/user-attachments/assets/f285d203-6293-4a1b-af36-28a5e6431977)

  ![modifyPw](https://github.com/user-attachments/assets/79fde302-f3d2-4fb4-832c-0fe2599a2f84)

  ### 5. **QR**

- **설명**: QR 코드를 스캔하여 스탬프를 수집하는 기능을 제공하는 페이지입니다.
- **주요 기능**:
  - **QR 코드 스캔**: 카메라를 통해 QR 코드를 인식.
  - **거리 확인**: 사용자의 현재 위치와 QR 코드 장소의 거리를 계산하여 유효 범위 내인지 확인.
  - **스탬프 추가**: QR 코드가 유효하면 스탬프 수집 및 추가.

![wrongPosition](https://github.com/user-attachments/assets/fecc7c22-dd94-4add-9c27-0705101f43f1)

![GIF 2024-12-24 오전 11-32-19](https://github.com/user-attachments/assets/fc227403-0e4d-4b0e-baab-57168209e325)


---

## 기술적 이슈와 해결 과정

### 1. **Tailwind CSS의 PurgeCSS 문제**

- **문제**: Tailwind CSS 사용 중 동적으로 클래스명을 전달할 경우 PurgeCSS가 이를 인식하지 못해 스타일이 적용되지 않는 오류 발생.
- **해결**: [블로그 참조](https://velog.io/@llllll18/React-Tailwind-CSS-%EB%AC%B8%EC%A0%9C%ED%95%B4%EA%B2%B0-1-2revefvt)

### 2. 로그인 여부에 따른 페이지 접근 관리

- **문제**: 인증되지 않은 사용자가 보호된 페이지에 접근하는 경우를 제어해야 함
- **해결**: [블로그 참조](https://velog.io/@llllll18/React-Protected-Router%EB%A1%9C-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%97%AC%EB%B6%80%EC%97%90-%EB%94%B0%EB%A5%B8-%ED%8E%98%EC%9D%B4%EC%A7%80-%EC%A0%91%EA%B7%BC-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0)

---
