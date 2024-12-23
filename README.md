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

- **웹사이트 URL**: [배포 주소](https://yourprojecturl.com)
- **API 엔드포인트** : `http://ec2-3-27-186-168.ap-southeast-2.compute.amazonaws.com/`
- **apk 다운로드** : [구글 드라이브](https://play.google.com/apps/internaltest/4701578376265412125)

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

## 주요 기능

본 프로젝트는 다양한 기능을 통해 사용자 경험을 제공합니다:

### 1. **회원 관리**

- **회원가입**: 사용자가 계정을 생성하고 서비스를 이용할 수 있습니다.
- **로그인**
  - 일반 로그인: ID와 비밀번호를 사용한 인증.
  - 소셜 로그인: Kakao, Google, Naver 소셜 계정을 통한 간편 로그인.
- **회원정보 수정**: 사용자가 자신의 프로필 정보(예: 비밀번호, 전화번호)를 수정할 수 있습니다.

### 2. **QR 코드 인식 및 스탬프 기능**

- **QR 코드 인식**: 축제 장소에서 QR 코드를 스캔하여 스탬프를 수집.
- **스탬프 기능**: QR 코드를 통해 스탬프를 모으고, 특정 개수 이상 모으면 리워드를 획득.

### 3. **카카오맵 연동**

- **Custom Overlay**: 각 스탬프 장소에 대한 정보가 표시되는 커스텀 오버레이 구현.
- **Custom Marker**: 스탬프 장소를 나타내는 맞춤형 마커 제공.
- **현재 위치 구현**: 사용자의 현재 위치를 지도에 표시하여 편리한 탐색 지원.

### 4. **쿠폰 발급**

- 스탬프를 일정 개수 이상 모은 사용자에게 쿠폰 발급.
- 발급된 쿠폰은 **마이페이지**에서 확인 가능.

---

## 기술적 이슈와 해결 과정

### 1. **OAuth 소셜 로그인 구현**

- **문제**: 각 플랫폼(Kakao, Google, Naver)의 API 응답이 상이하여 통합이 어려움.
- **해결 방법**: API 응답 파싱 로직을 공통화하여 모듈화.

### 2. **QR 코드 인식 거리 제한**

- **문제**: 위치 기반 거리 계산 정확도 저하.
- **해결 방법**: Haversine 공식을 사용한 거리 계산 함수 구현.

---

## 기여 방법

1. 이슈 생성 및 제안
2. PR(Pull Request) 제출
3. 코드 리뷰 진행

---

## 라이선스

[MIT License](./LICENSE)
