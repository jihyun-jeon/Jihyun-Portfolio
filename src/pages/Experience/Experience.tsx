import { IoFootsteps } from "react-icons/io5";

// import "antd/dist/antd.css";
import "./Experience.css";
// import { Collapse } from "antd";
// const { Panel } = Collapse;
import Accordion from "../../components/accordion";

function Experience() {
  return (
    <div>
      <h1 className="experienceTitle font-xl">Experience</h1>

      <div className="_experience">
        <div className="footContainer">
          <IoFootsteps size="45" className="foot" />
          <IoFootsteps size="45" className="foot rightFoot" />
          <IoFootsteps size="45" className="foot" />
          <IoFootsteps size="45" className="foot rightFoot" />
          <IoFootsteps size="45" className="foot" />
          <IoFootsteps size="45" className="foot rightFoot" />
          <IoFootsteps size="45" className="foot" />
          <IoFootsteps size="45" className="foot rightFoot" />
          <IoFootsteps size="45" className="foot" />
        </div>

        {/* 아코디언 */}

        {/* <Collapse
          defaultActiveKey={["1"]}
          bordered={false}
          // onChange={onChange}
          className="collapse"
        >
          <Panel
            header={
              <p className="font-m">
                Wanted Pre-onboarding 수료
                <span>2022. 08. 30 ~2022. 09. 30 (1개월)</span>
              </p>
            }
            key="1"
            className="panel"
          >
            <div className="content">
              <div className="contentLine">
                <span className="contentTitle">
                  0
                </p>
              </div>
            </div>
          </Panel>
          <Panel
            header={
              <p className="font-m">
                (주)무스마 - 프론트엔드 인턴
                <span>2022. 08 ~ 2022. 08 (1개월)</span>
              </p>
            }
            key="2"
            className="panel"
          >
            <div className="content">
              <div className="contentLine">
                <span className="contentTitle">
                  📍 사내 프로젝트 참여, 기획부터 개발까지
                </span>
                <p className="innerLine">
                  서비스를 이해하고 사용자가 원하는 가치를 코드로
                  구현해보았습니다.
                </p>
              </div>

              <div className="contentLine">
                <span className="contentTitle">
                  📍 짧은 주기의 프로토타이핑의 중요성
                </span>
                <p className="innerLine">
                  빠른 업무 진행을 위해 혼자 고민하기보단 적극적으로 질문하고
                  가설을 확인받아 Agile한 업무 진행을 하는 것이 중요하다고
                  느꼈습니다.
                </p>
              </div>
            </div>
          </Panel>
          <Panel
            header={
              <p className="font-m">
                Wecode 부트캠프 - Front-end 개발자 과정
                <span>2022. 05 ~ 2022. 07 (3개월)</span>
              </p>
            }
            key="3"
            className="panel"
          >
            <div className="content">
              <div className="contentLine">
                <span className="contentTitle">
                  📍 프론트엔드 개발에 대한 기본지식과 팀 프로젝트를 통한
                  백엔드와의 소통
                </span>
                <p className="innerLine">
                  - 백엔드와의 소통시 프론트에서만 이해하는 용어가 아닌 백엔드
                  분들도 같이 이해할 수 있는 "일반적이고 명확한 용어"를 사용해야
                  한다는 것을 알았습니다.
                </p>
                <p className="innerLine">
                  - 백엔드와의 소통을 통해 api 형식을 맞춰나갔습니다.
                </p>
              </div>

              <div className="contentLine">
                <span className="contentTitle">
                  📍 모범 수강생으로써 얻은
                  <a
                    href="https://www.instagram.com/p/CftUjPCPPr2/?utm_source=ig_web_copy_link"
                    target="_blank"
                  >
                    위코드 인터뷰 기회
                  </a>
                </span>
                <p className="innerLine">
                  모든 팀 활동에서 능동적으로 참여하는 모습 덕분에 다른
                  수강생에게 좋은 영향을 끼치게 되었습니다.
                </p>
              </div>
            </div>
          </Panel>
          <Panel
            header={
              <p className="font-m">
                나무택스세무회계 <span>2019. 10 ~ 2021. 09 (2년)</span>
              </p>
            }
            key="4"
            className="panel"
          >
            <div className="content">
              <div className="contentLine">
                <p className="innerLine">
                  📍 여러 사업장의 회계 담당자, 사장님들을 대하면서 세금 관련된
                  무겁고 껄끄러울 수 있는 얘기 도 **좀 더 부드럽게 말할 수 있는
                  법**을 배웠습니다.
                </p>
              </div>

              <div className="contentLine">
                <p className="innerLine">
                  📍 문서를 **꼼꼼하게** 기록하고 확인하는 습관을 길렀습니다.
                </p>
              </div>
            </div>
          </Panel>
        </Collapse> */}
        <Accordion />
      </div>
    </div>
  );
}

export default Experience;
