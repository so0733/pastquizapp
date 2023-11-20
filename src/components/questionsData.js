const questions = [
    // 2020년 1회
    {
        id: 1,
        rotation: '2020년 1회',
        question: '살충제 패러독스의 개념에 관해서 서술하시오.',
        answer: '동일한 테스트 케이스에 의한 반복적 테스트는 새로운 버그를 찾지 못한다',
    },
    {
        id: 2,
        rotation: '2020년 1회',
        question: '데이터 마이닝의 개념에 관해서 서술하시오.',
        answer: '대규모로 저장된 데이터 안에서 체계적이고 자동적으로 통계적 규칙이나 패턴을 찾아내는 기술',
    },
    {
        id: 3,
        rotation: '2020년 1회',
        question: '프로토콜의 기본요소 3가지를 쓰시오.',
        answer: '구문, 의미, 타이밍',
    },
    {
        id: 4,
        rotation: '2020년 1회',
        question: '다음 설명하는 용어는 무엇인지 쓰시오.',
        detail: 'W3C(World wide Web Consortium)에서 개발되었고, 웹 브라우저 간 호환이 되지 않는 문제와 SGML(Standard Generalized Markup Language)의 복잡함을 해결하기 위해 개발된 다목적 마크업 언어이다.',
        answer: 'XML',
    },
    {
        id: 5,
        rotation: '2020년 1회',
        question: '속성-값(Attribute-Value Pair)으로 이루어진 데이터 오브젝트를 전달하기 위해 사용하는 개방형 표준 포맷 이다. Ajax(Asynchronous JavaScript and XML)에서 많이 사용되고 XML(eXtensible Markup Language) 을 대체하는 주요 데이터 포맷이다. 언어 독립형 데이 터 포맷으로 다양한 데이터 프로그래밍 언어에서 사용 하고 있는 기술은 무엇인가?',
        answer: 'JSON',
    },
    {
        id: 6,
        rotation: '2020년 1회',
        question: 'STUDENT 테이블에 컴퓨터과 학생 50명, 인터넷과 학생 100명, 사무자동화과 학생 50명의 정보가 저장되어 있을 때, 다음 SQL 문의 실행 결과에 따른 튜플의 수 는? (단, DEPT 칼럼은 학과명이다.)',
        detail: "① SELECT DERP FROM STUDENT;\n② SELECT DISTINCT DEPT FROM STUDENT;\n③ SELECT COUNT(DISTINCT DEPT) FROM STUDENT \n     WHERE DEPT = '컴퓨터과';",
        answer: '\n ① : 200\n ② : 3\n ③ : 1',
    },
    {
        id: 7,
        rotation: '2020년 1회',
        question: '스케줄링 방식에서 HRN(Highest Response ratio Next) 우선순위 계산식을 쓰시오.',
        answer: '(대기 + 서비스 시간) ÷ 서비스 시간',
    },
    {
        id: 8,
        rotation: '2020년 1회',
        question: '트랜잭션의 특성 중 일관성, 지속성 외 2개의 특성을 쓰시오.',
        answer: '원자성, 격리성',
    },
    {
        id: 9,
        rotation: '2020년 1회',
        question: '공격자가 패킷의 출발지 주소나 포트를 임의로 변경해 출발지와 목적지 주소를 동일하게 함으로써 공격 대상 컴퓨터의 실행속도를 느리게 하거나 동작을 마비시켜 서 비스 거부 상태에 빠지도록 하는 공격 방법은 무엇인가?',
        answer: '랜드 어택',
    },
    {
        id: 10,
        rotation: '2020년 1회',
        question: 'RFC 1321로 지정되어 있으며, 주로 프로그램이나 파일이 원본 그대로인지를 확인하는 무결성 검사 등에 사용된다. 1991년 로널드 라이베스트(Ronald Rivest) 가 예전에 쓰이던 MD4를 대체하기 위해 고안된 128비 트 암호화 해시 함수는 무엇인가?',
        answer: 'MD5',
    },
    {
        id: 11,
        rotation: '2020년 1회',
        question: '다음은 공통 모듈 구현의 개념에 대한 설명이다. 괄호 (  ) 안에 알맞은 용어를 쓰시오.',
        detail:
          " 소프트웨어 개발에 있어 기능을 분할하고 추상화하여 성능을 향상시키고 유지보수를 효과적으로 하기 위한 공통 컴포넌트 구현 기법이다.\n\n" +
          " 인터페이스 모듈, 데이터베이스 접근 모듈 등 필요한 공통 모듈을 구현한다.\n\n" +
          " 모듈 간의 (  ①  ) 은/는 줄이고, (  ②  ) 은/는 높은 공통 모듈 구현을 권한하고 있다.",
        answer: '① 결합도 ② 응집도',
    },
    {
        id: 12,
        rotation: '2020년 1회',
        question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '50, 75, 85, 95, 100',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-1-12.png',
    },
    {
        id: 13,
        rotation: '2020년 1회',
        question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '0 1 2 3',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-1-13.png',
    },
    {
        id: 14,
        rotation: '2020년 1회',
        question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '-8',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-1-14.png',
    },
    {
        id: 15,
        rotation: '2020년 1회',
        question: '다음 설명하는 제품 패키지 릴리즈 노트의 작성 항목은 무엇인가?',
        detail: "문서 이름(릴리즈 노트 이름), 제품 이름, 버전 번호, 릴리즈 날짜, 참고 날짜, 노트 버전 등의 정보",
        answer: '헤더',
    },
    {
        id: 16,
        rotation: '2020년 1회',
        question: 'LoC(Line of Code)가 30,000라인이고, 개발자가 5명 이며, 개발자가 월평균 300라인을 개발한다. 이때 프로젝트 개발 기간과 계산식을 쓰시오.',
        answer: '\n   개발 기간 : 20개월\n   계산식 : (30000÷300)÷5=20개월',
    },
    {
        id: 17,
        rotation: '2020년 1회',
        question: 'OSI 계층 중 비트를 전송하는 계층은 무엇인가?',
        answer: '물리 계층',
    },
    {
        id: 18,
        rotation: '2020년 1회',
        question: '애플리케이션의 성능을 측정하기 위한 지표는 무엇인가?',
        answer: '\n ① 처리량 \n ② 응답시간 \n ③ 경과시간',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-1-18.png',
    },
    {
        id: 19,
        rotation: '2020년 1회',
        question: '비 정규화(De-Normalization)의 개념을 쓰시오.',
        answer: '정규화된 엔터티, 속성, 관계에 대해 성능 향상과 개발 운영의 단순화를 위해 중복, 통합, 분리 등을 수행하는 데이터 모델링 기법',
    },
    {
        id: 20,
        rotation: '2020년 1회',
        question: '다음은 모듈의 관계를 나타낸 다이어그램이다. fan-in 개수가 2 이상인 모듈 명칭을 쓰시오.',
        answer: 'F, H',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-1-20.png',
    },

    // 2020년 2회
    {
        id: 21,
        rotation: '2020년 2회',
        question: '정보시스템 운영 중 서버가 다운되거나 자연재해나 시스템 장애 등의 이유로 고객에게 서비스가 불가능한 경우가 종종 발생한다. 이와 같은 상황에서 비상사태 또는 업무중단 시정부터 업무가 복구되어 다시 정상 가동될 때까지의 시간을 의미하는 용어가 무엇인지 쓰시오. (한글 또는 영문 약어 또는 full-name으로 작성)',
        answer: '재해 복구 시간 또는 RTO 또는 Recovery Time Objective',
    },
    {
        id: 22,
        rotation: '2020년 2회',
        question: '다음은 파이썬 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '{\'중국\', \'한국\', \'베트남\', \'홍콩\', \'태국\'}',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-2-02.png',
    },
    {
        id: 23,
        rotation: '2020년 2회',
        question: '브라우저가 가지고 있는 XMLHttpRequest 객체를 이용해서 전체 페이지를 새로 고치지않고도 페이지의 일부분만을 위한 데이터를 로드하는 기법이며, 하이퍼텍스트 표기 언어(HTML) 만으로 어려운 다양한 작업을 웹 페이지에서 구현해 이용자가 웹 페이지와 자유롭게 상호 작용할 수 있도록 하는 기술명을 쓰시오. (영문 full name, 약어, 한글로 작성)',
        answer: '비동기 통신기법 또는 AJAX 또는 Asynchronous JavaScript and XML',
    },
    {
        id: 24,
        rotation: '2020년 2회',
        question: '절차보다는 사람이 중심이 되어 변화에 유연하고 신속하게 적응하면서 효율적으로 시스템을 개발할 수 있는 신속 적응적 경량 개발방법론. 개발 기간을 짧고 신속하게 가져가는 특징이 있으며 워터폴에 대비되는 방법론으로 최근 회사에서 각광받는 방법론은무엇인가?',
        answer: '애자일(방법론) 또는 에자일 또는 Agile',
    },
    {
        id: 25,
        rotation: '2020년 2회',
        question: '다음은 자바 소스 코드이다. 빈 칸 (  )에 알맞은 답을 쓰시오.',
        answer: 'new',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-2-05.png',
    },
    {
        id: 26,
        rotation: '2020년 2회',
        question: '아래 조건에 만족하는 SQL문을 작성하시오.',
        answer: 'SELECT 학번, 이름 FROM 학생 WHERE 학년 IN (3,4);',
        imageSize: { width: '500px', height: '350px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-2-06.png',
    },
    {
        id: 27,
        rotation: '2020년 2회',
        question: 'SQL 구문 중 데이터 제어어(TCL)에는 COMMIT, CHECKPOINT, ROLLBACK 등이 있다. 이 중, ROLLBACK에 대해 서술하시오.',
        answer: '트랜잭션 실패 시 작업을 취소하고 트랜잭션 실행 이전으로 되돌리는 명령어',
    },
    {
        id: 28,
        rotation: '2020년 2회',
        question: '무결성과 인증을 보장하는 인증헤더(AH)와 기밀성을 보장하는 암호화(ESP)를 이용한 프로토콜로 망 계층(Network Layer)인 인터넷 프로토콜(IP)에서 보안성을 제공해 주는 표준화된 기술에 대해서 작성하시오.',
        answer: 'IPSec',
    },
    {
        id: 29,
        rotation: '2020년 2회',
        question: '애플리케이션을 실행하지 않고, 소스 코드에 대한 코딩 표준, 코딩 스타일, 코드 복잡도 및 남은 결함을 발견하기 위해 사용하는 도구는 무엇인지 작성하시오.',
        answer: '정적 분석 도구',
    },
    {
        id: 30,
        rotation: '2020년 2회',
        question: '다음 보기가 설명하는 패턴을 작성하시오. (영문 full-name으로 작성하시오.)',
        detail: "한 객체의 상태가 바뀌면 그 객체에 의존하는 다른 객체들한테 연락이 가고 자동으로 내용이 갱신되는 방법으로 일대다 의존성을 가지는 디자인 패턴과 서로 상호작용을 하는 객체 사이에서는 가능하면 느슨하게 결합하는 디자인을 사용해야 한다.",
        answer: 'Observer(Pattern)',
    },
    {
        id: 31,
        rotation: '2020년 2회',
        question: 'Linux 운영체제 위에서 구동하며 휴대폰 전화를 비롯한 휴대용 장치를 위한 운영체제와 미들웨어, 사용자 인터페이스 그리고 표준 응용 프로그램(웹 브라우저, 이메일 클라이언트. 단문 메시지 서비스(SMS), MMS 등을 포함하고 있는 소프트웨어 스택이자 리눅스 모바일 운영체제이다. 개발자들이 자바와 코틀린 언어로 응용 프로그램을 작성할 수 있게 하였으며, 컴파일된 바이트코드를 구동할 수 있는 런타임 라이브러리를 제공하는 운영체제는 무엇인지 작성하시오.',
        answer: '안드로이드(Android)',
    },
    {
        id: 32,
        rotation: '2020년 2회',
        question: 'STUDENT 테이블의 NAME 속성에 IDX_NAME 이름으로 인덱스 생성하는 SQL 문을 작성하시오.',
        answer: 'CREATE INDEX IDX_NAME ON STUDENT (NAME);',
    },
    {
        id: 33,
        rotation: '2020년 2회',
        question: '다음 설명 중 빈칸에 들어갈 알맞은 용어를 작성하시오.',
        detail: "HTTP, HTTPS, SMTP를 통해서 XML 기반의 데이터를 주고받는 프로토콜로 웹 서비스 방식에서 HTTP 기반의 (  )을/를 사용하여 송수신한다. (  ) 대신 레스트 풀(RESTful) 프로토콜로 대체할 수 있다.",
        answer: 'SOAP(Simple Object Access Protocol)',
    },
    {
        id: 34,
        rotation: '2020년 2회',
        question: 'SQL Injection이 무엇인지 서술하시오.',
        answer: '응용프로그램의 보안 취약점을 이용해서 악의적인 SQL 구문을 삽입, 실행시켜서 데이터베이스(DB)의 접근을 통해 정보를 탈취하거나 조작 등의 행위를 하는 공격기법',
    },
    {
        id: 35,
        rotation: '2020년 2회',
        question: 'UI 설계 원칙에서 정확하고 완벽하게 사용자의 목표가 달성될 수 있도록 제작할 수 있어야 한다. 다음 빈 칸 (  )에 들어갈 특징은 무엇인가?',
        answer: '유효성',
        imageSize: { width: '450px', height: '150px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-2-15.png',
    },
    {
        id: 36,
        rotation: '2020년 2회',
        question: '사용자에게 읽기/쓰기/실행 권한을 부여하고 그룹에게는 읽기/실행을 부여하고 그이외에는 실행 권한을 a.txt에 부여하는 명령어를 한 줄로 작성하시오.(8진법을 사용하시오)',
        answer: 'chmod 751 a.txt',
    },
    {
        id: 37,
        rotation: '2020년 2회',
        question: '전 세계 오픈된 정보를 하나로 묶는 방식으로 link data와 open data의 합성어가 무엇인지 작성하시오.',
        answer: 'Linked Open Data',
    },
    {
        id: 38,
        rotation: '2020년 2회',
        question: '보기에 주어진 데이터베이스 설계 순서를 알맞게 나열하시오.',
        answer: '개념적 설계, 논리적 설계, 물리적 설계',
        imageSize: { width: '450px', height: '150px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-2-18.png',
    },
    {
        id: 39,
        rotation: '2020년 2회',
        question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
        answer: 'a=10',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-2-19.png',
    },
    {
        id: 40,
        rotation: '2020년 2회',
        question: '소프트웨어 개발 과정에서 변경 사항을 관리하는 기법은 (  )기법이라고 하며 (  )기법을 활용한 도구로는 CVS, SVN, Git 등이 있다. 빈칸에 알맞은 용어를 작성하시오.',
        answer: '형상 관리',
    },

    // 2020년 3회
    {
        id: 41,
        rotation: '2020년 3회',
        question: '리팩토링의 목적에 대한 설명을 작성하시오.',
        answer: '소프트웨어를 이해하기 쉽고 수정하기 쉽도록 만드는 것으로 유지보수성 향상, 유연한 시스템, 생산성 향상, 품질 향상을 목적으로 한다.',
    },
    {
        id: 42,
        rotation: '2020년 3회',
        question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '0(숫자 0)',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-3-02.png',
    },
    {
        id: 43,
        rotation: '2020년 3회',
        question: '대표적인 내부 라우팅 프로토콜로 다익스트라 알고리즘을 이용한 대규모 네트워크에 적합한 링크 상태 라우팅 프로토콜로 불리는 라우팅 프로토콜은 무엇인가?',
        answer: 'OSPF',
    },
    {
        id: 44,
        rotation: '2020년 3회',
        question: '심리학자 톰 마릴은 컴퓨터가 메세지를 전달하고, 메세지가 제대로 도착했는지 확인하며, 도착하지 않았을 경우 메세지를 재전송하는 일련의 방법을 \'기술적 은어\'를 뜻하는 (      )이라는 용어로 정의했다. 괄호 (    ) 안에 들어갈 용어를 쓰시오.',
        answer: '프로토콜',
    },
    {
        id: 45,
        rotation: '2020년 3회',
        question: '형상 통제를 설명하시오.',
        answer: '형상 항목의 버전 관리를 위해서 변경 여부와 변경 활동을 통제하는 활동',
    },
    {
        id: 46,
        rotation: '2020년 3회',
        question: 'TCP/IP에서 오류가 발생하면 (  ) 메세지를 보내서 오류가 발생했음을 알린다. 괄호 (  ) 안에 들어갈 용어를 쓰시오.',
        answer: 'ICMP(Internet Control Message Protocol)',
    },
    {
        id: 47,
        rotation: '2020년 3회',
        question: '다음 아래 제어 흐름 그래프가 분기 커버리지를 만족하기 위한 테스팅 순서를 쓰시오.',
        answer: '1234561, 124567 또는 1234567, 124561',
        imageSize: { width: '500px', height: '350px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-3-07.png',
    },
    {
        id: 48,
        rotation: '2020년 3회',
        question: '다음 조건을 만족하면서, 과목별 점수의 평균이 90 이상인 과목이름, 최소점수, 최대점수를 구하는 SQL문을 작성하시오.',
        answer: '\n SELECT 과목이름, MIN(점수) AS 최소점수, MAX(점수) AS 최대점수 FROM 성적\n GROUP BY 과목이름 HAVING AVG(점수) >= 90;',
        imageSize: { width: '400px', height: '450px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-3-08.png',
    },
    {
        id: 49,
        rotation: '2020년 3회',
        question: '학생 테이블에서 이름이 민수인 튜플을 삭제하는 SQL문을 작성하시오.',
        answer: 'DELETE FROM 학생 WHERE 이름 = \'민수\';',
        imageSize: { width: '400px', height: '150px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-3-09.png',
    },
    {
        id: 50,
        rotation: '2020년 3회',
        question: '릴레이션 A, B가 있을 때 릴레이션 B 조건에 맞는 것들만 릴레이션 A에서 튜플을 꺼내 프로젝션하는 관계 대수의 기호는 무엇인가?',
        answer: '÷',
    },
    {
        id: 51,
        rotation: '2020년 3회',
        question: '헝가리안 표기법(Hungarian Case)에 대해서 서술하시오.',
        answer: '식별자 표기 시 접두어에 자료형을 붙이는 표기법',
    },
    {
        id: 52,
        rotation: '2020년 3회',
        question: '테스트의 종류 중, 둥치분할 테스트, 경계값 분석 테스트 등의 종류가 있는 테스트 기법을 쓰시오.',
        answer: '블랙박스 테스트 (=명세 기반 테스트)',
    },
    {
        id: 53,
        rotation: '2020년 3회',
        question: 'DB스키마에 대해서 서술하시오.',
        answer: '데이터베이스의 구조, 제약조건 등의 정보를 담고 있는 기본적인 구조',
    },
    {
        id: 54,
        rotation: '2020년 3회',
        question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '234',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-3-14.png',
    },
    {
        id: 55,
        rotation: '2020년 3회',
        question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '30',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-3-15.png',
    },
    {
        id: 56,
        rotation: '2020년 3회',
        question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
        answer: 'Vehicle name:Spark',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-3-16.png',
    },
    {
        id: 57,
        rotation: '2020년 3회',
        question: 'EAI 유형에는 메세지 버스(Message bus) 유형, 하이브리드(Hybrid) 유형, (  ⓐ  ) 유형, (  ⓑ  ) 유형이 있다. 괄호 안에 들어갈 말을 적으시오.',
        answer: 'ⓐ 포인트 투 포인트(Point-to-point) ⓑ 허브 앤 스포크(Hub & Spoke)',
    },
    {
        id: 58,
        rotation: '2020년 3회',
        question: 'UI 설계 원칙 중 직관성에 대해서 쓰시오.',
        answer: '누구나 쉽게 이해하고, 쉽게 사용할 수 있어야 하고,쉬운 검색, 쉬운 사용성, 일관성이 부특성을 가지고 있는 UI설계 원칙',
    },
    {
        id: 59,
        rotation: '2020년 3회',
        question: ' C++에서 생성자란 무엇인지 쓰시오.',
        answer: '해당 클래스의 객체가 생성될 때 자동으로 호출되는 특수한 종류의 메서드',
    },
    {
        id: 60,
        rotation: '2020년 3회',
        question: '학생 테이블에 주소 속성을 추가하는 SQL문을 작성하시오.',
        detail: "(  ⓐ  ) TABLE 학생 (  ⓑ  ) 주소 VARCHAR(20);",
        answer: 'ⓐ ALTER ⓑ ADD',
    },
    
    // 2020년 4회
    {
        id: 61,
        rotation: '2020년 4회',
        question: '현재 IPv4의 확장형으로 IPv4가 가지고 있는 주소 고갈, 보안성, 이동성 지원 등의 문제점을 해결하기 위해서 개발된 128비트 주소체계를 갖는 차세대 인터넷 프로토콜은 무엇인가?',
        answer: 'IPv6',
    },
    {
        id: 62,
        rotation: '2020년 4회',
        question: ' 목적에 따른 디자인 패턴의 유형에는 생성, 구조, (  ) 이/가 있다. 괄호 (  ) 안에 알맞는 유형을 쓰시오.',
        answer: '행위',
    },
    {
        id: 63,
        rotation: '2020년 4회',
        question: '다음은 어떤 UML 다이어그램에 관한 예시이다. 어떤 종류의 다이어그램인가?',
        answer: '패키지 다이어그램',
        imageSize: { width: '450px', height: '200px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-4-03.png',
    },
    {
        id: 64,
        rotation: '2020년 4회',
        question: '데이터베이스의 회복(Recovery) 기법 중 Rollback 시 Redo, Undo가 모두 실행되는 트랜잭션 처리법으로 트랜잭션 수행 중 갱신 결과를 바로 DB에 반영하는 기법은 무엇인가?',
        answer: '즉각 갱신 회복 기법',
    },
    {
        id: 65,
        rotation: '2020년 4회',
        question: '다음은 n이 10일 때, 10을 2진수로 변환하는 자바 소스 코드이다. ①,②에 알맞는 값을 적으시오.',
        detail: "[출력결과] 00001010",
        answer: '\n ① :  n > 0 or n >=1 or i < 8 or i <= 7\n ② :  n%2 or n&1',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-4-05.png',
    },
    {
        id: 66,
        rotation: '2020년 4회',
        question: ' 다음은 자바 소스 코드이다. 출력 결과를 보고, ①,②에 알맞는 값을 적으시오.',
        detail: "[출력결과]\n 1 4 7 10 13 \n 2 5 8 11 14 \n 3 6 9 12 15 ",
        answer: '① 3 ② 5',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-4-05.png',
    },
    {
        id: 67,
        rotation: '2020년 4회',
        question: ' 해킹 공격의 종류 중 하나인 스니핑(Sniffing)에 대하여 설명하시오.',
        answer: '암호화되지 않은 패킷들을 수집하여 순서대로 재조합 후 ID, PW와 같은 중요한 정보를 유출하기 위한 수동적인 형태의 공격',
    },
    {
        id: 68,
        rotation: '2020년 4회',
        question: 'IP 패킷에서 외부의 공인 IP주소와 포트 주소에 해당하는 내부 IP주소를 재기록하여 라우터를 통해 네트워크 트래픽을 주고받는 기술은 무엇인가?',
        answer: 'NAT(Network Address Transformation)',
    },
    {
        id: 69,
        rotation: '2020년 4회',
        question: '다음은 파이썬 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '\n [1,2,3]\n 7\n 123\n 45\n 6789',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-4-09.png',
    },
    {
        id: 70,
        rotation: '2020년 4회',
        question: '분산 컴퓨팅 기술 기반의 데이터 위변조 방지 기술로 P2P방식을 기반으로 하여 소규모 데이터들이 연결되어 형성된 \'블록\'이라는 분산 데이터 저장 환경에 관리 대상 데이터를 저장함으로써 누구도 임의로 수정할 수 없고 누구나 변경의 결과를 열람할 수 있게끔 만드는 기술은 무엇인가?',
        answer: '블록체인',
    },
    {
        id: 71,
        rotation: '2020년 4회',
        question: '오픈 소스 기반으로 한 분산 컴퓨팅 플랫폼으로, 일반 PC급 컴퓨터들로 가상화된 대형 스토리지를 형성하고 그 안에 보관된 거대한 데이터 세트를 병렬로 처리할 수 있도록 개발된 자바 소프트웨어 프레임워크로 구글, 야후 등에 적용한 기술은 무엇인가?',
        answer: '하둡',
    },
    {
        id: 72,
        rotation: '2020년 4회',
        question: '이상 현상의 종류 3가지를 쓰시오',
        answer: '삽입 이상, 삭제 이상, 갱신 이상',
    },
    {
        id: 73,
        rotation: '2020년 4회',
        question: '다음은 프로세스 상태 전이도이다. ①,②,③에 알맞은 상태를 쓰시오.',
        answer: '① 준비 ② 실행 ③ 대기',
        imageSize: { width: '450px', height: '200px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-4-13.png',
    },
    {
        id: 74,
        rotation: '2020년 4회',
        question: '테스트 오라클 중 특정한 몇 개의 입력값에 대해서만 기대하는 결과를 제공해주는 오라클은 무엇인가?',
        answer: '샘플링 오라클',
    },
    {
        id: 75,
        rotation: '2020년 4회',
        question: '점수에 따른 성적 부여가 잘 되었는지 테스트하고자 한다. 아래에 알맞는 테스트 기법은 무엇인가?',
        detail: '[테스트 값]\n -10점 / 30점 / 65점 / 75점 / 85점 / 95점 / 110점',
        answer: '동등분할 테스트',
        imageSize: { width: '350px', height: '200px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-4-15.png',
    },
    {
        id: 76,
        rotation: '2020년 4회',
        question: '다음 조건을 만족하면서 학과별로 튜플 수가 얼마인지 구하는 SQL문을 작성하시오.',
        detail: '- 대소문자를 구분하지 않는다.\n- WHERE 구문을 사용하지 않는다.\n- GROUP BY를 사용한다.\n- 세미콜론(;)은 생략 가능하다.\n- 별칭(AS)을 사용해야 한다.\n- 집계 함수를 사용해야 한다.',
        answer: 'SELECT 학과, COUNT(학과) AS 학과별튜플수 FROM 학생 GROUP BY 학과;',
        imageSize: { width: '500px', height: '350px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-4-16.png',
    },
    {
        id: 77,
        rotation: '2020년 4회',
        question: '데니스 리치와 켄톰슨 등이 함께 벨 연구소를 통해 만든 운영체제이며, 90% 이상 C언어로 구현되어 있고, 시스템 프로그램이 모듈화되어 있어서 다른 하드웨어 기종으로 쉽게 이식 가능하며 계층적 트리 구조를 가짐으로써 통합적인 파일 관리가 용이한 운영체제는 무엇인가?',
        answer: '유닉스',
    },
    {
        id: 78,
        rotation: '2020년 4회',
        question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '\n KOREA \n EA \n K \n E \n M',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-4-18.png',
    },
    {
        id: 79,
        rotation: '2020년 4회',
        question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '1',
        imageSize: { width: '400px', height: '450px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-4-19.png',
    },
    {
        id: 80,
        rotation: '2020년 4회',
        question: '정보보안에서 가용성(Availablility) 에 대하여 서술하시오.',
        answer: '권한을 가진 사용자가 애플리케이션이 원하는 서비스를 지속 사용할 수 있도록 보장하는 특성',
    },

    // 2021년 1회
    {
        id: 81,
        rotation: '2021년 1회',
        question: '물리 네트워크(MAC) 주소에 해당하는 IP 주소를 알려주는 프로토콜로 역순 주소 결정 프로토콜을 무엇이라고 하는지 쓰시오.',
        answer: 'RARP(Reverse Address Resolution Protocol)',
    },
    {
        id: 82,
        rotation: '2021년 1회',
        question: '다음은 DB 설계 절차에 관한 설명이다. 다음 빈칸에 들어갈 알맞은 용어를 쓰시오.',
        detail: "(  ①  ) 은/는 특정 DBMS의 특성 및 성능을 고려하여 데이터베이스 저장 구조로 변환하는 과정으로 결과로 나오는 명세서는 테이블 정의서 등이 있다.\n\n" +
                "(  ②  ) 은/는 현실 세계에 대한 인식을 추상적, 개념적으로 표현하여 개념적 구조를 도출하는 과정으로 주요 산출물에는 E-R 다이어그램이 있다.\n\n" +
                "(  ③  ) 은/는 목표 DBMS에 맞는 스키마 설계, 트랜잭션 인터페이스를 설계하는 정규화 과정을 수행한다.\n\n" + 
                "[보기]\n 구현 / 개념적 설계 / 논리적 설계 / 요구사항 분석 / 물리적 설계",
        answer: '① 물리적 설계 ② 개념적 설계 ③ 논리적 설계',
    },
    {
        id: 83,
        rotation: '2021년 1회',
        question: '다음은 요구사항의 분류에 대한 설명이다. 괄호 (  ) 안에 들어갈 요구사항의 유형에 대해서 쓰시오.',
        detail: "(  ①  ) 요구사항은 시스템이 제공하는 기능, 서비스에 대한 요구사항이다.\n\n" +
                "(  ②  ) 요구사항은 시스템이 수행하는 기능 이외의 사항, 시스템 구축에 대한 제약사항에 관한 요구사항이다.",
        answer: '① 기능 ② 비기능',
    },
    {
        id: 84,
        rotation: '2021년 1회',
        question: '웹 서비스명, 제공 위치, 메세지 포맷, 프로토콜 정보 등 웹 서비스에 대한 상세 정보가 기술된 XML 형식으로 구성된 언어를 무엇이라고 하는지 쓰시오.',
        answer: 'WSDL',
    },
    {
        id: 85,
        rotation: '2021년 1회',
        question: '다음은 파이썬 소스 코드이다. 출력 결과를 쓰시오.',
        answer: 'SKIDDP',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2021-1-05.png',
    },
    {
        id: 86,
        rotation: '2021년 1회',
        question: '다음 SQL 실행 결과를 숫자만 쓰시오.',
        detail: "SELECT COUNT(*) FROM 급여\nWHERE EMPNO > 100 AND SAL >= 3000 OR EMPNO = 200;",
        answer: '1',
        imageSize: { width: '450px', height: '200px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2021-1-06.png',
    },
    {
        id: 87,
        rotation: '2021년 1회',
        question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '\n3\n1\n45\n50\n89',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2021-1-07.png',
    },
    {
        id: 88,
        rotation: '2021년 1회',
        question: '정규화된 엔티티, 속성, 관계에 대해 성능 향상과 개발 운영의 단순화를 위해 중복, 통합, 분리 등을 수행하는 데이터 모델링의 기법을 무엇이라고 하는지 쓰시오.',
        answer: '비정규화 or 반정규화 or 역정규화',
    },
    {
        id: 89,
        rotation: '2021년 1회',
        question: '다음은 블랙박스 기법에 대한 예제이다. 블랙박스 기법 두 가지를 쓰시오.',
        detail : "① 0 ≤ x ≤ 10이면 -1, 0, 10, 11 검사 \n\n② 입력 데이터의 영역을 유사한 도메인별로 유효값과 무효값을 그룹핑하여 나누어서 검사",
        answer: '① 경곗값 분석 ② 동등분할 테스트',
    },
    {
        id: 90,
        rotation: '2021년 1회',
        question: '다음은 테스트 종류에 대한 설명이다. 빈칸에 들어갈 알맞은 용어를 보기에서 찾아 기호로 쓰시오.',
        detail : "(  ①  ) 은/는 개별 모듈, 서브루틴이 정상적으로 실행되는지 확인 \n\n(  ②  ) 은/는 인터페이스 간 시스템이 정상적으로 실행되는지 확인 \n\n[보기]\n시스템 테스트 / 인수 테스트 / 알파 테스트 / 단위 테스트 / 통합 테스트 / 회귀 테스트",
        answer: '① 단위 테스트 ② 통합 테스트',
    },
    {
        id: 91,
        rotation: '2021년 1회',
        question: '다음은 빈칸에 들어갈 알맞은 용어를 쓰시오.',
        detail : "• IPv6 는 (  ①  )  비트 길이를 가진다. \n• IPv4는 길이 32bit이며, (  ②  ) 비트씩 네 부분으로 나눈다.",
        answer: '① 128 ② 8',
    },
    {
        id: 92,
        rotation: '2021년 1회',
        question: '공유메모리, 소켓, 세마포어, 메세지 큐 등 프로세스 간 통신하는 기술을 무엇이라고 하는지 쓰시오.',
        answer: 'IPC(Inter Process Communication)',
    },
    {
        id: 93,
        rotation: '2021년 1회',
        question: '시스템 통합에 사용되는 솔루션으로 구축 유형에는 Point to Point, Hub & Spoke, Message Bus가 있다. 기업에서 운영되는 서로 다른 플랫폼 및 애플리케이션 간의 정보를 전달, 연계, 통합이 가능하도록 해주는 솔루션을 무엇이라고 하는지 쓰시오.',
        answer: 'EAI(Enterprise Application integration)',
    },
    {
        id: 94,
        rotation: '2021년 1회',
        question: '주어진 테이블의 Cardinality와 Degree를 구하시오.',
        detail : "• Cardinality : ①\n• Degree : ②",
        answer: '① 5 ② 4',
        imageSize: { width: '450px', height: '200px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2021-1-14.png',
    },
    {
        id: 95,
        rotation: '2021년 1회',
        question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '\n Lee\n 38',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2021-1-15.png',
    },
    {
        id: 96,
        rotation: '2021년 1회',
        question: '데이터 모델 구성요소 3가지를 쓰시오.',
        detail : "• 데이터베이스에 저장된 실제 데이터를 처리하는 작업에 대한 명세로서 데이터베이스를 조작하는 기본 도구이다.\n\n" +
                "• 개체 데이터 모델에서는 (  ①  ) 을/를 이용하여 실제 데이터를 처리하는 작업에 대한 명세를 나타내는데 논리 데이터 모델에서는 (  ②  ) 을/를 어떻게 나타낼 것인지 표현한다.\n\n" +
                "• (  ③  ) 은/는 데이터 무결성 유지를 위한 DB의 보편적 방법으로 릴레이션의 특정 칼럼에 설정하는 제약을 의미하며, 개체무결성과 참조 무결성 등이 있다.",
        answer: '① 연산 ② 구조 ③ 제약조건',
    },
    {
        id: 97,
        rotation: '2021년 1회',
        question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '0+1+2+3+4+5=15',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2021-1-17.png',
    },
    {
        id: 98,
        rotation: '2021년 1회',
        question: '시스템 객체의 접근을 개인 또는 그룹의 식별자에 기반을 둔 방법, 어떤 종류의 접근 권한을 가진 사용자가 다른 사용자에 자신의 판단에 따라 권한을 허용하는 접근제어 방식을 쓰시오.',
        answer: '임의적 접근 통제 or DAC(Discretionary Access Control)',
    },
    {
        id: 99,
        rotation: '2021년 1회',
        question: '다음은 결합도에 대한 설명이다. 빈칸에 들어갈 알맞은 용어를 보기에서 찾아 기호로 쓰시오.',
        detail : "• (  ①  ) 은/는 다른 모듈 내부에 있는 변수나 기능을 다른 모듈에서 사용하는 경우의 결합도\n\n" +
                "• (  ②  ) 은/는 모듈 간의 인터페이스로 배열이나 객체, 구조 등이 전달되는 경우의 결합도\n\n" +
                "• (  ③  ) 은/는 파라미터가 아닌 모듈 밖에 선언된 전역 변수를 참조하고 전역 변수를 갱신하는 식으로 상호작용하는 경우의 결합도\n\n" +
                "[보기]\n자료 결합도, 스탬프 결합도, 제어 결합도, 공통 결합도, 내용 결합도, 외부 결합도",
        answer: '① 내용 결합도 ② 스탬프 결합도 ③ 공통 결합도',
    },
    {
        id: 100,
        rotation: '2021년 1회',
        question: '괄호 안에 공통으로 들어갈 공격 기법을 적으시오.',
        detail: "• (   ) 은/는 '세션을 가로채다' 라는 의미로 정상적 연결을 RST 패킷을 통해 종료시킨 후 재연결 시 희생자가 아닌 공격자에게 연결한다.\n\n" +
                "• (   ) 은/는 세션 관리 취약점을 이용한 공격 기법이다.",
        answer: '세션 하이재킹',
    },

    // 2021년 2회
    {
        id: 101,
        rotation: '2021년 2회',
        question: '네트워크 장치를 필요로하지 않고 네트워크 토폴로지가 동적으로 변화되는 특징이 있으며 응용 분야로는 긴급 구조, 긴급 회의, 전쟁터에서의 군사 네트워크에 활용되는 네트워크는?',
        answer: '애드 혹 네트워크(Ad-hoc Network)',
    },
    {
        id: 102,
        rotation: '2021년 2회',
        question: '다음 ①, ②에서 설명하는 개념을 쓰시오.',
        detail: "① 사람의 감정이나 경험을 나타내는 개념 \n② 사용자 인터페이스, ex) CLI, GUI",
        answer: '① UX(User Experience) ② UI(User Interface)',
    },
    {
        id: 103,
        rotation: '2021년 2회',
        question: '트랜잭션의 특징 중, 원자성(Atomicity)에 대해 약술하시오.',
        answer: '모두 반영되거나 아니면 전혀 반영되지 않아야 한다.',
    },
    {
        id: 104,
        rotation: '2021년 2회',
        question: ' 다음은 제 (  ) 정규형으로써, 부분 함수적 종속성을 제거하여, 완전 함수적 종속을 만족하는 정규형은?',
        answer: '제 2 정규형',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2021-2-04.png'
    },
    {
        id: 105,
        rotation: '2021년 2회',
        question: '테이블의 튜플을 수정하고자 한다. 수정하려는 SQL을 작성하기 위해 괄호 안에 알맞는 문장을 작성하시오.',
        detail: "(  ①  ) 테이블명 (  ②  ) 컬럼 = 값 WHERE 점수 >= 90;",
        answer: '① UPDATE ② SET',
    },
    {
        id: 106,
        rotation: '2021년 2회',
        question: '다음 SQL문에서 JOIN할 경우 괄호 안에 알맞는 문장을 작성하시오.',
        detail: "SELECT 학생정보.학번, 학생정보.이름, 학과정보.학과, 학과정보.지도교수 FROM 학생정보 JOIN 학과정보 (  ①  ) 학생정보.학과=학과정보.(  ②  );",
        answer: '① ON ② 학과',
    },
    {
        id: 107,
        rotation: '2021년 2회',
        question: '다음은 파이썬 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '26',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2021-2-07.png'
    },
    {
        id: 108,
        rotation: '2021년 2회',
        question: '미국 국립 표준 기술연구소 (NIST), DES를 대체하며, 128 비트 블록 크기와 128,192,256비트 키 크기의 대칭 키 암호화 방식은?',
        answer: 'AES(Advanced Encryption Standard)',
    },
    {
        id: 109,
        rotation: '2021년 2회',
        question: '다음은 화이트 박스 테스트 검증 기준에 대한 설명이다. 다음에서 설명하는 알맞은 용어를 보기에서 찾아 쓰시오.',
        detail: "① 최소 한 번은 모든 문장을 수행한다.\n\n" +
                "②결정(Decision) 검증 기준이라고도 하며 조건 별로 True/False일 때 수행한다.\n\n" +
                "③②와 달리 전체 조건식에 상관없이 개별 조건식의 True/False에 대해 수행한다.\n\n" +
                "[보기]\n다중 조건 커버리지, 변형 조건 / 결정 커버리지, 조건 커버리지, 결정 커버리지, 구조 커버리지, 구문 커버리지",
        answer: '① 구문 커버리지 ② 결정 커버리지 ③ 조건 커버리지',
    },
    {
        id: 110,
        rotation: '2021년 2회',
        question: '다음 [학생] 테이블을 이용해 이름이 이로 시작하는 학생들에 대해 내림차순으로 정렬하려고 한다. 쿼리의 빈칸에 알맞은 키워드를 쓰시오.',
        detail: "SELECT * FROM 학생 WHERE 이름 LIKE (  ①  ) ORDER BY (    ②    ) ;",
        answer: '① \'이%\' ② 이름 DESC',
    },
    {
        id: 111,
        rotation: '2021년 2회',
        question: '다음 각 번호에 해당하는 응집도를 보기에서 찾아 쓰시오.',
        detail: "① 입출력 간 연관성은 없으나, 순서에 따라 수행할 필요가 있다.\n\n" +
                "② 동일한 입출력을 사용한다.\n\n" +
                "③ 하나의 기능에 모두 기여하고 밀접하게 관련되어 있다.\n\n" +
                "[보기]\n우연적(coincidental), 논리적(logical), 시간적(temporal), 절차적(procedural), 교환적(communication), 순차적(sequential), 기능적(functional)",
        answer: '① 절차적 응집도 ② 교환적 응집도 ③ 기능적 응집도',
    },
    {
        id: 112,
        rotation: '2021년 2회',
        question: '다음에서 설명하는 패킷 교환 방식을 작성하시오.',
        detail: "① 목적지 호스트와 미리 연결한 후, 통신하는 연결형 교환 방식\n\n" +
                "② 헤더에 붙어서 개별적으로 전달하는 비연결형 교환 방식",
        answer: '① 가상 회선 방식 ② 데이터그램 방식',
    },
    {
        id: 113,
        rotation: '2021년 2회',
        question: '다음 괄호 안에 들어갈 디자인 패턴명을 쓰시오.',
        detail: "디자인 패턴 중 (  ) 패턴은 반복적으로 사용되는 객체들의 상호작용을 패턴화한 것으로 클래스나 객체들이 상호작용하는 방법이다. 알고리즘 등과 관련된 패턴으로 그 예는 Interpreter, Observer, Command 가 있다.",
        answer: '행위(behavioral)',
    },
    {
        id: 114,
        rotation: '2021년 2회',
        question: '같은 자원을 액세스하는 다중 트랜잭션 환경에서 DB의 일관성과 무결성을 유지하기 위해 트랜잭션의 순차적 진행을 보장하는 직렬화 기법은 무엇인지 쓰시오.',
        answer: '로킹',
    },
    {
        id: 115,
        rotation: '2021년 2회',
        question: '럼바우 데이터 모델링에 관한 설명으로써, 각 번호에서 설명하는 모델링 기법을 보기에서 찾아서 작성하시오.',
        detail: "① 입력값이 출력값일 때 - 예) 자료 흐름도(DFD)\n\n" +
                "② 시간에 따라 변하는 것 - 예) 상태 변화도(DFD)\n\n" +
                "③ 구조 - 예) ER다이어그램(ERD) \n\n" +
                "[보기]\nOperation, Sequence, Information, Transaction, Function, I/O, Dynamic, Architecture, Cause-Effect, Constraint, Rebuilding, Duration",
        answer: '① Function Modeling ② Dynamic Modeling ③ Object Modeling',
    },
    {
        id: 116,
        rotation: '2021년 2회',
        question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '1024',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2021-2-16.png'
    },
    {
        id: 117,
        rotation: '2021년 2회',
        question: '클래스 내에서 객체 생성 없이 사용할 수 있는 메소드이다. 다음의 출력 결과를 보고 괄호안에 알맞은 답안을 작성하시오.',
        detail: "[출력결과]\npositive",
        answer: 'static',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2021-2-17.png'
    },
    {
        id: 118,
        rotation: '2021년 2회',
        question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '8',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2021-2-18.png',
    },
    {
        id: 119,
        rotation: '2021년 2회',
        question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '11',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2021-2-19.png',
    },
    {
        id: 120,
        rotation: '2021년 2회',
        question: '다음 괄호 안에 들어갈 알맞은 답안을 작성하시오.',
        detail: "테스트 하네스의 도구 구성 요소 중, 상향식 테스트시, 상위 모듈 역할을 대신하는 테스트 드라이버와 하향식 테스트 시, 하위 모듈 역할을 대신하는 테스트 (      ) 이 있다.",
        answer: '스텁',
    },

    // 2021년 3회
    {
        id: 121,
        rotation: '2021년 3회',
        question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '3',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2021-3-01.png',
    },
    {
        id: 122,
        rotation: '2021년 3회',
        question: '다음은 정보 보호 기술인 AAA에 대한 설명이다. 각 설명에 맞는 용어를 적으시오.',
        detail: "① 시스템을 접근하기 전에 접근 시도하는 사용자의 신원을 검증\n\n" +
                "② 검증된 사용자에게 어떤 수준의 권한과 서비스를 허용\n\n" +
                "③ 사용자의 자원(시간,정보,위치 등)에 대한 사용 정보를 수집",
        answer: '① Authentication ② Authorization ③ Accounting',
    },
    {
        id: 123,
        rotation: '2021년 3회',
        question: '데이터 제어어(DCL) 중 GRANT 에 대하여 설명하시오.',
        answer: '데이터베이스 관리자가 데이터베이스 사용자에게 사용 권한을 부여하는데 사용하는 명령어',
    },
    {
        id: 124,
        rotation: '2021년 3회',
        question: '다음은 스푸핑 공격에 대한 설명이다. 괄호 안에 들어갈 알맞은 답안을 작성하시오.',
        detail: "(  ) 스푸핑은 근거리 통신망 하에서 (  ) 메시지를 이용하여 상대방의 데이터 패킷을 중간에서 가로채는 중간자 공격 기법이다." +
                " 이 공격은 데이터 링크 상의 프로토콜인 (  )를 이용하기 때문에 근거리상의 통신에서만 사용할 수 있는 공격이다.",
        answer: 'ARP',
    },
    {
        id: 125,
        rotation: '2021년 3회',
        question: '다음은 Coupling에 대한 설명이다. 설명에 대한 Coupling 종류를 영문으로 작성하시오.',
        detail: "어떤 모듈이 다른 모듈의 내부 논리 조직을 제어하기 위한 목적으로 제어 신호를 이용하여 통신하는 경우의 결합도이다, 하위 모듈에서 상위 모듈로 제어 신호가 이동하여 상위 모듈에게 처리 명령을 부여하는 권리 전도 현상이 발생",
        answer: 'control',
    },
    {
        id: 126,
        rotation: '2021년 3회',
        question: 'OSI 7 Layer에 대한 설명이다. 다음 각 설명에 해당되는 계층을 적으시오.',
        detail: "① 물리계층을 통해 송수신되는 정보의 오류와 흐름을 관리하여 안전한 정보의 전달을 수행할 수 있도록 도와주는 역할\n\n" +
                "② 데이터를 목적지까지 가장 안전하고 빠르게 전달하는 기능\n\n" +
                "③ 수신자에서 데이터의 압축을 풀수 있는 방식으로 된 데이터 압축",
        answer: '① 데이터링크 ② 네트워크 ③ 표현',
    },
    {
        id: 127,
        rotation: '2021년 3회',
        question: '다음 객체지향 추상화에 대한 설명 중 괄호 안에 들어갈 알맞은 용어를 적으시오.',
        detail: "(  ①  )은/는 클래스들 사이의 전체 또는 부분 같은 관계를 나타내는 것이고, (  ②  )은/는 한 클래스가 다른 클래스를 포함하는 상위 개념일 때 IS-A관계라하며, 일반화 관계로 모델링한다.",
        answer: '① Aggregation ② Generalization',
    },
    {
        id: 128,
        rotation: '2021년 3회',
        question: '다음은 테스트케이스의 구성요소에 대한 설명이다. 괄호 (  ) 안에 들어갈 알맞는 보기를 고르시오.',
        detail: "왼쪽 빈칸부터 ①, ②, ③ 순서대로",
        answer: '① 테스트 조건 ② 테스트 데이터 ③ 예상 결과',
        imageSize: { width: '450px', height: '150px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2021-3-08.png',
    },
    {
        id: 129,
        rotation: '2021년 3회',
        question: '아래에서 설명하는 테스트 기법은 무엇인가?',
        detail: "(  ) 통해 요구사항 명세를 입력 조건과 출력 조건 간의 논리적 관계로 표현하고, 이를 기반으로 테스트케이스를 도출한다. 입력 자료 간의 관계와 출력에 영향을 미치는 상황을 체계적으로 분석 후 효용성이 높은 테스트 케이스를 선정해서 테스트하는 기법이다.",
        answer: 'Cause Effect Graph(원인 결과 그래프)',
    },
    {
        id: 130,
        rotation: '2021년 3회',
        question: '다음에서 설명하는 블록 암호 알고리즘을 적으시오.',
        detail: "이것은 미국 NBS(National Bureau of Standards, 현재 NIST)에서 국가 표준으로 정한 암호 알고리즘으로, 64비트 평문을 64비트 암호문으로 암화하는 대칭키 암호 알고리즘이다. 키는 7비트마다 오류검출을 위한 정보가 1비트씩 들어가기 때문에 실질적으로는 56비트이다. 현재는 취약하여 사용되지 않는다.",
        answer: 'DES',
    },
    {
        id: 131,
        rotation: '2021년 3회',
        question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '7',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2021-3-11.png',
    },
    {
        id: 132,
        rotation: '2021년 3회',
        question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '37',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2021-3-12.png',
    },
    {
        id: 133,
        rotation: '2021년 3회',
        question: ' 다음은, 테이블에서 조건값을 실행한 화면이다. 이에 대한 알맞는 결과값을 작성하시오.',
        answer: '4',
        imageSize: { width: '450px', height: '200px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2021-3-13.png',
    },
    {
        id: 134,
        rotation: '2021년 3회',
        question: '다음은 파이썬 소스 코드이다. 출력 결과를 쓰시오.',
        detail: "a, b = 100, 200 \nprint (a==b)",
        answer: 'False',
    },
    {
        id: 135,
        rotation: '2021년 3회',
        question: '다음은 UML의 다이어그램에 대한 설명이다. 어떤 다이어그램에 대한 설명인가?',
        detail: "이 다이어그램은 문제 해결을 위한 도메인 구조를 나타내어 보이지 않는 도메인 안의 개념과 같은 추상적인 개념을 기술하기 위해 나타낸 것이다. 또한 소프트웨어의 설계 혹은 완성된 소프트웨어의 구현 설명을 목적으로 사용할 수 있다. 이 다이어그램은 속성(attribute)과 메서드(method)를 포함한다.",
        answer: '클래스 다이어그램',
    },
    {
        id: 136,
        rotation: '2021년 3회',
        question: '다음 보기에서 설명하는 객체지향 디자인 패턴은 무엇인가?',
        detail: "부모(상위) 클래스에 알려지지 않은 구체 클래스를 생성하는 패턴이며, 자식(하위) 클래스가 어떤 객체를 생성할지를 결정하도록 하는 패턴이기도 하다.  부모(상위) 클래스 코드에 구체 클래스 이름을 감추기 위한 방법으로도 사용한다.",
        answer: 'Factory method',
    },
    {
        id: 137,
        rotation: '2021년 3회',
        question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '501',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2021-3-17.png',
    },
    {
        id: 138,
        rotation: '2021년 3회',
        question: '다음은 파일 구조(File Structures)에 대한 설명이다. 괄호 (  ) 안에 들어갈 알맞는 답을 작성하시오.',
        detail: "파일구조는 파일을 구성하는 레코드들이 보조기억장치에 편성되는 방식으로 접근 방식에 따라 방식이 달라진다." +
                " 접근 방법 중, 레코드들을 키-값 순으로 정렬하여 기록하고, 레코드의 키 항목만을 모은 (  )을 구성하여 편성하는 방식이 있으며," +
                " 레코드를 참조할 때는 (  ) 이 가르키는 주소를 사용하여 직접 참조할 수 있다. 파일 구조에는 순차 접근, (  ) 접근, 해싱 접근이 있다.",
        answer: '인덱스(또는 색인)',
    },
    {
        id: 139,
        rotation: '2021년 3회',
        question: '다음 설명에 대한 알맞는 답을 영문약어로 작성하시오.',
        detail: "(  ) 은/는 사용자가 그래픽을 통해 컴퓨터와 정보를 교환하는 환경을 말한다. 이전까지 사용자 인터페이스는 키보드를 통해 명령어로 작업을 수행시켰지만" +
                " (  ) 에서는 키보드 뿐만 아니라 마우스 등을 이용하여 화면의 메뉴 중 하나를 선택하여 작업을 수행한다." +
                " 화면에 아이콘을 띄어 마우스를 이용하여 화면에 있는 아이콘을 클릭하여 작업을 수행하는 방식이다. 대표적으로는 마이크로소프트의 Windows, 애플의 Mac 운영체제 등이 있다.",
        answer: 'GUI',
    },
    {
        id: 140,
        rotation: '2021년 3회',
        question: '다음은 소프트웨어 통합 테스트에 대한 설명이다. 괄호 (  ) 안에 들어갈 알맞는 답을 작성하시오.',
        detail: "(  ①  ) 방식은 이름에서도 알 수 있듯이, 하위 모듈부터 시작하여 상위 모듈로 테스트를 진행하는 방식이며," + 
                " 이 방식을 사용하기 위해서는 (  ②  )가 필요하다. (  ②  )는 이미 존재하는 하위 모듈과 존재하지 않은 상위 모듈에 대한 인터페이스 역할을 한다.",
        answer: '① 상향식 ② (테스트) 드라이버',
    },
    
    // 2022년 1회
    {
        id: 141,
        rotation: '2022년 1회',
        question: '다음 설명에 맞는 RAID 단계를 숫자로 쓰시오.',
        detail: "패리티(오류 검출 기능)가 없는 중복 없는 스트라이핑 된 세트로 구성되어 있다. \n\n" + 
                "개선된 성능에 추가적인 기억 장치를 제공하는 장점이 있지만, 장애 시 데이터의 안전을 보장할 수 없다.",
        answer: '0',
    },
    {
        id: 142,
        rotation: '2022년 1회',
        question: '다음에 해당하는 DB 트랜잭션 연산을 [보기]에서 찾아 적으시오.',
        detail: "① 장애 발생 전 DB로 복구하는 기법으로 디스크에 저장된 로그를 분석하여 트랜잭션의 시작(Start)과 완료(Commit)에 대한 기록이 있는 트랜잭션들의 작업을 재실행 하는 기법\n\n" +
                "② 장애 시 디스크에 저장된 로그를 분석하여 트랜잭션의 시작(Start)은 있지만, 완료(Commit) 기록이 없는 트랜잭션들이 작업한 변경 내용을 모두 취소하는 기법\n\n" +
                "[보기]\nRollback, Redo, Undo, Checkpoint, Recovery",
        answer: '① Redo ② Undo',
    },
    {
        id: 143,
        rotation: '2022년 1회',
        question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '2000',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2022-1-03.png',
    },
    {
        id: 144,
        rotation: '2022년 1회',
        question: '다음은 점수에 대해 내림차순 하는 SQL이다. 괄호 (  ) 안에 들어갈 SQL 구문을 쓰시오.',
        detail: "SELECT name, score FROM 성적 (  ①  ) BY (  ②  ) (  ③  )",
        answer: '① ORDER ② score ③ DESC',
    },
    {
        id: 145,
        rotation: '2022년 1회',
        question: '데이터베이스의 이상현상 중, 삭제 이상에 대해 간략히 설명하시오.',
        answer: '데이터를 삭제할 경우 원하지 않는 다른 데이터도 삭제되어버리는 이상',
    },
    {
        id: 146,
        rotation: '2022년 1회',
        question: '다음은 파이썬 소스 코드이다. 출력 결과를 쓰시오.',
        detail: "def soojebi(num1, num2=2): \n   print('a=', num1, 'b=', num2) \n\nsoojebi(20)",
        answer: 'a= 20 b= 2',
    },
    {
        id: 147,
        rotation: '2022년 1회',
        question: '다음은 리스트와 관련된 파이썬 함수이다. 각 항목에 해당하는 함수를 보기에서 골라서 쓰시오.',
        detail: "① 리스트 확장, 여러 값을 한 번에 추가할 수 있음\n\n" +
                "② 마지막 또는 지정 요소를 삭제하고 그 값을 반환함\n\n" +
                "③ 역순으로 뒤집음\n\n" +
                "[보기]\n remove(), reverse(), sort(), index(), insert(), select(), pop(), extend()",
        answer: '① extend() ② pop() ③ reverse()',
    },
    {
        id: 148,
        rotation: '2022년 1회',
        question: '임시 키 무결성 프로토콜의 약자를 쓰시오.',
        answer: 'TKIP',
    },
    {
        id: 149,
        rotation: '2022년 1회',
        question: '신체를 활용한 사용자 인터페이스(UI)를 무엇이라고 하는가?',
        answer: 'NUI',
    },
    {
        id: 150,
        rotation: '2022년 1회',
        question: '다음은 분석 도구에 대한 설명이다. 각 항목에 해당하는 도구를 쓰시오.',
        detail: "① 실행하지 않고 원시 코드 분석\n\n" +
                "② 프로그램 동작이나 반응을 추적하고 보고함. 프로그램 모니터, 스냅샷 생성",
        answer: '① 정적 분석 도구(Static Analysis) ② 동적 분석 도구(Dynamic Analysis)',
    },
    {
        id: 151,
        rotation: '2022년 1회',
        question: '다음 스레드에 관한 코드이다. 다음 빈칸에 알맞는 코드를 작성하시오.',
        answer: 'Car',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2022-1-11.png',
    },
    {
        id: 152,
        rotation: '2022년 1회',
        question: '다음에서 설명하는 인터페이스 도구를 쓰시오.',
        detail: "자바를 이용한 xUnit 테스트 도구이다.\n\n" +
                "Erich Gamma와 Kent Beck 등이 작성한 오픈소스로 JAVA 단위 테스트 프레임워크이다.",
        answer: 'JUnit',
    },
    {
        id: 153,
        rotation: '2022년 1회',
        question: '다음 보기 중에서 블랙박스 테스트 기법을 3가지 골라 작성하시오.',
        detail: "[보기]\nㄱ. Cause-Decision Graph\nㄴ. Decision Coverage\nㄷ. Boundary Value Analysis\nㄹ. Equivalence Partitioning\nㅁ. Statement Coverage\nㅂ. Cause-Effect Graph\nㅅ. Base Path Testing\nㅇ. Base Path Coverage\nㅈ. Boundary Divison Analysis",
        answer: 'ㄷ, ㄹ, ㅂ',
    },
    {
        id: 154,
        rotation: '2022년 1회',
        question: '다음 소스코드에서 입력값이 5가 들어왔을때 출력되는 값을 작성하시오.',
        answer: '120',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2022-1-14.png',
    },
    {
        id: 155,
        rotation: '2022년 1회',
        question: '빈칸에 연산자를 써서 정수를 역순으로 출력하는 프로그램을 완성하시오. 예를 들어 1234의 역순은 4321이다. 단, 1230처럼 0으로 끝나는 정수는 고려하지 않는다.',
        detail: "[결과] 4321",
        answer: '① > ② % ③ /',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2022-1-15.png',
    },
    {
        id: 156,
        rotation: '2022년 1회',
        question: '정보보호 관리체계의 영문 약자는 무엇인가?',
        answer: 'ISMS',
    },
    {
        id: 157,
        rotation: '2022년 1회',
        question: '다음은 키에 대한 설명이다. 괄호 (  ) 안에 들어갈 용어를 쓰시오.',
        detail: "슈퍼키는 (  ①  ) 의 속성을 갖는다.\n후보키는 (  ①  ) 와/과 (  ②  ) 의 속성을 갖는다.",
        answer: '① 유일성 ② 최소성',
    },
    {
        id: 158,
        rotation: '2022년 1회',
        question: '공격 대상이 방문할 가능성이 있는 합법적 웹사이트를 미리 감염시켜 놓고, 피해자가 방문했을 때 피해자의 컴퓨터에 악성 프로그램을 배포하는 공격기법을 쓰시오.',
        answer: '워터링 홀(watering hole)',
    },
    {
        id: 159,
        rotation: '2022년 1회',
        question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '29',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2022-1-19.png',
    },
    {
        id: 160,
        rotation: '2022년 1회',
        question: '다음은 소프트웨어 개발 프로세스 중  V 모델에 대한 그림이다. ①~④까지 들어갈 테스트를 쓰시오.',
        answer: '① 단위 테스트 ② 통합 테스트 ③ 시스템 테스트 ④ 인수 테스트',
        imageSize: { width: '450px', height: '300px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2022-1-20.png',
    },

    // 2022년 2회
    {
        id: 161,
        rotation: '2022년 2회',
        question: '다음은 관계 데이터 모델에 대한 설명이다. 괄호 (  ) 안에 공통적으로 들어갈 용어를 쓰시오.',
        detail: "(  )은/는 관계 데이터베이스에 대한 연산을 표현하는 방법으로 비절차적으로 선언하는 언어이며, 수학의 Predicate Calculus에 기반을 두고 있다.\n\n" +
                " Codd 박사에 의하여 제시되었으며, 튜플(  ), 도메인(  )이/가 있다.",
        answer: '관계해석',
    },
    {
        id: 162,
        rotation: '2022년 2회',
        question: '다음은 블록 암호화 알고리즘에 대한 설명이다. 괄호 (  ) 안에 들어갈 암호화 알고리즘을 쓰시오.',
        detail: "Xuejia Lai와 James Messey가 초기에 제시한 블록 암호화 알고리즘으로 PES, IPES를 거쳐 (  ①  )로 명명되었다. " +
                "(  ①  )은/는 128bit의 키를 사용하여 64bit의 평문을 8라운드에 거쳐 64bit의 암호문을 만든다. \n\n" +
                "(  ②  )은/는 미 국가안보국(NSA)에서 개발한 Clipper 칩에 내장되는 블록 알고리즘으로 소프트웨어로 구현되는 것을 막고자 Fortezza Card에 칩 형태로 구현되었으며 전화기와 같이 음성을 암호화 하는데 주로 사용된다. 64비트의 입출력, 80비트의 키, 총 32라운드를 가진다.",
        answer: '① IDEA ② Skipjack',
    },
    {
        id: 163,
        rotation: '2022년 2회',
        question: '다음 복수의 행을 출력하는 SQL 문을 사용하여 제품 테이블에서 H라는 제조사의 모든 제품의 단가보다 비싼 단가의 상품명, 단가, 제조사를 출력하는 SQL 구문이다. 빈칸 (  )에 들어갈 내용은?',
        detail: "SELECT 상품명, 단가, 제조사\nFROM 제품\nWHERE 단가 > (  ) (SELECT 단가 FROM 제품 WHERE 제조사='H')",
        answer: 'ALL',
    },
    {
        id: 164,
        rotation: '2022년 2회',
        question: '다음 TB 테이블에 대하여 다음 SQL을 실행하였을 때 [결과]의 괄호 (  ) 안에 출력되는 값은 무엇인가?',
        answer: '4',
        imageSize: { width: '600px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2022-2-04.png',
    },
    {
        id: 165,
        rotation: '2022년 2회',
        question: '괄호 (  ) 안에 공통으로 들어갈 용어를 쓰시오.',
        detail: "여러 공중 인터넷망을 하나의 사설망처럼 사용할 수 있는 기술로 공중망과 사설망의 중간단계이고 방식으로는 SSL 방식과 IPSec 방식이 있다.\n\n" +
                "SSL (   )은/는 4계층에서 소프트웨어적으로 동작하므로 별도의 장치가 필요 없으며 가격이 저렴하다.\n\n" +
                "IPSec (   )은/는 3계층에서 동작하므로 IP 헤더를 조작해야 하므로 별도의 하드웨어 장치가 필요하나 보안성이 뛰어나다.",
        answer: '가상사설망(VPN)',
    },
    {
        id: 166,
        rotation: '2022년 2회',
        question: '다음 객체지향 설계 원칙 중 다음에서 설명하는 원칙을 보기에서 찾아서 쓰시오.',
        detail: "객체 설계 시 특정 기능에 대한 인터페이스는 그 기능과 상관없는 부분이 변해도 영향을 받지 않아야 한다는 원칙이다.\n\n" +
                "예를들어, 복합기에 대한 객체가 있고 프린터, 복사기, 스캐닝 기능을 사용하는 사용자가 각각 있다고 하면 프린터 기능 인터페이스는 복사기나 스캐닝 기능이 변하여도 프린터 기능을 사용하는 데에는 문제가 없어야 한다.\n\n" + 
                " [보기]\n SRP, OCP, LSP, ISP, DIP",
        answer: 'ISP',
    },
    {
        id: 167,
        rotation: '2022년 2회',
        question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '-8',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-1-14.png',
    },
    {
        id: 168,
        rotation: '2022년 2회',
        question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '2',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2022-2-08.png',
    },
    {
        id: 169,
        rotation: '2022년 2회',
        question: '호스트 주소가 223.13.234.132이고, 서브넷 마스크는 255.255.255.192일 때, (  )안에 들어가는 값을 쓰시오.',
        detail: "이 호스트의 네트워크 주소는 223. 13. 234. (  ①  ) 이다. \n\n" +
                "이 네트워크 주소에서 사용 가능한 호스트 주소의 개수는 네트워크 주소와 브로드캐스트 주소를 뺀 (  ②  )개 이다.",
        answer: '① 128 ② 62',
    },
    {
        id: 170,
        rotation: '2022년 2회',
        question: '다음은 테스팅에 대한 설명이다. 괄호 (  ) 안에 알맞는 단어를 쓰시오.',
        detail: "(  ①  ) 테스트는 사용자의 환경에서 개발자 없이 수행하는 테스트 방법으로 사용자가 오류정보를 수집하여 개발자에게 보내면 개발자가 취합하여 오류를 수정하는 방식이다.\n\n" +
                "(  ②  ) 테스트는 개발자 환경에서 통제된 상태로 개발자와 함께 수행하는 방법으로 사용자가 프로그램을 수행하는 것을 개발자가 모니터링하여 오류를 수정한다.",
        answer: '① 베타 ② 알파',
    },
    {
        id: 171,
        rotation: '2022년 2회',
        question: '다음은 테스팅에 대한 설명이다. 맞는 답을 보기에서 골라서 쓰시오.',
        detail: "(  ) 테스트는 소프트웨어의 변경사항이 발생하면 수행하는 테스트로, 주로 유지보수 단계에서 수행한다.\n\n" +
                "소프트웨어 수정 시 다른 오류가 흘러들어오므로 이를 확인하기 위하여 소프트웨어에 변경 사항이 발생할 때 마다 (  ) 테스트를 반복적으로 수행한다.\n\n" +
                "[보기]\nWhite Box, Boundary, Partition, Black Box, Regression, Exhaust, Iterating",
        answer: 'Regression',
    },
    {
        id: 172,
        rotation: '2022년 2회',
        question: '다음은 라우팅 프로토콜에 대한 설명이다. 빈칸에 들어갈 말을 보기에서 골라 쓰시오.',
        detail: "라우팅 프로토콜은 범위에 따라 (  ①  ),(  ②  ) 이/가 있다.\n\n" + 
                "라우팅 프로토콜의 범위는 AS에 따라 나뉘는데 AS(자치 시스템)는 하나의 도메인에 속하는 라우터들의 집합을 말한다." +
                "하나의 자치 시스템에 속한다는 것은 하나의 도메인에 속한다는 것과 같은 의미이다.\n\n" +
                "(  ①  ) 은/는 동일한 AS 내의 라우팅 프로토콜이며, 대표적으로 RIP와 (  ③  ) 이/가 있다.\n\n" +
                "(  ③  ) 은/는 항상 상태를 주고받는 RIP와 다르게 변화가 있을 때만 상태를 주고받는 Linked State의 프로토콜이며 자치 시스템을 지역으로 나누어 라우팅을 효과적으로 관리할 수 있다.\n\n" +
                "(  ②  ) 은/는 서로 다른 AS 간 라우팅 프로토콜이며, 대표적으로 (  ④  ) 이/가 있으며 초기에 라우터들이 연결될 때 전체 라우팅 테이블을 교환하고, 그 이후에는 변화된 정보만을 교환하는 방식이다.\n\n" +
                "[보기]\n EGP, IGRP, BGP, IGP, OSPF, BCP",
        answer: '① IGP ② EPG ③ OSPF ④ BGP',
    },
    {
        id: 173,
        rotation: '2022년 2회',
        question: '다음 [EMPLOYEE] 테이블에서 πTTL(EMPLOYEE) 연산을 수행해 나타나는 결과를 채워 넣으시오.',
        answer: '\n ① TTL\n ② 부장\n ③ 대리\n ④ 과장\n ⑤ 차장',
        imageSize: { width: '600px', height: '300px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2022-2-13.png',
    },
    {
        id: 174,
        rotation: '2022년 2회',
        question: '다음은 파이썬 소스 코드이다. 출력 결과를 쓰시오.',
        detail: "a = \"REMEMBER NOVEMBER\"\nb = a[:3] + a[12:16];\nc = \"R AND %s\" % \"STR\";\nprint(b+c);",
        answer: 'REMEMBER AND STR',
    },
    {
        id: 175,
        rotation: '2022년 2회',
        question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '10',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2022-2-15.png',
    },
    {
        id: 176,
        rotation: '2022년 2회',
        question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '22',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2022-2-16.png',
    },
    {
        id: 177,
        rotation: '2022년 2회',
        question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '61',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2022-2-17.png',
    },
    {
        id: 178,
        rotation: '2022년 2회',
        question: '다음 설명 중 괄호 (  ) 안에 들어갈 단어를 보기에서 찾아 쓰시오.',
        answer: '① ㉣Full   ② ㉥Partial   ③ ㉢Transitive',
        imageSize: { width: '600px', height: '300px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2022-2-18.png',
    },
    {
        id: 179,
        rotation: '2022년 2회',
        question: '다음 설명에 대한 알맞는 답을 보기에서 고르시오.',
        detail: "(  ①  ) 은/는 인터넷에서 요청과 응답에 의해 처리하는 프로토콜로 GET, POST, PUT 등의 방식을 사용한다.\n\n" +
                "(  ②  ) 은/는 문장이나 단어 등이 링크를 통해 서로 연결된 네트워크처럼 구성된 문서로 이미지 등을 누르면 다른 사이트로 옮겨갈 수 있도록 하이퍼링크(hyperlink)가 걸려 있다.\n\n" + 
                "(  ③  ) 은/는 운영체제에 상관없이 브라우저에서 실행ㄷ되는 웹 문서를 표현하는 표준화된 마크업 언어로 웹 콘텐츠의 의미와 구조를 정의할때 사용한다.\n\n" + 
                "[보기]\nICMP, HTTP, Hypertext, XML, HTML",
        answer: '① HTTP ② Hypertext ③ HTML',
    },
    {
        id: 180,
        rotation: '2022년 2회',
        question: '다음 프로세스 구조에서 모듈 F의 Fan-In과 Fan-Out을 구하시오.',
        detail: "① Fan-In : \n② Fan-Out : ",
        answer: '① 3 ② 2',
        imageSize: { width: '300px', height: '300px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2022-2-20.png',
    },
    
    // 2022년 3회
    {
        id: 181,
        rotation: '2022년 3회',
        question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '\n1,1,3,2\n3,4,5,3\n3,5,6,4\n3,5,5,3',
        imageSize: { width: '400px', height: '500px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2022-3-01.png',
    },
    {
        id: 182,
        rotation: '2022년 3회',
        question: '다음 빈칸에 알맞은 관계대수의 기호를 쓰시오.',
        answer: '\n① ∪\n② ―\n③ X\n④ π\n⑤ ⋈',
        imageSize: { width: '300px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2022-3-02.png',
    },
    {
        id: 183,
        rotation: '2022년 3회',
        question: '다음은 디자인 패턴에 대한 설명이다. 괄호 (  ) 안에 알맞는 답을 작성하시오.',
        detail: "(  ①  ) 패턴은 기능의 클래스 계층과 구현의 클래스 계층을 연결하고, 구현부에서 추상 계층을 분리하여 추상화된 부분과 실제 구현 부분을 독립적으로 확장할 수 있는 디자인 패턴이다.\n\n" +
                "(  ②  ) 패턴은 한 객체의 상태가 바뀌면 그 객체에 의존하는 다른 객체들에게 연락이 가고 자동으로 내용이 갱신되는 방법으로 일대 다의 의존성을 가지며 상호 작용하는 객체 사이에서는 가능하면 느슨하게 결합하는 디자인 패턴이다.",
        answer: '① 브릿지 (Bridge) ② 옵저버 (Observer)',
    },
    {
        id: 184,
        rotation: '2022년 3회',
        question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '24513',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2022-3-04.png',
    },
    {
        id: 185,
        rotation: '2022년 3회',
        question: '192.168.1.0/24인 IP 주소를 FLSM 3개의 subnet으로 분할할 때 두 번째 서브넷의 브로드캐스드 IP 주소(10진수)를 쓰시오.',
        answer: '192.168.1.127',
    },
    {
        id: 186,
        rotation: '2022년 3회',
        question: '다음의 테스트 기법은 무엇인지 [보기]에서 고르시오.',
        detail: "등가 분할 후 경곗값 부분에서 오류 발생 확률이 높기 때문에 경곗값을 포함하여 테스트 케이스를 설계하여 테스트하는 기법이다.\n\n" +
                "예를 들어 0, 60, 80, 100으로 등가 분할 후 테스트 데이터는 -1, 0, 59, 60, 61, 79, 80, 81, 99, 100이다.\n\n" +
                "[보기]\n㉠ Equivalence Partitionting ㉡ Decision Table ㉢ State Transition ㉣ Use Case ㉤ Classification Tree Method ㉥ Cause-Effect Graph ㉦ Boundary Value Analysis",
        answer: '㉦ Boundary Value Analysis',
    },
    {
        id: 187,
        rotation: '2022년 3회',
        question: '직원 테이블과 부서 테이블이 다음과 같을 때 쿼리를 수행한 결과를 쓰시오.',
        answer: '① 3 ② 4',
        imageSize: { width: '600px', height: '300px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2022-3-07.png',
    },
    {
        id: 188,
        rotation: '2022년 3회',
        question: '괄호 (  ) 안에 들어갈 용어를 쓰시오.',
        detail: "(  ①  ) 은/는 사람들의 심리와 행동 양식을 교묘하게 이용해서 원하는 정보를 얻는 공격기법이다.\n\n" +
                "(  ②  ) 은/는 정보를 수집한 후, 저장만 하고 분석에 활용하고 있지 않은 다량의 데이터이다.",
        answer: '① 사회 공학 ② 다크 데이터',
    },
    {
        id: 189,
        rotation: '2022년 3회',
        question: '다음은 파이썬 소스 코드이다. 출력 결과를 쓰시오.',
        detail: "I = [1,2,3,4,5]\nI = list(map(lambda num : num + 100, I)))\nprint(I)",
        answer: '[101,102,103,104,105]',
    },
    {
        id: 190,
        rotation: '2022년 3회',
        question: '다음은 테스팅에 대한 설명이다. 괄호 (  ) 안에 들어갈 올바른 답을 한 단어로 쓰시오.',
        detail: "다양한 보안 장비와 서버, 네트워크 장비 등으로부터 보안 로그와 이벤트 정보를 수집한 후 정보 간의 연관성을 분석하여 위협 상황을 인지하고, 침해사고에 신속하게 대응하는 보안 관제 솔루션이다. 특히, 기업에서 생성되는 테라바이트급의 정형, 비정형 데이터와 방화벽, 안티바이러스 시스템, 서버, 네트워크 장비 등으로부터 수집한 다양한 데이터 등을 빅데이터 기반의 로그 분석을 통해 보안의 위협 징후를 빠르게 판단, 대응할 수 있도록 해준다.",
        answer: 'SIEM',
    },
    {
        id: 191,
        rotation: '2022년 3회',
        question: '다음 보기 중 형상 관리 도구에 해당하는 것을 모두 고르시오.',
        detail: "ATM, CVS, OLAP, DDOS, SVN, OLTP, Spring, Git, Maven, Jenkins",
        answer: 'CVS, SVN, Git',
    },
    {
        id: 192,
        rotation: '2022년 3회',
        question: 'STUDENT 테이블에서 컴퓨터과 학생 50명, 전기과 학생 100명, 인터넷과 학생 50명의 정보가 저장되어 있을 때, 다음 SQL문의 실행 결과에 따른 튜플의 수는? (단, DEPT 칼럼은 학과명이다.)',
        detail: "① SELECT DERP FROM STUDENT;\n② SELECT DISTINCT DEPT FROM STUDENT;\n③SELECT COUNT(DISTINCT DEPT) FROM STUDENT WHERE DEPT = '인터넷과';",
        answer: '\n ① 200\n ② 3\n ③ 1',
    },
    {
        id: 193,
        rotation: '2022년 3회',
        question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '2',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2022-3-13.png',
    },
    {
        id: 194,
        rotation: '2022년 3회',
        question: '다음 주요 IT 기술에 대한 용어 설명이다. 괄호 (  ) 안에 들어갈 용어를 쓰시오.',
        detail: "(  ①  )은/는 프로세서(processor) 안에 독립적인 보안 구역을 따로 두어 중요한 정보를 보호하는 ARM사에서 개발한 하드웨어 기반의 보안 기술로 프로세서(processor) 안에 독립적인 보안 구역을 별도로 하여, 중요한 정보를 보호하는 하드웨어 기반의 보안 기술이다.\n\n" +
                "(  ②  )은/는  사용자들이 사이트에 접속할 때 주소를 잘못 입력하거나 철자를 빠뜨리는 실수를 이용하기 위해 유사한 유명 도메인을 미리 등록하는 일로 URL 하이재킹(hijacking)이라고도 한다.",
        answer: '① 트러스트존(Trustzone) ② 타이포스쿼팅(typosquatting)',
    },
    {
        id: 195,
        rotation: '2022년 3회',
        question: '다음에서 설명하는 용어를 쓰시오.',
        detail: "여러 개의 사이트에서 한번의 로그인으로 여러가지 다른 사이트들을 자동적으로 접속하여 이용하는 방법을 말한다. 일반적으로 서로 다른 시스템 및 사이트에서 각각의 사용자 정보를 관리하게 되는데 이때 하나의 사용자 정보를 기반으로 여러 시스템을 하나의 통합 인증을 사용하게 하는 것을 말한다. 즉 하나의 시스템에서 인증을 할 경우 타 시스템에서는 인증 정보가 있는지 확인하고 있으면 로그인 처리를 하도록 하고, 없는 경우 다시 통합 인증을 할 수 있도록 만드는 것을 의미한다.",
        answer: 'SSO',
    },
    {
        id: 196,
        rotation: '2022년 3회',
        question: '다음은 프로세스 스케줄링에 대한 설명이다. 괄호 (  ) 안에 들어갈 스케줄링 기법을 쓰시오.',
        detail: "(  ①  ) 은/는 프로세스가 도착하는 시점에 따라 그 당시 가장 작은 서비스 시간을 갖는 프로세스가 종료 시 까지 자원을 점유하는 스케줄링 기법\n\n" +
                "(  ②  ) 은/는 프로세스는 같은 크기의 CPU 시간을 할당(시간 할당량), 프로세스가 할당된 시간 내에 처리 완료를 못하면 준비 큐 리스트의 맨 뒤로 보내지고 CPU는 대기 중인 다음 프로세스로 넘어가는 스케줄링 기법\n\n" +
                "(  ③  ) 은/는 가장 짧은 시간이 소요되는 프로세스를 먼저 수행, 남은 처리시간이 더 짧다고 판단되는 프로세스가 준비 큐에 생기면 언제라도 프로세스가 선점되는 스케줄링 기법으로 비선점 방식의 스케줄링 기법에 선점 방식을 도입한 기법",
        answer: '① SJF ② RR ③ SRT',
    },
    {
        id: 197,
        rotation: '2022년 3회',
        question: '다음은 UML에 대한 설명이다. 괄호 (  ) 안에 들어갈 용어를 쓰시오.',
        detail: "(  ①  ) 은/는 UML의 구성 요소 중 사물의 의미를 확장하고 명확히 나는 요소로 사물과 사물을 연결하여 표현하는 요소\n\n" + 
                "(  ②  ) 은/는 공통의 속성, 연산(메서드), 관계, 의미를 공유하는 객체들의 집합\n\n" +
                "(  ③  ) 은/는 기능을 모아놓은 클래스로 추상 메서드와 상수만을 포함하는 추상 클래스로 구현하는 모든 클래스에 대해 특정한 메서드가 반드시 존재하도록 강제하는 역할을 하는 클래스",
        answer: '① 관계 ② 클래스 ③ 인터페이스',
    },
    {
        id: 198,
        rotation: '2022년 3회',
        question: '다음은 E-R 다이어그램이다. 괄호 (  ) 안에 들어갈 구성 요소를 E-R 다이어그램의 보기에서 고르시오.',
        detail: "(  ①  ) : 개체 집합의 단일 속성을 나타낸다. \n(  ②  ) : 관계 집합의 속성을 나타낸다. \n(  ③  ) : 개체 집합과 속성을 이어준다. \n(  ④  ) : 개체 집합과 관계 집합을 이어준다. \n(  ⑤  ) : 관계 집합을 나타낸다.",
        answer: '\n ① ㉡ \n ② ㉦\n ③ ㉤\n ④ ㉥\n ⑤ ㉣',
        imageSize: { width: '500px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2022-3-18.png',
    },
    {
        id: 199,
        rotation: '2022년 3회',
        question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '0 1 2 3',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2022-3-19.png',
    },
    {
        id: 200,
        rotation: '2022년 3회',
        question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '993',
        imageSize: { width: '350px', height: '250px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2022-3-20.png',
    },

    // 2023년 1회
    {
        id: 201,
        rotation: '2023년 1회',
        question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '\n 10\n 11\n 10\n 20',
        imageSize: { width: '350px', height: '300px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2023-1-01.png',
    },
    {
        id: 202,
        rotation: '2023년 1회',
        question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '\n Art\n A\n A\n Art\n Art',
        imageSize: { width: '350px', height: '300px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2023-1-02.png',
    },
    {
        id: 203,
        rotation: '2023년 1회',
        question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
        answer: 'qwe',
        imageSize: { width: '350px', height: '300px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2023-1-03.png',
    },
    {
        id: 204,
        rotation: '2023년 1회',
        question: '다음 중 빈칸에 공통으로 들어갈 용어르 쓰시오.',
        detail: "(  ) 은/는 웹에서 Javascript, XML을 이용하여 비동기식으로 웹페이지의 일부 콘텐츠만 리로드(Reload) 해오는 방식이다.\n\n" +
                "(  ) 은/는 하이퍼텍스트 표기 언어(HTML)만으로는 어려운 다양한 작업을 웹페이지에서 구현해서 이용자가 웹페이지와 자유롭게 상호 작용할 수있도록 구현 하는 기법이다.\n\n" +
                "Google Maps와 Google (  )에서 이러한 방식을 사용한다.",
        answer: 'AJAX',
    },
    {
        id: 205,
        rotation: '2023년 1회',
        question: '패킷 교환 방식에서 패킷이 전송되기 전에 송/수신 스테이션 간의 논리적인 통신 경로를 미리 설정하는 방식은 (  ①  ) 방식이며, 연결 경로를 확립하지 않고 각각의 패킷을 순서에 무관하게 독립적으로 전송하는 방식은 (  ②  ) 방식이다. 빈칸에 들어갈 알맞은 용어를 쓰시오.',
        answer: '① 가상회선 ② 데이터그램',
    },
    {
        id: 206,
        rotation: '2023년 1회',
        question: 'VPN(Virtual Private Network)에서 사용되는 프로토콜 중 하나로, L2F(Layer 2 Forwarding Protocol)와 PPTP(Point-to-Point Tunneling Protocol)의 기능을 결합하여 인터넷상에서 두 지점 간에 가상의 터널을 만들어 통신을 안전하게 전송하는 기술은 무엇인가?',
        answer: 'L2TP',
    },
    {
        id: 207,
        rotation: '2023년 1회',
        question: '포트번호 22번을 사용하고 인증, 암호화, 압축, 무결성을 제공하며, Telnet보다 강력한 보안을 제공하는 원격접속 프로토콜은 무엇인가?',
        answer: 'SSH',
    },
    {
        id: 208,
        rotation: '2023년 1회',
        question: '괄호에 들어갈 용어를 보기에서 찾아 기호로 쓰시오.',
        detail: "(  ①  ) 은/는 인터넷 또는 네트워크를 통해 컴퓨터에서 컴퓨터로 스스로 전파되는 악성 프로그램이다. 윈도우의 취약점 또는 응용 프로그램의 취약점을 이용하거나 이메일 또는 공유 폴더를 통해 전파되며, 최근에는 공유 프로그램(P2P)을 이용하여 전파되기도 한다. 가장 큰 특징은 자신을 복제하여 네트워크 연결을 통해서 다른 컴퓨터로 스스로 전파되고 확산된다는 것이다.\n\n" +
                "(  ②  ) 은/는 악성 루틴이 숨어 있는 프로그램으로 겉보기에는 정상적인 프로그램으로 보이지만 실행하면 악성코드를 실행하는 프로그램이다. 자기 복제를 하지 않으며 다른 파일을 감염시키거나 변경시키지 않지만, 해당 프로그램이 포함된 프로그램이 실행되는 순간, 시스템은 공격자에게 시스템을 통제할 수 있는 권한을 부여하게 된다.\n\n" +
                "(  ③  ) 은/는 사용자 컴퓨터(네트워크로 공유된 컴퓨터 포함) 내에서 프로그램이나 실행 가능한 부분을 변형해서 감염(infect)시키는 프로그램이다. 그리고 자신 또는 자신의 변형을 복사하는 프로그램으로 가장 큰 특성은 다른 네트워크의 컴퓨터로 스스로 전파되지는 않는다.\n\n" +
                "[보기]\n㉠ 바이러스(Virus) ㉡ 웜(Worm) ㉢ 트로이목마(Trojan Horse)",
        answer: '① ㉡ 웜(Worm) ② ㉢ 트로이목마(Trojan Horse) ③ ㉠ 바이러스(Virus)',
    },
    {
        id: 209,
        rotation: '2023년 1회',
        question: '다음은 이진수를 십진수로 변환하는 C언어 코드이다. ⓐ, ⓑ에 적합한 코드를 작성하시오.',
        answer: 'ⓐ % ⓑ 10',
        imageSize: { width: '350px', height: '300px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2023-1-09.png',
    },
    {
        id: 210,
        rotation: '2023년 1회',
        question: 'IP의 동작 과정에서의 전송 오류가 발생하는 경우에 오류 정보를 전송하는 목적으로 사용 하는 프로토콜로, Ping-of-Death에서도 사용하는 프로토콜은 무엇인가?',
        answer: 'ICMP',
    },
    {
        id: 211,
        rotation: '2023년 1회',
        question: '디자인 패턴 중 객체의 대리자를 이용하여 원래 객체의 작업을 대신 처리하는 패턴을 [보기]에서 찾아 쓰시오.',
        detail: "[보기]\n\n생성 패턴\nBuilder, Prototype, Singleton, Abstract Factory\n\n" +
                "구조 패턴\nBridge, Decorator, Facade, Flyweight, Proxy, Composite, Adapter\n\n" +
                "행위 패턴\nObserver, Mediator, Visitor, Strategy",
        answer: 'Proxy',
    },
    {
        id: 212,
        rotation: '2023년 1회',
        question: '다음은 데이터베이스에 관련된 내용이다. 각 괄호에 들어갈 답을 [보기]에서 골라 쓰시오.',
        detail: "(  ①  ) 은/는 테이블 내의 행을 의미하며, 레코드(Record)라고도 한다. 어떤 요소의 집합, 혹은 테이블에서의 행을 가리키지만 일반적인 집합과는 달리 중복이 허용될 수 있다.\n\n" +
                "(  ②  ) 은/는 릴레이션에 실제로 저장된 데이터의 집합을 의미한다. 그리고 릴레이션 또는 릴레이션 외연(Relation Extension)라고도 한다.\n\n" +
                "(  ③  ) 은/는 특정 데이터 집합의 유니크(Unique)한 값의 개수를 의미한다.\n\n" +
                "[보기]\n튜플(Tuple), 릴레이션 스키마(Relation Schema), 릴레이션 인스턴스(Relation Instance), 카디널리티(Cardinality), 디그리(Degree), 애트리뷰트(Attribute)",
        answer: '① 튜플(Tuple) ② 릴레이션 인스턴스(Relation Instance) ③ 카디널리티(Cardinality)',
    },
    {
        id: 213,
        rotation: '2023년 1회',
        question: '[학생] 테이블에서 학생 이름이 \'민수\'인 튜플을 삭제하는 쿼리를 작성하시오.',
        answer: 'DELETE FROM 학생 WHERE 이름 = \'민수\';',
        imageSize: { width: '450px', height: '150px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2023-1-13.png',
    },
    {
        id: 214,
        rotation: '2023년 1회',
        question: '다음 중, 괄호 ( ) 안에 들어갈 알맞는 답을 작성하시오.(단, 변수명으로 쓰시오.)',
        answer: '① idx2 ② nx',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2023-1-14.png',
    },
    {
        id: 215,
        rotation: '2023년 1회',
        question: '다음은 파이썬 소스 코드이다. 출력 결과를 쓰시오.',
        detail: "a = {'한국', '중국', '일본'}\na.add('베트남')\na.add('중국')\na.remove('일본')\na.update({'홍콩', '한국', '태국'})\nprint(a)",
        answer: '{\'한국\', \'중국\', \'베트남\', \'홍콩\', \'태국\'}',
    },
    {
        id: 216,
        rotation: '2023년 1회',
        question: '다음 중 [결과] 테이블에서 과목별로 그룹을 묶었을 때 과목 평균이 90 이상인 과목, 최소 점수, 최대점수를 조회하는 쿼리를 작성하시오.',
        answer: '\nSELECT 과목이름, MIN(점수) AS 최소점수, MAX(점수) AS 최대점수 FROM 성적\nGROUP BY 과목이름 HAVING AVG(점수) >= 90;',
        imageSize: { width: '600px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2023-1-16.png',
    },
    {
        id: 217,
        rotation: '2023년 1회',
        question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
        answer: 'Vehicle name:Spark',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-3-16.png',
    },
    {
        id: 218,
        rotation: '2023년 1회',
        question: '다음은 스키마와 관련된 내용이다. 각 괄호 안에 알맞은 답을 [보기]에서 찾아 작성하시오.',
        detail: "(  ①  ) 스키마는 사용자나 개발자의 관점에서 필요로 하는 데이터베이스의 논리적 구조이고, 사용자 뷰를 나타내며, 서브 스키마로 불린다.\n\n" +
                "(  ②  ) 스키마는 데이터베이스의 전체적인 논리적 구조이다. 그리고 전체적인 뷰를 나타내고, 개체 간의 관계, 제약조건, 접근 권한, 무결성, 보안에 대해 정의한다.\n\n" +
                "(  ③  ) 스키마는 물리적 저장 장치의 관점에서 보는 데이터베이스 구조이고, 실제로 데이터베이스에 저장될 레코드의 형식을 정의한다. 그리고 데이터 항목의 표현 방법, 내부레코드의 물리적 순서 등을 표현한다.\n\n" +
                "[보기]\n 외부, 개념, 내부",
        answer: '① 외부 ② 개념 ③ 내부',
    },
    {
        id: 219,
        rotation: '2023년 1회',
        question: '다음 아래의 제어 흐름 그래프가 분기 커버리지를 만족하기 위한 테스팅 순서를 쓰시오.',
        answer: '1234561, 124567  or 1234567, 124561',
        imageSize: { width: '600px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2023-1-19.png',
    },
    {
        id: 220,
        rotation: '2023년 1회',
        question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '500',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2023-1-20.png',
    },

    // 2023년 2회
    {
      id: 221,
      rotation: '2023년 2회',
      question: '다음은 C언어 소스 코드이다. \'54321\'을 \'43215\'로 변환하는 과정 중 다음 빈칸에 들어갈 답을 쓰시오.',
      answer: 'n[(i+1) % 5]',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-2-01.png',
    },
    {
      id: 222,
      rotation: '2023년 2회',
      question: '4620원을 차례로 입력해서 거스름돈을 구하려고 한다.\n a, b, c, d에 들어갈 코드를 순서대로 작성하시오.\n(단, 보기에서 최소한의 식을 이용하여 코드를 구현해야 함.)',
      detail: "<보기>\n1000, 500, 100, 10, %, /, +, -",
      answer: '\nm / 1000\n(m % 1000) / 500\n(m % 500) / 100\n(m % 100) / 10',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-2-02.png',
    },
    {
      id: 223,
      rotation: '2023년 2회',
      question: '다음은 C언어 코드이다 출력 결과를 쓰시오.',
      detail:"입력값으로는 홍길동, 김철수, 박영희 순서대로 주어짐",
      answer: '\n박영희\n박영희\n박영희',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-2-03.png',
    },
    {
      id: 224,
      rotation: '2023년 2회',
      question: '데이터베이스와 관련한 다음 <처리 조건>에 부합하는 SQL문을 작성하시오.',
      detail: '<처리 조건>\n1. 테이블명은 학생으로 정의한다.\n2. 학생 테이블에 학번 220103, 성명 \'한국산\', 학년 3, 과목 \'경영학개론\' 연락처 \'010-1234-1234\' 인 학생의 정보를 입력하시오.',
      answer: 'INSERT INTO 학생(학번, 이름, 학년, 전공, 번호) VALUES(220103, \'한국산\', 3, \'경영학개론\', \'010-1234-1234\');',
    },
    {
      id: 225,
      rotation: '2023년 2회',
      question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
      answer: 'BCD',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-2-05.png',
    },
    {
      id: 226,
      rotation: '2023년 2회',
      question: '전체 조건식의 참과 거짓 결과에 상관없이 결정 포인트 내에 있는 모든 개별 조건식이 참 한번, 거짓 한번을 모두 갖도록 조합하는 커버리지를 쓰시오.',
      answer: '조건 커버리지',
    },
    {
      id: 227,
      rotation: '2023년 2회',
      question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '505',
      imageSize: { width: '350px', height: '250px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-2-07.png',
    },
    {
      id: 228,
      rotation: '2023년 2회',
      question: '다음 보기에서 설명하는 암호 기법을 쓰시오.',
      detail: " 소프트웨어의 위변조 방지 역공학 기술의 일종으로서, 디지털 콘텐츠의 관련 산업이나 전자상거래 또는 보호해야 할 소프트웨어가 있는 다양한 산업 분야에 적용된다.\n\n " +
              "사용자에 의해 소프트웨어가 수정이 이루어졌는지를 검증하는데, 소프트웨어 내에서의 암호 키의 사용을 보호하기 위해 난독화(Obfuscation) 기법을 함께 사용하기도 한다.\n\n " +
              "난독화란 코드를 읽기 어렵게 만들어 역공학을 통한 공격을 막는 기술이다.",
      answer: '템퍼 프루핑(Tamper proofing)',
    },
    {
      id: 229,
      rotation: '2023년 2회',
      question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '213465',
      imageSize: { width: '700px', height: '450px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-2-09.png',
    },
    {
      id: 230,
      rotation: '2023년 2회',
      question: '데이터 베이스 설계 순서에 알맞은 답을 보기에서 쓰시오.',
      detail: '( ① ) -> ( ② ) -> ( ③ ) -> ( ④ ) -> ( ⑤ )\n\n [보기]\nⓐ논리적 설계 ⓑ 구현 ⓒ 물리적 설계 ⓓ 요구사항 분석 ⓔ 개념적 설계',
      answer: '\n ① : ⓓ 요구사항 분석 \n ② : ⓔ 개념적 설계 \n ③ : ⓐ논리적 설계 \n ④ : ⓒ 물리적 설계 \n ⑤ : ⓑ 구현',
    },
    {
      id: 231,
      rotation: '2023년 2회',
      question: '다음 설명하는 디자인 패턴 중 알맞은 답을 쓰시오.',
      detail: "① 객체를 하나만 생성하고 그 객체를 모든 곳에서 참조할 수 있도록 하는 패턴\n② 연산을 수행해야할 원소의 클래스를 수정하지 않고도 새로운 연산을 추가 가능하게 하는 패턴",
      answer: '① 싱글톤 ② 비지터',
    },
    {
      id: 232,
      rotation: '2023년 2회',
      question: '다음은 패리티 비트 관련 설명이다. 다음 보기 중 알맞은 답을 각각 고르시오.',
      detail: "[보기]\n㉠ FEC (Forward Error Correction)\n㉡ CRC (Cyclic Redundancy Check)\n㉢ BEC (Binary Erasure Check)\n㉣ NAK (Negative Acknowledgment)\n㉤ Parity\n㉥ BCD (Binary-Coded Decimal)\n㉦ MD (Message Digest)\n㉧ Hamming\n\n" +
      "① 은/는 데이터 전송 중 발생한 단일 비트 오류를 검출하고 복구하는 기술로, 추가적인 패리티 비트를 사용하여 오류 검출 및 정정이 가능하다\n" +
      "② 은/는 전송된 데이터에 발생하는 오류를 감지하고 바로 잡을 수 있는 기술로, 추가적인 리소스를 사용하여 오류를 자체적으로 복구하는 방법이다.\n" +
      "③ 은/는 전송된 데이터 중에서 일부 데이터가 손실되는 경우(지워지는 경우)에 이를 감지하는 기술로, 특정 비트의 유무를 체크하여 데이터가 손실되었는지 확인한다.\n" +
      "④ 은/는 각 데이터 블록에 대해 홀수 개수 또는 짝수 개수의 1 비트가 존재하도록 추가적인 비트를 사용하여 오류를 검출하는 방법이다.\n" +
      "⑤ 은/는 데이터 블록에 대한 체크섬을 생성하여 오류를 검출하는 기술로, 수신 측에서 전송된 데이터의 체크섬과 자체적으로 계산한 체크섬을 비교하여 오류를 감지한다.",
      answer: '\n① : ㉧ Hamming\n② : ㉠ FEC (Forward Error Correction)\n③ : ㉢ BEC (Binary Erasure Check)\n④ : ㉤ Parity\n⑤ : ㉡ CRC (Cyclic Redundancy Check)',
    },
    {
      id: 233,
      rotation: '2023년 2회',
      question: 'HDLC(High-Level Data Link Control)의 다양한 모드 중 알맞은 답을 보기에서 각각 고르시오.',
      detail:"[보기]\nⓐ 정보 ⓑ 익명 ⓒ 감독 ⓓ 릴레이 ⓔ 비번호 ⓕ 연결 \n제어 ⓖ 동기 균형 ⓗ 비동기 균형 모드 ⓘ 동기 응답\n모드 ⓙ 비동기 응답 모드 ⓚ 양방향 응답 모드\n\n" +
      "①은/는 데이터 전송에 대한 주된 기능을 제공하며 데이터를 전송하고 수신하기 위한 프레임들을 사용한다. 정보 프레임은 데이터를 실어 나르는 역할을 한다.\n\n" +
      "②은/는 데이터 전송의 흐름을 관리하고, 데이터의 에러와 유효성을 확인하는 역할을 하며 확인응답 프레임을 사용하여 데이터 프레임의 수신 및 확인 상태를 제어한다. 송신측은 확인응답 프레임을 통해 수신측으로부터 데이터 프레임의 수신 확인 여부를 파악할 수 있다.\n\n" +
      "③은/는 주로 제어 메시지를 전송하는데 사용되며 프레임에 번호가 없고 특별한 기능을 수행하는 제어 프레임을 사용한다.이 모드에서는 주로 링크 제어 프레임(Link Control Frame)이 사용한다.\n\n" +
      "④은/는 HDLC의 균형 모드 중 하나로, 두 장비 간의 통신이 균형적으로 이루어지는 모드입니다. ABM은 전이중(Full-duplex) 통신을 지원하며, 송신측과 수신측 모두가 데이터를 주고받을 수 있다.\n\n" +
      "⑤은/는 HDLC의 비균형 모드 중 하나로, 일방향 통신이 이루어지는 모드이다. ARM은 반 이중(Half-duplex) 통신을 지원하며, 송신측과 수신측이 동시에 데이터를 주고받을 수 없고, 한 번에 한 방향으로만 통신이 가능하다.",
      answer: '\n① : ⓐ 정보\n② : ⓒ 감독\n③ : ⓔ 비번호\n④ : ⓗ 비동기 균형 모드\n⑤ : ⓙ 비동기 응답 모드',
    },
    {
      id: 234,
      rotation: '2023년 2회',
      question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
      answer: '\ntrue\nfalse\ntrue\ntrue',
      imageSize: { width: '350px', height: '350px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-2-14.png',
    },
    {
      id: 235,
      rotation: '2023년 2회',
      question: '다음 보기에서 대칭키와 비대칭키를 구별해서 작성하시오. ',
      detail: '[보기]\n DES, RSA, AES, ARIA, SEED, ECC\n\n①대칭키 : __________________ \n② 비대칭키 : __________________',
      answer: '\n① DES AES ARIA SEED\n② RSA ECC',
    },
    {
      id: 236,
      rotation: '2023년 2회',
      question: '괄호 (  ) 안에 들어갈 올바른 답을 쓰시오.',
      detail: "(  ) 함수는 단방향(일방향) 암호화에 사용되는 함수이다. 임의의 크기를 갖는 데이터를 고정된 크기의 값으로 변환하는 함수로 입력 데이터로부터 해시 값을 계산하는 것은 쉽지만, 원래 데이터를 복원하는 것은 어려워야 한다.",
      answer: '해시',
    },
    {
      id: 237,
      rotation: '2023년 2회',
      question: 'DROP TABLE 학생 _____ ; 에서 연쇄적으로 제거하기 위해 빈칸에 들어가야할 단어를 쓰시오.',
      answer: 'CASCADE',
    },
    {
      id: 238,
      rotation: '2023년 2회',
      question: '다음 빈칸에 알맞은 연산자를 넣으시오.',
      answer: '>',
      imageSize: { width: '350px', height: '400px' },
      imagePath: 'https://so0733.github.io/pastquizapp/img/2023-2-18.png',
    },
    {
      id: 239,
      rotation: '2023년 2회',
      question: '다음은 파이썬 소스 코드이다. 출력 결과를 쓰시오.',
      detail: "a = \"Engineer Information Processing\"\n\nb = a[:3]\nc = a[4:6]\nd = a[28:]\n\ne=b+c+d\n\nprint(e)",
      answer: 'engneing',
    },
    {
      id: 240,
      rotation: '2023년 2회',
      question: '하향식 통합테스트에서는 상위 수준 모듈들이 하위 수준 모듈들과 통합되는 과정을 검증한다. 이때, 하위 수준 모듈들을 대체하기 위해 (  ①  ) 모듈을 사용하고' +
                '상향식 통합테스트에서는 하위 수준 모듈들이 상위 수준 모듈들과 통합되는 과정을 검증한다. 이때, 상위 수준 모듈들을 대체하기 위해 (  ②  ) 모듈을 사용한다.',
      answer: '①스텁 ②드라이버',
    },

    // 2023년 3회
    {
        id: 241,
        question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
        answer: 'BDCDD',
        imageSize: { width: '350px', height: '350px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2023-3-01.png',
      },
      {
        id: 242,
        question: '다음에서 설명하는 용어를 쓰시오.',
        detail: "- 사용자가 비밀번호를 제공하지 않고 다른 웹사이트나 애플리케이션의 접근 권한을 부여할 수 있게 하는 개방형 표준기술이다.\n\n- 구글, 페이스북 등의 외부 계정을 기반으로 토큰을 이용하여 간편하게 회원가입 및 로그인할 수 있는 기술이다.",
        answer: 'OAuth',
      },
      {
        id: 243,
        question: '리눅스(Linux)에서 사용자에게 읽기/쓰기/실행 권한을 부여하고, 그룹에게는 읽기/실행을 부여하고, 그 이외에는 실행 권한을 Test.txt 파일에 부여하는 위한 명령어는 다음과 같다. 빈칸에 들어갈 답을 작성하시오. (8진법을 사용)',
        detail:"(  ①  ) (  ②  ) Test.txt",
        answer: '① chmod ② 751',
      },
      {
        id: 244,
        question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '34',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2023-3-04.png',
      },
      {
        id: 245,
        question: 'C언어에서 구조체의 멤버에 접근하기 위한 기호를 쓰시오.',
        answer: '->',
      },
      {
        id: 246,
        question: '다음 빈칸에 들어갈 UNION 연산에 대한 결괏값을 작성하시오.',
        detail:"[쿼리]\nSELECT A FROM t1\nUNION\nSELECT A FROM t2\nORDER BY A DESC;\n\n[t1 테이블]\nA\n3\n1\n4\n\n[t2 테이블]\nA\n2\n4\n3",
        answer: '\nA\n4\n3\n2\n1',
      },
      {
        id: 247,
        question: '다음은 서버 접근통제의 유형이다. 괄호( ) 안에 들어갈 용어를 쓰시오. (단, 영어 약어로 작성하시오.)',
        detail: "- (   ①   )은/는 규칙 기반(Rule-Based) 접근통제 정책으로, 객체에 포함된 정보의 허용 등급과 접근 정보에 대하여 주체가 갖는 접근 허가 권한에 근거하여 객체에 대한 접근을 제한하는 방법이다.\n\n " +
                "- (   ②   )은/는 중앙 관리자가 사용자와 시스템의 상호관계를 통제하며 조직 내 맡은 역할(Role)에 기초하여 자원에 대한 접근을 제한하는 방법이다.\n\n " +
                "- (   ③   )은/는 신분 기반(Identity-Based) 접근통제 정책으로, 주체나 그룹의 신분에 근거하여 객체에 대한 접근을 제한하는 방법이다.",
        answer: '① MAC ② RBAC ③ DAC',    
      },
      {
        id: 248,
        question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '5040',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2023-3-08.png',
      },
      {
        id: 249,
        question: '프로그래밍에서 사용되는 특정한 데이터 구조의 Cell 크기가 53 바이트이며, 이 데이터 구조를 이용한 연산이 비동기적으로 수행된다. 이 데이터 구조는 주로 어떤 용도로 사용되며, 그에 따른 약어는?',
        answer: 'ATM',
      },
      {
        id: 250,
        question: '다음은 C언어 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '\nKOREA\nOREA\nK\nE\nO',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2023-3-10.png',
      },
      {
        id: 251,
        question: '다음은 자바 소스 코드이다. 출력 결과를 쓰시오.',
        answer: '2',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2023-3-11.png',
      },
      {
        id: 252,
        question: '사설 네트워크에 속한 IP를 공인 IP 주소로 바꿔 주는 네트워크 주소 변환 기술은 무엇인지 쓰시오.',
        answer: 'NAT',
      },
      {
        id: 253,
        question: '다음은 자바 소스 코드이다. 오류가 발생하는 코드 라인 번호를 쓰시오.',
        answer: '7',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2023-3-13.png',
      },
      {
        id: 254,
        question: '다음은 파이썬 소스 코드이다. 빈칸에 들어갈 함수를 쓰시오.',
        detail: "num1, num2 = input().(_______)",
        answer: 'split',
      },
      {
        id: 255,
        question: '다음은 어떤 UML 다이어그램에 관한 예시이다. 어떤 종류의 다이어그램인가?',
        answer: '패키지',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2020-4-03.png',
      },
      {
        id: 256,
        question: '입력 데이터의 영역을 유사한 도메인별로 유효값/무효값을 그룹핑하여 대푯값 테스트 케이스를 도출하여 테스트하는 기법은 무엇인지 영어로 쓰시오.',
        answer: 'Equivalence Partitioning',
      },
      {
        id: 257,
        question: '클라우드 유형을 다음 그림과 같이 나누었을 때 각각 알맞은 것을 보기에서 고르시오.',
        detail: "[보기] IaaS, PaaS, SaaS",
        answer: '① IaaS ② PaaS ③ SaaS',
        imageSize: { width: '350px', height: '400px' },
        imagePath: 'https://so0733.github.io/pastquizapp/img/2023-3-17.png',
      },
      {
        id: 258,
        question: 'IGP 중 거리벡터 알고리즘, 라우팅 프로토콜에 해당하는 프로토콜을 쓰시오.',
        answer: 'RIP',
      },
      {
        id: 259,
        question: '다음 보기에서 각각 알맞은 기호를 찾아 쓰시오.',
        detail: "① 조인(join) \n② 프로젝트(project) \n③ 시그마(select) \n④ 나누기(division)",
        answer: '\n① ⋈\n② π \n③ σ \n④ ÷',
      },
      {
        id: 260,
        question: '다음 릴레이션에 생기는 문제를 방지하기 위해서는 (       )무결성 제약 조건을 준수해야 한다. 괄호 (   ) 안에 들어갈 용어를 쓰시오.',
        detail: "- 릴레이션 위, 아래 하나씩 있는데 밑에 릴레이션에서 A라는 고객이 위에 릴레이션에 없음",
        answer: '참조',
      },
  ];
  
  export default questions;
  