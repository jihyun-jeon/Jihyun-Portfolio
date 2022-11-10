import "./Mars.css";
import Carousel from "../../../../components/Carousel";
import AccordionMars from "./accordionMars";
import Growing from "./Growing";

const Mars = () => {
  return (
    <div className="_Mars">
      <h1 className="font-xl projectTitle">Mars 프로젝트</h1>
      <div className="infoContainer">
        <ul className="InfoUl">
          <li className="InfoTitle">서비스 소개</li>
          <li>
            이 서비스는 <span className="underLine">공사현장 관리자</span>를
            위한
            <span className="bold underLine">실시간 장비 모니터링 시스템</span>
            이며,
            <br />
            (주)무스마 내에서 실제 고객사에게 자사 제품 소개시 사용될 샘플
            시안을 만든 것 입니다.
          </li>
        </ul>
        <ul className="InfoUl">
          <li className="InfoTitle">사용 스택</li>
          <li>
            <span className="blue label">React.js</span>
            <span className="green label">TypeScript</span>
            <span className="rosybrown label">MobX</span>
            <span className="violet label">Tailwind CSS</span>
            <span className="yellow label">HTML</span>
          </li>
        </ul>
        <ul className="InfoUl">
          <li className="InfoTitle">기간</li>
          <li>2022.07.18 ~ 2022.08.11 (4주)</li>
        </ul>
        <ul className="InfoUl">
          <li className="InfoTitle">팀 구성</li>
          <li>프론트엔드 2명, 백엔드 2명</li>
        </ul>
      </div>
      <Carousel />
      <div className="projectContent">
        <div className="contentItem">
          <h1>개발 내용</h1>
          <AccordionMars />
        </div>
        <br />
        <br />
        <div className="contentItem">
          <h1>성장 포인트</h1>
          <Growing />
        </div>
      </div>
    </div>
  );
};

export default Mars;
