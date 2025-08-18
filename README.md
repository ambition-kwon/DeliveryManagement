# 대리인 기반의 효과적인 무인 택배 통합 관리 시스템
> 스마트폰과 태블릿을 활용한 저비용 통합 배송 관리 솔루션

![Landing Page](https://github.com/user-attachments/assets/86b0c241-7142-4629-8821-573e1fa45a55)

## 📌 프로젝트 개요

### 개발 동기와 목적

#### 현재 배송 시스템의 문제점
1. **무인 택배함 설치의 제약사항**
    - 높은 설치 비용 (1대당 500만원~1000만원)
    - 공간 확보의 어려움 (아파트 단지, 원룸 지역 등)
    - 유지보수 비용 및 관리 인력 필요
2. **기존 수기 관리 시스템의 비효율성**
    - 배송 정보의 수기 기록으로 인한 오류 발생
    - 부재중 배송 처리의 복잡성
    - 배송 이력 관리 및 통계 수집의 어려움

#### 솔루션 접근 방식
1.  **대리인 기반 배송 관리 시스템**
    - 무인 택배함 없이도 안전한 배송 완료 가능
    - 신뢰할 수 있는 대리인(관리사무소)을 통한 택배 수령
    - 스마트폰 앱을 활용한 실시간 정보 공유 및 알림
2.  **디지털 통합 관리 플랫폼**
    - 배송원, 거주자, 대리인 간의 원활한 정보 교환
    - 안면 캡처를 통한 신원 확인 및 보안 강화
    - 음성 안내 시스템으로 사용 편의성 향상
    - 실시간 배송 상태 추적 및 알림 서비스

## ✨ 주요 기능
-  **음성 안내 시스템**: 각 화면별 맞춤형 음성 가이드 제공
-  **안면 인식 보안**: 배송원 신원 확인을 위한 카메라 촬영 기능
-  **반응형 UI**: 모바일/태블릿 환경에 최적화된 인터페이스
-  **거주자 관리**: 거주자 정보 등록, 수정, 조회 시스템
-  **배송원 관리**: 배송원 정보 및 배송 이력 종합 관리
-  **통합 조회**: 배송 현황 실시간 모니터링 및 통계 제공

## 🛠 기술 스택

### Framework & Language
![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### Navigation & UI
![React Navigation](https://img.shields.io/badge/React_Navigation-6B73FF?style=for-the-badge&logo=react&logoColor=white) ![Material Icons](https://img.shields.io/badge/Material_Icons-757575?style=for-the-badge&logo=material-design&logoColor=white)

### Hardware
![React Native Camera](https://img.shields.io/badge/RN_Camera-FF6B6B?style=for-the-badge&logo=instagram&logoColor=white) ![React Native Sound](https://img.shields.io/badge/RN_Sound-1ED760?style=for-the-badge&logo=spotify&logoColor=white)

### Network & State
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) ![Context API](https://img.shields.io/badge/Context_API-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

### Development Tools
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)

### 기술 선택 이유
- **React Native**: 크로스 플랫폼(ios / android) 개발로 개발 효율성 극대화
- **Context API**: 간단한 전역 상태 관리로 오버헤드 최소화
- **React Navigation**: 모바일 최적화된 네비게이션 시스템

## 📁 프로젝트 구조

```
DeliveryManagement/
├── Components/                # 재사용 가능한 UI 컴포넌트
│   ├── CustomInput.js         # 커스텀 입력 필드
│   ├── LoginCustomButton.js   # 로그인 전용 버튼
│   ├── RegisterCustomButton.js # 등록 전용 버튼
│   └── Item*.js              # 다양한 아이템 컴포넌트
├── Contexts/
│   └── DataContext.js        # 전역 상태 관리 (토큰, 사용자 정보)
├── Screens/
│   ├── RootStack.js          # 메인 네비게이션 스택
│   ├── MainTab.js            # 하단 탭 네비게이션
│   ├── SelectScreen.js       # 시스템 선택 화면
│   ├── ManageScreen/         # 관리 시스템 화면들 (27개)
│   │   ├── ManageScreen1.js  # 관리자 로그인
│   │   ├── ManageScreen22.js # 거주자 정보 관리
│   │   ├── ManageScreen26.js # 배송원 정보 관리
│   │   ├── ShowFace.js       # 안면 인식 화면
│   │   └── ...
│   └── NoticeScreen/         # 알림 시스템 화면들 (4개)
├── assets/                   # 이미지 및 아이콘 리소스
```

## 💡 기술적 의사결정 및 trade-off

### 1. React Native vs Native APP
- **선택**: React Native
- **이유**: 
	- 첫 프로젝트로 인한 개발 난이도 고려
  - 개발 기간 단축 (4개월 내 완성 목표)
  - iOS/Android 동시 지원 필요
  - 카메라, 오디오 등 필요한 네이티브 기능 충분히 지원

### 2. Context API vs Redux
- **선택**: Context API
- **이유**: 
  - 상태 구조가 상대적으로 단순 (사용자 정보, 토큰 관리)
  - Redux의 복잡성이 프로젝트 규모에 비해 과도함
  - 첫 프로젝트로 인한 학습 곡선 고려

### 3. 음성 파일(Local vs Cloud)
- **선택**: 로컬 번들링
- **이유**: 
  - 오프라인 환경에서도 동작 보장
  - 네트워크 지연 없는 즉시 재생
  - 파일 크기가 작아 앱 용량에 큰 영향 없음

## 🔧 주요 문제 해결 경험

### 1. 음성 파일 재생 중 메모리 누수
- **문제**: 연속적인 음성 재생 시 메모리 사용량 급증
- **해결**: useEffect cleanup 함수에서 sound.release() 호출
- **배운 점**: React Native에서 네이티브 리소스 관리의 중요성

### 2. 다양한 화면 크기 대응
- **문제**: 태블릿과 스마트폰에서의 UI 일관성 부족
- **해결**: Dimensions API를 활용한 동적 스타일링 구현
- **배운 점**: 반응형 디자인 패턴의 실제 적용
- **개선할 점** : 반응형 CSS 지식 부족으로 인한 하드코딩 개선 필요

### 3. 네비게이션 스택 관리
- **문제**: 27개의 관리 화면 네비게이션 복잡성
- **해결**: 체계적인 네이밍 컨벤션과 명확한 화면 구조 설계
- **배운 점**: 대규모 앱에서의 아키텍처 설계 중요성

## 🎥 시연 영상
#### 관리 시스템(KIOSK)
https://github.com/user-attachments/assets/8d70f4d6-c22f-452f-8b09-e9c4ba66fe8a

#### 알림 시스템(APP)
https://github.com/user-attachments/assets/ee9ee143-d950-45ec-9432-e35a6b3d605e

## 👥 팀 구성 및 역할
|<img src="https://avatars.githubusercontent.com/u/5442985?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/44336444?v=4" width="150" height="150"/>|
|:-:|:-:|
|권혁원<br/>PM / UI·UX / FrontEnd|안예원<br/>BackEnd|
