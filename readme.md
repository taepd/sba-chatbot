# **🍔 오늘 뭐 먹지? - 추천시스템과 챗봇을 적용한 배달 WebApp Project**

---

## **프로젝트 설명**

---

### **기획 의도**

- IT 서비스에 있어서 개인화 시스템은 이제 선택이 아닌 필수인 시대가 되었습니다. 그래서 넷플릭스, 왓차 등에서 이미 성공적으로 자리매김한 추천시스템을 코로나 시대 더욱 주목받고 있는 음식배달 서비스에 접목시켜보았습니다. 또한 챗봇을 탑재하여 대화형 추천/검색/주문이 가능하도록 하였습니다.

---

### **구성**

- **FrontEnd**
    - **React**를 사용하여 **SPA WebApp**을 구현하였습니다. 이미 대세가 되어버린 SPA 방식은 향후 네이티브 앱으로의 전환도 용이하다는 이점이 있습니다.
    - React는 **Hook**을 활용한 함수형 컴퍼넌트로 구현하였습니다. 기능을 최소화하여 핵심만 구현한 관계로 Redux를 활용한 상태관리를 생략하였습니다.
- **BackEnd**
    - **Flask**로 **REST API**를 구현하였습니다. DB는 **MariaDB**를 사용하였고 **SqlAlchemy**를 이용해 **ORM**를 활용하여 연계하였습니다.
- **Machine Learning**
    - 추천시스템(recommender system)
        - **MF(Matrix Factorization) 알고리즘**을 **tensorflow**를 기반으로 구현하였습니다. -> 성능상의 문제를 해결하기 위해 **Surprise**로 대체하였습니다.
        - **잠재요인/최근접이웃 협업필터링**을 사용하여 예상평점 및 사용자/아이템 기반 유사도 추천을 구현하였습니다.
    - 챗봇(ChatBot)
        - 작성 중

---

### 실행 방법

- FrontEnd
    - **ui** 폴더를 다운받고 `npm(npx)` 또는 `yarn` 을 이용하여 실행합니다.
    - ex) `yarn` 으로 모듈 다운로드 후, `yarn start` 로 실행
- BackEnd
    - api폴더를 다운받고 `requirements.txt`의 패키지를 다운받은 후, api폴더 상에서 `[run.py](http://run.py)` 를 실행합니다.
    - ex) `pip install -r requirements.txt` 로 패키지 설치 후, `python[run.py](http://run.py)` 로 실행

## etc.

---

- [http://react-flask.taepd.p-e.kr](http://react-flask.taepd.p-e.kr/) 에서 본 프로젝트를 직접 테스트해 볼 수 있습니다.
- 프로젝트에 대한 보다 자세한 설명은 (링크 추가할 것)에 있습니다.
- raw data 및 preprocessing data 등의 데이터는 업로드하지 않았습니다. 프로젝트에 대한 보다 자세한 설명을 참조바랍니다.