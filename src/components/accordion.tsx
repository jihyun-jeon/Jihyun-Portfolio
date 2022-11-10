import { useState } from "react";
import "./accordion.css";

const Accordion = () => (
  <div className="AccordionWrapper">
    <AccordionItem
      title={
        <p className="font-m itemTitle">
          <span>Wanted Pre-onboarding 수료</span>
          <span className="period">2022. 09 ~2022. 09 (1개월)</span>
        </p>
      }
    >
      <div className="content">
        <div className="contentLine">
          <span className="contentTitle font-m">
            📍 5주간 7개의 기업 과제 수행
          </span>
          <p className="innerLine innerLineFlex">
            <p className="dash"> - </p>
            <p>동일한 기능 구현 후 best practice를 찾는 방법으로 진행</p>
          </p>
          <p className="innerLine innerLineFlex">
            <p className="dash"> - </p>

            <p>
              동일한 기능 구현임에도 모두 구현방법이 다른 것을 보고 &nbsp;
              <span className="hightligher">사고의 폭을 확장</span> 시킬 수
              있었습니다.
            </p>
          </p>
        </div>

        <div className="contentLine">
          <span className="contentTitle font-m">📍 git을 통한 소통</span>
          <p className="innerLine innerLineFlex">
            <p className="dash"> - </p>
            <p>
              git을 통해 서로의 코드에 comment를 달아 개선사항을 주고받았습니다.
            </p>
          </p>
          <p className="innerLine innerLineFlex">
            <p className="dash"> - </p>

            <p>
              <span className="hightligher">팀 컨벤션에 따른</span> 코드 구현과
              commit메세지를 작성하였습니다.
            </p>
          </p>
        </div>
      </div>
    </AccordionItem>

    <AccordionItem
      title={
        <p className="font-m itemTitle">
          <span> (주)무스마 - 프론트엔드 인턴</span>
          <span className="period">2022. 08 ~ 2022. 08 (1개월)</span>
        </p>
      }
    >
      <div className="content">
        <div className="contentLine">
          <span className="contentTitle font-m">
            📍 사내 프로젝트 참여, 기획부터 개발까지
          </span>
          <p className="innerLine">
            서비스를 이해하고
            <span className="hightligher">사용자가 원하는 가치</span>를 코드로
            구현해보았습니다.
          </p>
        </div>

        <div className="contentLine">
          <span className="contentTitle font-m">
            📍 짧은 주기의 프로토타이핑의 중요성
          </span>
          <p className="innerLine">
            빠른 업무 진행을 위해 혼자 고민하기보단 적극적으로 질문하고 가설을
            확인받아 <br />
            <span className="hightligher">Agile한 업무 진행</span>을 하는 것이
            중요하다고 느꼈습니다.
          </p>
        </div>
      </div>
    </AccordionItem>
    <AccordionItem
      title={
        <p className="font-m itemTitle">
          <span> Wecode 부트캠프 - Front-end 개발자 과정 수료</span>
          <span className="period">2022. 05 ~ 2022. 07 (3개월)</span>
        </p>
      }
    >
      <div className="content">
        <div className="contentLine">
          <span className="contentTitle font-m">
            📍 프론트엔드 개발에 대한 기본지식과 팀 프로젝트를 통한 백엔드와의
            소통
          </span>
          <p className="innerLine innerLineFlex">
            <p className="dash"> - </p>
            <p>
              백엔드와의 소통시 프론트에서만 이해하는 용어가 아닌 백엔드 분들도
              같이 이해할 수 있는 <br />
              <span className="hightligher">일반적이고 명확한 용어</span>를
              사용해야 한다는 것을 알았습니다.
            </p>
          </p>
          <p className="innerLine innerLineFlex">
            <p className="dash">-</p>
            <p>백엔드와의 소통을 통해 api 형식을 맞춰나갔습니다.</p>
          </p>
        </div>

        <div className="contentLine">
          <span className="contentTitle font-m">
            📍 모범 수강생으로써 얻은 &nbsp;
            <span className="hightligher">위코드 인터뷰 기회</span>
          </span>
          <p className="innerLine">
            모든 팀 활동에서 능동적으로 참여하는 모습 덕분에 다른 수강생에게
            좋은 영향을 끼치게 되었고
            <br />그 영향으로 위코드 내에
            <a
              href="https://www.instagram.com/p/CftUjPCPPr2/?utm_source=ig_web_copy_link"
              target="_blank"
            >
              인터뷰 기회
            </a>
            까지 받게 되었습니다.
          </p>
        </div>
      </div>
    </AccordionItem>
    <AccordionItem
      title={
        <p className="font-m itemTitle">
          <span> 나무택스세무회계</span>
          <span className="period">
            2019. 10 ~ 2021. 09 &nbsp; (&nbsp;2년&nbsp;)
          </span>
        </p>
      }
    >
      <div className="content">
        <div className="contentLine">
          <p className="innerLine ">
            📍 여러 사업장의 회계 담당자, 사장님들을 대하면서 세금 관련된 무겁고
            껄끄러울 수 있는 얘기 도 좀 더&nbsp;
            <span className="hightligher">부드럽게 말할 수 있는 법</span>을
            배웠습니다.
          </p>
        </div>

        <div className="contentLine">
          <p className="innerLine">
            📍 문서를 <span className="hightligher">꼼꼼하게</span> 기록하고
            확인하는 습관을 길렀습니다.
          </p>
        </div>
      </div>
    </AccordionItem>
  </div>
);

const AccordionItem = ({ title, children }: { title: any; children: any }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="itemWrapper">
      {/* 아코디언 타이틀 */}
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
      >
        {title}
      </div>
      {/* 아코디언 아이템 */}
      <div className={`accordionItem ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordionContent">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
