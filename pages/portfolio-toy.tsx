import tw from "twin.macro";
import { Label } from "../components/Label";
import Carousel from "../components/Carousel";
import Accordion from "../components/Accordion";
import LinkIcon from "../components/LinkIcon";
import Growing from "../components/Growing";
import "react-medium-image-zoom/dist/styles.css";
import { ProjectWrapper } from "../components/ProjectWrapper";
import InfoList from "../components/InfoList";

const PortfolioToy = () => {
  return (
    <ProjectWrapper>
      <div tw="max-w-3xl mx-auto">
        <h1 tw="w-full font-bold mb-5 text-3xl flex justify-between sm:(text-2xl flex justify-center)">
          Portfolio
        </h1>
        <div tw="my-12 sm:(px-3 text-xs my-10)">
          <InfoList>
            <li tw="font-bold mb-3" className="infoTitle">
              링크
            </li>
            <li tw="flex">
              <LinkIcon
                txt="git"
                url="https://github.com/jihyun-jeon/portfolio"
              />

              <LinkIcon
                txt="개발노트"
                url="https://velog.io/@jhplus13/series/TIL"
              />
            </li>
          </InfoList>
          <InfoList>
            <li tw="font-bold mb-8" className="infoTitle">
              서비스 소개
            </li>
            <li>
              현재 포트폴리오 사이트 입니다.
              <br />
              React로 작업 후 NextJS로 마이그레이션 하였습니다.
            </li>
          </InfoList>
          <InfoList>
            <li tw="font-bold mb-2" className="infoTitle">
              사용 스택
            </li>
            <li>
              <Label txt="Next.js" color="rosy" />
              <Label txt="React" color="blue" />
              <Label txt="Typescript" color="green" />
              <Label txt="Tailwind" color="violet" />
              <Label txt="Styled-component" color="violet" />
              <Label txt="Javascript" color="yellow" />
            </li>
          </InfoList>

          <InfoList>
            <li tw="font-bold mb-2" className="infoTitle">
              팀 구성
            </li>
            <li>개인 프로젝트 &#40;프론트엔드 1명&#41;</li>
          </InfoList>
        </div>

        <div tw="sm:(px-3 text-xs)">
          <div tw="max-w-[660px] mx-auto">
            <h1 tw="py-8 text-xl font-bold">개발 내용</h1>

            <Accordion CarouselTitle={"1. lazyload를 활용한 성능 최적화"}>
              <div>
                <div tw="mb-6">
                  이 서비스는 해외 공사 현장에서도 사용될 것을 고려했기 때문에,
                  <br /> 전 세계의 지도를 제공하는 Google Maps Javascript API를
                  사용했습니다.
                </div>

                <div tw="mb-6">
                  <p tw="font-bold">📍 도면을 지도 배경으로 커스텀</p>
                  <p tw="ml-2 mt-1">
                    <span> - </span>
                    실제 공사장 도면을 지도 배경 이미지로 활용하여 장비의 위치를
                    파악할 수 있도록 하였습니다.
                  </p>
                </div>

                <div tw="mb-6">
                  <p tw="font-bold"> 📍 Marker를 이용한 장비의 가동상황 표시</p>
                  <p tw="ml-2 mt-1">
                    <span> - </span>
                    장비별 아이콘을 Marker로 표시하고, 장비 가동 상태에 따라
                    아이콘 색상이 변경됩니다.
                  </p>
                </div>
                <div tw="mb-6">
                  <p tw="font-bold">
                    📍 Cluster와 Overlay를 활용한 공사현장 표시
                  </p>
                  <p tw="ml-2 mt-1">
                    <span> - </span>
                    지도 축소 시 Cluster로 마커가 하나로 모이고, 마커 클릭 시
                    Overlay에 장비 이름이 표시되어 <br />
                    관리자가 공사현장을 한눈에 파악할 수 있도록 하였습니다.
                  </p>
                </div>
              </div>
            </Accordion>
            <Accordion CarouselTitle={"2. IntersectionObserver"}>
              <div tw="mb-6">
                Context API를 이용하여 toast 메시지를 전역으로 두어, 다른 팀원이
                구현하는 페이지에서도 같이 사용할 수 있도록 하였습니다.
              </div>
            </Accordion>
            <Accordion CarouselTitle={"3. 재사용 가능한 컴포넌트 구상"}>
              <div tw="mb-6">
                <div>
                  반복되는 input box와 select box를 공통 컴포넌트로 분리하여
                  재사용하였습니다. <br />
                  <br />
                  또한 요소마다 조금씩 다른 style 처리를 해야 하는 경우가
                  있었는데
                  <br />
                  이는 props로 독립적인 style 값을 주어 해결하였습니다.
                  <br />
                  <br />이 결과 한 컴포넌트를 사용해도 상황에 맞는 별도의 UI를
                  그릴 수 있었습니다.
                </div>
              </div>
            </Accordion>
          </div>

          <div tw="max-w-[660px] mx-auto my-10">
            <h1 tw="py-8 text-xl font-bold">성장 포인트</h1>

            <Growing GrowingData={GrowingData} />
          </div>
        </div>
      </div>
    </ProjectWrapper>
  );
};

export default PortfolioToy;

const GrowingData = [
  [
    "SSR 경험",
    "server에서 만든  와 client에서 만들어지는 dom tree가 달라서 React Hydration Error 오류가 났습니다. \n 이 에러를 해결하면서 server에서 만드는 dom tree의 최상위 객체는 window가 아니기 때문에 ssr 또는 csr 에서만 렌더링되는 로직은 제거해야 한다는 것을 알았습니다.",
  ],
  [
    "사이트 성능 측정 경험",
    "MobX를 사용하는데 있어서 다른 팀원과 각자 추구하는 방식이 달랐습니다.\n<br/>때문에 각자가 선호하는 방법을 서로에게 설명하는 시간을 가졌고 또한 구글링을 통해 두 방식은 테스트 할 때에 차이를 보인다는 것을 알아냈습니다.\n이 프로젝트는 테스트는 진행하지 않았고 다른 팀원이 상태 관리 셋팅을 담당하기로 했기 때문에 팀원을 믿고 팀원의 결정대로 방식을 결정하였습니다.\n<br/>저는 상대와 의견 충돌이 있을 때 <b>동료의 의견이 옳을 수 있다는 열린 마음</b>을 갖고\n동료와의 <b>충분한 상의</b>를 통해 원만히 해결해 나갈 것입니다.",
  ],
  [
    "에러 해결기\n(비동기 처리 순서 보장)",
    "수정된 데이터를 put요청 후 다시 get요청을 하여 최신 데이터로 store값을 갱신해줘야 했습니다. \n<br/>그러나 store 업데이트 후 자동으로 리렌더링이 안되고 새로고침을 해야지만 업데이트 된 내용이 반영이 되는 현상이 발생하였습니다.\n 여러 시도 끝에 api 호출하는 코드에서 응답 값을 콘솔로 찍어보니 put요청과 get요청의 순서가 보장되지 않는 것을 알게 되었습니다. \n<br/>때문에 <b>async구문을 사용</b>하여 두 api호출의 순서를 보장하도록 하였고,\n 나아가 fetch의 then메서드에서 <b>중첩 fetch</b>를 반환하는 식으로 비동기 처리의 순서를 보장할 수도 있다는 것까지 알게 되었습니다.",
  ],
];
