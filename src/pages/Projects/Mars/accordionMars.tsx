import { useState } from "react";
import "./accordionMars.css";

const AccordionMars = () => (
  <div className="AccordionWrapper">
    <AccordionItem
      title={
        <p className="font-m itemTitle">
          <span>1. Google Maps Javascript API 연동 장비 현황도 구현</span>
        </p>
      }
    >
      <div className="content">
        <div className="contentLine">
          <p className="contentLineDesc">
            이 서비스는 해외 공사 현장에서도 사용될 것을 고려했기 때문에,
            <br /> 전 세계의 지도를 제공하는 Google Maps Javascript API를
            사용했습니다.
          </p>

          <span className="contentTitle font-m">
            📍 도면을 지도 배경으로 커스텀
          </span>
          <div className="innerLine innerLineFlex">
            <p className="dash"> - </p>
            <p>
              실제 공사장 도면을 지도 배경 이미지로 활용하여 장비의 위치를
              파악할 수 있도록 하였습니다.
            </p>
          </div>
        </div>

        <div className="contentLine">
          <span className="contentTitle font-m">
            📍 Marker를 이용한 장비의 가동상황 표시
          </span>
          <div className="innerLine innerLineFlex">
            <p className="dash"> - </p>
            <p>
              장비별 아이콘을 Marker로 표시하고, 장비 가동 상태에 따라 아이콘
              색상이 변경됩니다.
            </p>
          </div>
        </div>

        <div className="contentLine">
          <span className="contentTitle font-m">
            📍 Cluster와 Overlay를 활용한 공사현장 표시
          </span>
          <div className="innerLine innerLineFlex">
            <p className="dash"> - </p>
            <p>
              지도 축소 시 Cluster로 마커가 하나로 모이고, 마커 클릭 시
              Overlay에 장비 이름이 표시되어 <br />
              관리자가 공사현장을 한눈에 파악할 수 있도록 하였습니다.
            </p>
          </div>
        </div>
      </div>
    </AccordionItem>

    <AccordionItem
      title={
        <p className="font-m itemTitle">
          <span> 2. Context API를 이용한 Toast 메시지</span>
        </p>
      }
    >
      <div className="content">
        <div className="contentLine">
          <div className="innerLine innerLineFlex">
            Context API를 이용하여 toast 메시지를 전역으로 두어, 다른 팀원이
            구현하는 페이지에서도 같이 사용할 수 있도록 하였습니다.
          </div>
        </div>
      </div>
    </AccordionItem>
    <AccordionItem
      title={
        <p className="font-m itemTitle">
          <span> 3. 재사용 가능한 컴포넌트 구상</span>
        </p>
      }
    >
      <div className="content">
        <div className="contentLine">
          <div className="innerLine innerLineFlex">
            반복되는 input box와 select box를 공통 컴포넌트로 분리하여
            재사용하였습니다. <br />
            또한 요소마다 조금씩 다른 style 처리를 해야 하는 경우가 있었는데,
            이는 props로 독립적인 style 값을 주어 해결하였습니다. <br />이 결과
            한 컴포넌트를 사용해도 상황에 맞는 별도의 UI를 그릴 수 있었습니다.
          </div>
          <img src="/imgs/components.png" className="components" />
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

export default AccordionMars;
