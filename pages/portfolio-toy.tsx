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
            <Accordion CarouselTitle={"1. 반응형 사이트 구현"}>
              <div tw="mb-6">
                <div>
                  PC, Tablet, Mobile 환경에 대응할 수 있는 반응형 사이트로
                  구현하였습니다.
                  <br /> 또한 PC의 경우 모니터 화면이 늘어나도 컨텐츠가 중앙에
                  유지되게끔 구현하였습니다.
                  <br /> <br />
                  처음엔 반응형 사이트를 염두하지 않고 시작한터라, 나중에 반응형
                  구현시 브라우저 사이즈가 줄어들면
                  <span tw="font-semibold pl-1 text-mainOrange">
                    컨텐츠의 가로 길이가 px로 고정되있어서 뷰포트 밖을 벗어나는
                    문제
                  </span>
                  가 있었습니다.
                  <br /> <br /> 이를 해결하기 위해 컨텐츠의 가로 사이즈를
                  브라우저 기준
                  <span tw="font-semibold pl-1 text-mainOrange">
                    상대 사이즈인 %로
                  </span>
                  수정하여 해결하였습니다.
                </div>
              </div>
            </Accordion>

            <Accordion
              CarouselTitle={"2. IntersectionObserver을 활용한 성능 최적화"}
            >
              <div tw="mb-6">
                페이지 스크롤시 특정 위치에 따라 Nav메뉴에 underline 처리를 하기
                위해 <br />
                IntersectionObserver을 활용하여 관찰 요소를 지정하는 방식으로
                구현하였습니다.
                <br /> <br />
                이를 통해 document에 직접 scroll 이벤트를 바인딩 하던 방식에
                비해 더 성능을 최적화 할 수 있었습니다.
                <br />
                <br />
                <span tw="font-semibold pl-1 text-mainOrange">
                  scroll 이벤트가 불필요하게 발생
                </span>
                하는 현상을 막을 수 있고,
                <br />
                getBoundingClientRect를 호출하지 않아
                <span tw="font-semibold pl-1 text-mainOrange">
                  리플로우 현상을 막을 수
                </span>
                &nbsp; 있어 <br />
                사이트의 성능을 좀 더 개선시킬 수 있었습니다.
              </div>
            </Accordion>
            <Accordion CarouselTitle={"3. lazyload를 활용한 로딩속도 향상"}>
              <div>
                <div tw="mb-6">
                  Carousel를 넘길때 다음 슬라이드의 동영상을 로드 하는데 시간이
                  오래 걸려 빈 화면인 상태에서 기다려야 했습니다.
                  <br />
                  <br />
                  슬라이드 이동시
                  <span tw="font-semibold pl-1 text-mainOrange">
                    동영상 로드 속도를 개선
                  </span>
                  하기 위해 react-slick 기능 중 lazyload 기능을 활용하였습니다.
                  <br />
                  <br />
                  lazyload 속성 중 anticipated 값을 적용하여 슬라이드를 넘기기
                  전에 미리 이후 슬라이드 동영상을 로드해주어 로딩 속도를 개선할
                  수 있었습니다.
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
    "server에서 pre-render한 tree와 브라우저에서 초기 render한 tree가 달라서 \n <b>React Hydration Error 오류 </b>가 났습니다. \n<br/> ul태그 없이 li태그를 써서 발생한 문제였고 html 요소 순서를 올바르게 수정하여 해결하였습니다. \n<br/> 이 에러를 해결하면서 hydration을 통해 server에서 내려준 HTML dom을 \nclient에서  <b>매칭하며 렌더링 </b>하고 이후  <b>이벤트 핸들러를 바인딩 </b>하게 되는 원리를 알게되었습니다.",
  ],
  [
    "사이트 성능 측정 경험",
    "성능을 측정해보며 FCP, LCP 등 성능 측정 지표를 자세히 공부할 수 있었습니다. \n<br/> 성능을 측정해보니 초기 화면 로딩시 다운받아야 할 이미지가 많아서 로딩이 지연되었습니다. \n<br/>초기 렌더링 성능 향상을 위해 화면에 바로 보여지지 않는 이미지에 loading=lazy 값을 주어 성능을 개선할 수 있다는 것을 알았습니다.",
  ],
];

// react로 했을때와 nextjs로 했을때의 초기 렌더링 속도 비교
// 초반에 화면에 보여지지 않는 이미지들은 lazyload 처리하여 초기 렌더링 속도 향상 고려(0.0003초 차이가 나서 그냥 lazyload 처리 하지 않음)
// scroll이벤트로 요소 감지 VS intersectionObserver로 감지 (속도)성능 비교
