# [🌹 틸리 - 꾸준하고픈 개발자를 위한 공간](https://kc29be941feb6a.user-app.krampoline.com/)

<p align='center'>
<img width="200" alt="스크린샷 2023-03-16 오전 9 30 09" src="https://github.com/monsta-zo/Team7_FE/assets/83194164/908cde6b-1f19-4a35-bc36-7c77309ffef1">
</p>

<p align='center'>
    <img src="https://img.shields.io/badge/typescript-3178C6?style=flat-square&amp;logo=typescript&amp;logoColor=white">
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&amp;logo=React&logoColor=white">
    <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&amp;logo=Next.js&amp;logoColor=white">
    <img src="https://img.shields.io/badge/ReactQuery-FF4154?style=flat-square&amp;logo=ReactQuery&amp;logoColor=white">
    <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&amp;logo=Axios&amp;logoColor=white">
    <img src="https://img.shields.io/badge/Storybook-FF4785?style=flat-square&amp;logo=Storybook&amp;logoColor=white">
</p>

## 목차
1. [서비스 기획 의도](https://github.com/monsta-zo/Team7_FE/blob/develop/README.md#-%EC%99%9C-%EC%9D%B4%EB%9F%B0-%EC%84%9C%EB%B9%84%EC%8A%A4%EB%A5%BC)

# 🤔 왜 이런 서비스를?

## 📍 문제 상황 인식 1단계 <카테캠 1,2 단계를 겪으며>
- 카테캠의 핵심, 자기주도적 학습 -> **매일, 매주 TIL 작성 및 제출**
- 하지만 100명이 넘는 학생들의 TIL을 **노션의 한 페이지에서 관리**
<p align='center'>
    <img width="400" alt="image" src="https://github.com/monsta-zo/Team7_FE/assets/83194164/fa0355af-0242-472d-b0e6-0f313edd7a89">
    <img width="350" alt="image" src="https://github.com/monsta-zo/Team7_FE/assets/83194164/45d8a088-7119-49f8-a311-cdd87d0acad5">
</p>

```
학생의 불편함 - 내 TIL이 삭제되는 일, 서로의 모든 TIL이 공개
멘토의 불편함 - 일일히 들어가서 작성 여부를 확인, 제출 여부 확인 어려움

-> 학습일지를 더 편하게 관리하고 제출할 수는 없을까?
```

### ⭐️ 문제 해결 방안 <그룹 로드맵 서비스>
- 로드맵을 만들어서 구성원들을 가입할 수 있게 하자
- 로드맵의 각 단계를 직접 생성하고, 구성원들은 각 단계별로 학습할 수 있도록 하자
- 제출 기한에 맞춰 단계별로 학습한 TIL을 제출할 수 있도록 하자
- 한 눈에 제출된 TIL들을 확인할 수 있게 하자

<hr/>

## 📍 문제 상황 인식 2단계 <자기주도적 개발 학습의 어려움>
- 개발, 스택 공부는 스스로 시작해야하는 경우가 많음
```
하지만 어디서부터 어떤 순서로 해야할지 막막함
내가 잘하고 있는지도 확인하기 어려움

-> 어떤 순서로 공부할지, 또 잘하고 있는 지 확인할 방법은 없을까?
```
### ⭐️ 문제 해결 방안 <로드맵 제공 및 TIL 공유>
- 스스로 학습할 수 있게 로드맵들을 제공하자
- 각 단계별 참고 자료와 함께 학습하고 제출할 수 있도록 하자
- 제출이 완료되면 해당 단계에 대해서 제출된 TIL들을 볼 수 있도록 하자.
- 다른 사람들의 TIL을 보며 자신이 잘 학습했는지 확인할 수 있도록 하자.
 

<p align='center'>
<img width="3000" alt="스크린샷 2023-03-16 오전 9 30 09" src="https://github.com/monsta-zo/Team7_FE/assets/83194164/0eb148fe-0d60-4b33-918e-546fdab21e69">
</p>

# 🧩 주요 기능
|TIL 작성|학습 참고|
|:--:|:--:|
|- 마크다운 에디터를 통한 TIL 작성<br/>-사라질 걱정 없는 상시 저장 기능<br/> |- 각 STEP별 참고자료 확인<br/>- 글에 대한 코멘트 확인|
|<img width="476" alt="스크린샷 2023-03-19 오후 11 51 04" src="https://github.com/monsta-zo/Team7_FE/assets/83194164/0891a195-b7d3-4cf5-8d83-66f15e1ce695">|<img width="476" alt="스크린샷 2023-03-19 오후 11 51 04" src="https://github.com/monsta-zo/Team7_FE/assets/83194164/7f9dd89d-d40d-415b-9c2b-f63363ced835">|

|메인|참고 자료|
|:--:|:--:|
|- 작성한 TIL 목록들을 검색하고 확인<br/>- 장미밭을 통해 학습 열정 확인 <br/> - 개인, 그룹 로드맵을 분류하여 관리|- 로드맵에 참고할 자료를 첨부하는 기능<br/>-유튜브, 참고자료 링크<br/> |
|<img width="476" alt="스크린샷 2023-03-19 오후 11 51 04" src="https://github.com/monsta-zo/Team7_FE/assets/83194164/101dc410-2f68-4ca4-84b6-c5d00005df84">|<img width="476" alt="스크린샷 2023-03-19 오후 11 51 04" src="https://github.com/monsta-zo/Team7_FE/assets/83194164/f0812e9f-f1df-4c94-bbb0-a0dab46f022f">|

|로드맵 목록|구성원 관리|
|:--:|:--:|
|- 내가 참여하고 있는 로드맵의 목록을 확인<br/>- 현재 모집중인 그룹 로드맵 목록 확인|- 현재 로드맵에 속한 그룹원 목록<br/>-멤버 권한 변경, 강퇴 기능<br/> -그룹원의 학습일지 작성현황 확인<br/>  -로드맵 신청 관리, 수락 거절<br/>|
|<img width="476" alt="스크린샷 2023-03-19 오후 11 51 04" src="https://github.com/monsta-zo/Team7_FE/assets/83194164/0cabf489-e6e4-4236-aba1-b8d78b18f316">|<img width="476" alt="스크린샷 2023-03-19 오후 11 51 04" src="https://github.com/monsta-zo/Team7_FE/assets/83194164/a975f794-b7b1-40db-be2f-51890e4d9d39">|

|TIL 공유하기|깃허브 업로드|
|:--:|:--:|
|- 내가 공부하는 주제에 대해 타인과 생각을 공유<br/>|- 작성한 학습일지를 깃허브에 업로드 하는 기능<br/>
|<img width="476" alt="스크린샷 2023-03-19 오후 11 51 04" src="https://github.com/monsta-zo/Team7_FE/assets/83194164/db9467c1-8759-49d7-9f10-1ddda8744ea3">|<img width="476" alt="스크린샷 2023-03-19 오후 11 51 04" src="https://github.com/monsta-zo/Team7_FE/assets/83194164/735e6859-ff34-49f9-a797-930fddaecd04">|















# 🎯 FE - 핵심 개발 영역

## 성능 개선
TIL-y는 Chrome의 Lighthouse 점수를 중심으로 성능을 개선해 나갔습니다. 

> 각 페이지 Lighthouse 점수 평균표

||성능|접근성|권장사항|검색엔진 최적화|
|---|---|---|---|---|
|개선전|95|87|100|80|
|개선후|95|**99(+12)**|100|**100(+20)**|

[(각 페이지 별 자세한 점수는 해당 주소에서 확인해 보실 수 있습니다.)](https://shadow-seashore-79d.notion.site/TIL-y-92defdb409084e329020c628032c1035?pvs=4)

그 중 중점으로 개선한 웹 접근성과 검색엔진 최적화에 대해서 설명하겠습니다.

### 웹 접근성 

TIL-y는 웹 콘텐츠 접근성 지침 (WCAG) 2.0의 레벨 AA 기준에 따라 **다양한 사용자들의 접근성**을 높이기 위해 노력했습니다.
먼저, 서비스의 **테마색**을 검은색(#000000)과 흰색(#FFFFFF) 모두에 최소 대비율 4.5:1을 가지는 로즈색(#EA103C)으로 결정하였습니다.
<p align="center"><img width="300" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team7_FE/assets/83194164/5adcd16b-cce5-417e-9bc7-7a2e8097c597">
<img width="300" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team7_FE/assets/83194164/ee9587e3-1fef-460b-adc0-b8af5a1e4b41"></p>
1차적인 개발 후, 색상의 대비가 떨어지는 부분들을 특히 크기가 작은 텍스트들에 대해서 중점적으로 개선해주며 웹 접근성을 높였습니다.

그리고, 스크린 리더 사용자들을 고려하여 리더기가 인식할 수 있는 버튼 이름들을 사용하였습니다. 특히, 글자 없이 아이콘만을
사용하는 버튼들은 해당 이미지에 `alt` 속성을 반드시 포함하였습니다. 
또한, Semantic Tag의 사용을 지양하고 Heading 태그를 요소 계층 순서에 맞게 사용하도록 하였고 혹여 Heading이 렌더링되기에는 어색하지만
검색엔진이나 리더기에서 인식되어야 할 경우 `text-size` 를 `0`으로 지정해줘 보이지는 않지만 DOM 구조에는 유지 되도록 하였습니다.

### 검색 엔진 최적화

저희는 SSR과 SSG를 통한 검색 엔진 최적화(SEO)를 이끌어내기 위하여 React의 프레임워크 Next.js를 사용하였습니다. 
물론 대부분의 페이지는 로그인이 인증된 사용자만 이용 가능하지만 사용자들의 외부 유입을 위해서 로드맵 목록 페이지와 로드맵 상세 페이지는 인증되지 않은 유저도
접근 가능하도록 구성했고, 특히 **로드맵 상세 페이지**는 외부 검색 엔진을 통한 접근 가능성을 고려하여 Server-Side Rendering 적용 및 검색 엔진 최적화를 이루어냈습니다.
|로드맵 목록|로드맵 상세|
|---|---|
|비로그인 접근|SSR 렌더링|
|<img width="500" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team7_FE/assets/83194164/80bde8de-7345-4a73-ac66-b432f212b9b9">|<img width="500" alt="image" src="https://github.com/Step3-kakao-tech-campus/Team7_FE/assets/83194164/db8501f0-fa16-4076-9bf8-888e8c46e648">|

또한, 각 페이지에 마다 `<title>` 태그와 `<meta>` 태그를 적용하였습니다.

## SSR(Server-Side Rendering)

**서버 사이드 렌더링**을 적극 활용하기 위해 Next.js 프레임워크를 선택하였습니다. 특히 **각 페이지의 접근 권한**을 관리하기 위하여 클라이언트 측 렌더링 이전에 서버 사이드에서 권한들을 분기 및 예외 처리 함으로써
더 나은 사용자 경험을 제공하려 노력했습니다.

### SSR을 사용한 각 페이지 접근 권한 분기 처리

저희 서비스 페이지의 대부분은 로그인 인증된 사용자만 접근할 수 있습니다. 해당 접근 권한을 처리하는 과정에서 많은 고민과 시행 착오를 겪었습니다. 
저희는 로그인되지 않은 유저가 권한이 없는 페이지에 접근 시, 로그인 페이지로 리다이렉션을 해주고 싶었습니다.
이에 대한 첫번째 시도는 클라이언트 측에서 로그인 여부를 확인하는 방식이었습니다. 하지만 해당 방식은 리다이렉션 전에 이미 접근하려는 페이지가 초기 렌더링 되어 깜빡임 현상을 겪는다는 점과 
권한이 없는 API에 요청을 시도한다는 점에서 적절하지 않다고 판단하였습니다.

두번째 시도는 HOC와 레이아웃을 사용하는 방식이었습니다. HOC를 통해 레이아웃에 사용자 인증 확인 로직을 넣고, 페이지 컴포넌트가 렌더링되기 이전에 로그인 페이지로 리다이렉션하려는 목적이었지만,
서버 측에서 접근하려는 페이지를 pre-redering하고 Hydration을 하는 중, 클라이언트 측에서 로그인 페이지를 요청하여 Hydration 충돌이 발생하였고 이로 인해 정상적인 처리를 하지 못하였습니다.

마지막으로 시도하고 성공한 방식은 서버 사이드에서 접근 권한을 처리하는 방식이었습니다. 로그인 시, 백엔드 측에서 할당 받은 Access Token을 쿠키에 저장하고 서버 사이드에서 쿠키에 접근할 수 있다는 점을 이용하여
Access Token의 여부를 확인하고 페이지 컴포넌트에 props를 넘겨주기 전에 서버사이드에서 로그인 페이지로 리다이렉션하는 방식을 이용했습니다. 

로드맵 관리 페이지에 관리자(매니저+마스터)만 접근할 수 있다는 점도 같은 방식을 이용하여 처리하였습니다.

### React-Query의 prefetch와 Hydration을 이용한 SSR

데이터 SSR을 위하여 React-Query의 Hydration을 활용하였습니다. 서버사이드에서 `prefetchQuery` 를 이용하여 쿼리를 prefetch한 후, `queryClient`를 'dehydrate'하여 쿼리를 캐싱하였습니다. 그 후, 
SSR을 진행 중 useQuery를 만났을 때 쿼리를 'rehydrate' 함으로써 미리 데이터를 가져오고 클라이언트 측 렌더링 이전에 데이터를 페칭하는 방식으로 SSR을 구현하였습니다.


# 아키택쳐 구조
<img width="800" alt="스크린샷 2023-11-11 오후 8 02 21" src="https://github.com/Step3-kakao-tech-campus/Team7_BE/assets/131665728/aff5dd73-0cc2-4da4-8e53-f838630b7afd">
</br>
</br>

# TIL-y 구성원

<table>
  <tr>
    <td>김동영</td>
    <td>조준서</td>
    <td>이한홍</td>
    <td>김수현</td>
    <td>이상명</td>
  </tr>
  <tr>
    <td><img src="https://github.com/ehddud1006.png" alt="김동영" width="100" height="100"></td>
    <td><img src="https://github.com/monsta-zo.png" alt="조준서" width="100" height="100"></td>
    <td><img src="https://github.com/hoyaii.png" alt="이한홍" width="100" height="100"></td>
    <td><img src="https://github.com/suuding.png" alt="김수현" width="100" height="100"></td>
    <td><img src="https://github.com/sam-mae.png" alt="이상명" width="100" height="100"></td>
  </tr>
  <tr>
    <td>FE</td>
    <td>FE</td>
    <td>BE</td>
    <td>BE</td>
    <td>BE</td>
  </tr>
  <tr>
    <td>조장</td>
    <td>기확리더</td>
    <td>테크리더</td>
    <td>스케줄러</td>
    <td>리마인더</td>
  </tr>
</table>
</br>
