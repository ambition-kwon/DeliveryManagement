# 무인 택배 통합 관리 시스템
> 스마트폰과 태블릿을 활용한 저비용 통합 배송 관리 플랫폼

![Landing Page](https://github.com/user-attachments/assets/aa9a5c2d-de1b-4998-99e6-46e4ff72c996)


## 프로젝트 개요

### 개발 기간
- 2023.03 ~ 2023.06 (약 3개월)

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

## 주요 기능
-  **거주자 관리**: 거주자 정보 등록, 수정, 조회 시스템
-  **배송원 관리**: 배송원 정보 및 배송 이력 종합 관리
-  **통합 조회**: 배송 현황 실시간 모니터링 및 통계 제공
-  **음성 안내 시스템**: 각 화면별 맞춤형 음성 가이드 제공
-  **안면 캡처 기능**: 각 사용자별 신원 저장을 위한 카메라 촬영 기능
-  **바코드 인식 기능**: 후면 카메라를 활용한 바코드 자동 인식 기능


## 기술 스택

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

## 프로젝트 구조

```
DeliveryManagement/
├── Components/               # 재사용 가능한 UI 컴포넌트
├── Contexts/                 # 전역 상태 관리(Context-API)
├── Screens/
│   ├── RootStack.js          # 메인 네비게이션 스택
│   ├── MainTab.js            # 하단 탭 네비게이션
│   ├── SelectScreen.js       # 시스템 선택 화면(분기)
│   ├── ManageScreen/         # 관리 시스템 화면들 (27개)
│   │   └── ...
│   └── NoticeScreen/         # 알림 시스템 화면들 (4개)
│		└── ...
├── assets/                   # 이미지 및 아이콘 리소스
```

## 기술적 의사결정

### 1. React Native vs Native APP
**선택**: React Native
- 첫 프로젝트로 인한 개발 난이도 고려
- 개발 기간 단축 (4개월 내 완성 목표)
- iOS/Android 동시 지원 필요
- 카메라, 오디오 등 필요한 네이티브 기능 충분히 지원

### 2. Context API vs Redux
**선택**: Context API
- 상태 구조가 상대적으로 단순 (사용자 정보, 토큰 관리)
- Redux의 복잡성이 프로젝트 규모에 비해 과도함
- 첫 프로젝트로 인한 학습 곡선 고려

### 3. 음성 파일(Local vs Cloud)
**선택**: 로컬 번들링
- 오프라인 환경에서도 동작 보장
- 네트워크 지연 없는 즉시 재생
- 파일 크기가 작아 앱 용량에 큰 영향 없음

## 주요 문제 해결 경험

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
- **배운 점**: 라이브러리에 의존할 경우 해당 공식문서에 대한 중요성 체감

## 시연 영상(음성 有)
#### 관리 시스템(KIOSK - 대리인(관리인), 배송원 사용)
<div align="center">

https://github.com/user-attachments/assets/8d70f4d6-c22f-452f-8b09-e9c4ba66fe8a

</div>


#### 알림 시스템(APP - 거주자 사용)

<div align="center">
	
https://github.com/user-attachments/assets/ee9ee143-d950-45ec-9432-e35a6b3d605e

</div>

## 팀 구성 및 역할
|<img src="https://avatars.githubusercontent.com/u/5442985?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/44336444?v=4" width="150" height="150"/>|
|:-:|:-:|
|권혁원<br/>PM / UI·UX / FrontEnd|안예원<br/>BackEnd|


## 수상 내역
- 제37회 컴퓨터공학전공&인공지능전공 작품전시회 **장려상**

---

## 개발 회고

### 개발자가 되고 싶다는 막연한 꿈에서...

이 프로젝트는 저에게 있어 알고리즘을 제외한 **인생 첫 개발 경험**이었습니다. 기획부터 디자인, 개발, QA까지 모든 과정을 경험하게 된 특별한 프로젝트였습니다.

학부 2학년까지는 단순히 "개발자가 되고 싶다"는 막연한 꿈만 있었습니다. 하지만 실제로 앱을 만들어본 적도, 제대로 된 프로젝트를 경험해본 적도 없었습니다.<br> 프론트엔드와 백엔드로 구분해서 개발한다는 사실도 기획단계에서 알았으니까요...

### 모든 것이 처음이었던 시행착오
```javascript
// 당시 작성했던 코드 - 컴포넌트화를 전혀 모르던 시절
<Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
  거주자 정보
</Text>
// 위와 같은 스타일을 27 + 4개 화면에 반복해서 작성...
```

**당시 겪었던 어려움들:**
- React의 핵심인 컴포넌트 재사용 개념을 이해하지 못함
- 인라인 스타일링으로 인한 코드 중복과 유지보수 어려움
- 네비게이션 구조 설계의 복잡성(스택은 뭐고, 하단 탭은 또 뭐고)
- 2주 안에 900p에 달하는 교재를 익혀야 개발이 시작되는 상황

#### "포기하고 싶었던 순간들"

> "왜 이렇게 어렵지? 다른 사람들은 쉽게 하는 것 같은데..."

>"다른 프로젝트(PreFlightCheck)와 동시에 진행하는 게 맞나?"


특히 PreFlightCheck 프로젝트와 개발 기간이 겹치면서 **극도의 시간 압박**을 받았습니다.<br> 두 개의 프로젝트를 동시에 진행하며 며칠밤을 새며 밖은 축제기간이라 가수의 노래소리가 울려퍼지는데 방 안에서 나가지도 못한다는 사실에 **울면서(정말로)** 코딩하던 그 시절이 아직도 생생합니다. 물론 다신 겪고싶진 않지만요.

### 깨달음의 순간들

#### "UI / UX의 중요성을 체감"
Youtube에 업로드된 무료 Figma 강의를 정독하며 처음으로 디자인부터 구현까지 직접 해보면서 **사용자 경험의 중요성**을 깨달았습니다.

#### "아키텍처 설계의 중요성"
31개의 화면을 관리하면서 **체계적인 구조 설계**가 얼마나 중요한지 뼈저리게 느꼈습니다.

### 성취감과 자신감

약 4개월간의 고군분투 끝에 `장려상`이라는 결과를 얻었을 때의 기쁨은 지금도 잊을 수 없습니다. 동시에 진행했던 `PreFlightCheck`도 모든 팀 중 1위를 하였구요. 모든 것이 완벽하지 않았지만, **끝까지 해내었다**는 성취감이 이후 모든 프로젝트의 자신감과 원동력이 되었습니다.

> 이 프로젝트는 제게 **완벽보다는 완성**의 가치를 가르쳐주었습니다. 
> 모든 것이 완벽하지 않더라도, 끝까지 해내는 것이 얼마나 중요한지 깨달았고,<br>
> 그 과정에서 겪은 모든 시행착오가 지금의 저를 만든 소중한 경험이 되었습니다.<br>
> **개발자로서의 여정이 시작된 기념비적인 프로젝트입니다.**
