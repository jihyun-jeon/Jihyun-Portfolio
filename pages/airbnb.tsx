import tw from "twin.macro";
import { Label } from "../components/Label";
import Carousel from "../components/Carousel";
import Accordion from "../components/Accordion";
import LinkIcon from "../components/LinkIcon";
import Growing from "../components/Growing";
import { ProjectWrapper } from "../components/ProjectWrapper";
import InfoList from "../components/InfoList";

const AirbnbApp = () => {
  return (
    <ProjectWrapper>
      <div tw="max-w-3xl mx-auto">
        <h1 tw="w-full font-bold mb-5 text-3xl flex justify-between  sm:(text-2xl flex justify-center)">
          Tamna BnB
        </h1>
        <div tw="my-12 sm:(px-3 text-xs my-10)">
          <InfoList>
            <li tw="font-bold mb-3" className="infoTitle">
              링크
            </li>
            <li tw="flex">
              <LinkIcon
                txt="git"
                url="https://github.com/jihyun-jeon/34-2nd-TamnaBnB-frontend"
              />

              <LinkIcon
                txt="개발노트"
                url="https://velog.io/@jhplus13/React-%EC%97%90%EC%96%B4%EB%B9%84%EC%95%A4%EB%B9%84-%ED%81%B4%EB%A1%A0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8"
              />
            </li>
          </InfoList>
          <InfoList>
            <li tw="font-bold mb-2" className="infoTitle">
              서비스 소개
            </li>
            <li>
              이 서비스는 Airbnb 사이트를 모티브하여 진행한 숙소 검색 및 예약
              사이트 입니다.
            </li>
          </InfoList>
          <InfoList>
            <li tw="font-bold mb-2" className="infoTitle">
              사용 스택
            </li>
            <li>
              <Label txt="React" color="blue" />
              <Label txt="styled-components" color="violet" />
              <Label txt="HTML" color="yellow" />
            </li>
          </InfoList>
          <InfoList>
            <li tw="font-bold mb-2" className="infoTitle">
              기간
            </li>
            <li>2022. 07. 04 ~ 2022. 07. 15 &#40;2주&#41;</li>
          </InfoList>
          <InfoList>
            <li tw="font-bold mb-2" className="infoTitle">
              팀 구성
            </li>
            <li>프론트엔드 4명, 백엔드 1명</li>
          </InfoList>
        </div>
        <Carousel CarouselData={CarouselData} />
        <div tw="my-20 sm:(px-3 text-xs)">
          <div tw="max-w-[660px] mx-auto">
            <h1 tw="py-8 text-xl font-bold">개발 내용</h1>

            <Accordion CarouselTitle={"1. 무한스크롤, 페이지네이션 기능"}>
              <div>
                <div tw="mb-6">
                  무한스크롤과 페이지네이션을 각각 언제 사용하는게 좋을지
                  생각해보는 계기가 되었습니다.
                </div>

                <div tw="mb-6">
                  <p tw="font-bold">📍 무한스크롤</p>
                  <p tw="ml-2 mt-1">
                    <span> - </span>
                    window의 scrollY, innerHeight, scrollHeight를 이용하여 특정
                    위치까지 스크롤 되었을 때 다음 데이터를 요청하여 숙소 목록을
                    보여주는 무한스크롤 기능을 구현하였습니다.
                  </p>
                </div>

                <div tw="mb-6">
                  <p tw="font-bold"> 📍 페이지네이션</p>
                  <p tw="ml-2 mt-1">
                    <span> - </span>
                    페이지 버튼을 누를 시 path주소가 바뀌고, 브라우저의 주소가
                    바뀌면 해당 페이지에 맞는 숙소 목록을 보여줄 수 있도록
                    페이지네이션을 구현하였습니다.
                  </p>
                </div>
              </div>
            </Accordion>
            <Accordion CarouselTitle={"2. Kakao Maps API 를 연동한 숙소 지도"}>
              <div tw="mb-6">
                프로젝트상 숙소 범위를 제주도 지역만으로 추려 진행하였습니다.
                <br /> 한국 사용자들이 많이 사용할 것을 고려해 한국에 친화적인
                카카오 지도를 사용하였습니다.
              </div>
              <div tw="mb-6">
                <p tw="ml-2 mt-1">
                  <span> 📍 </span>
                  해당 숙소의 좌표에 맞는 부분에 Marker가 표시
                </p>
                <p tw="ml-2 mt-1">
                  <span> 📍 </span>
                  숙소 리스트에 마우스 호버시 지도상 해당 Marker 하이라이트
                </p>
                <p tw="ml-2 mt-1">
                  <span> 📍 </span>
                  Marker 클릭 시 숙소에 대한 정보가 Overlay로 팝업
                </p>
              </div>
            </Accordion>
            <Accordion CarouselTitle={"3. React Slick 을 이용한 캐러셀 구현"}>
              <div tw="mb-6">
                짧은 기한 내에 프로젝트를 완성하기 위해 UI 구현 시 라이브러리를
                사용하였습니다.
                <br /> 다양한 라이브러리 중 React Slick을 사용한 이유는 다양한
                옵션을 제공해서 원하는 대로 커스텀 할 수 있기 때문입니다.
              </div>
              <div tw="mb-6">
                <p tw="font-bold"> 📍 커스텀 부분</p>
                <p tw="ml-2 mt-1">
                  캐러셀 좌우 화살표와 하단 페이지네이션 점을 옵션으로 넣고, CSS
                  선택자로 스타일을 추가하였습니다.
                </p>
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

export default AirbnbApp;

const CarouselData = [
  {
    title: "담당 부분 데모영상",
    url: "https://www.youtube.com/embed/IipXP5xTzAY",
  },
];

const GrowingData = [
  [
    "나만의 업무 템플릿 작성",
    "해당 프로젝트를 진행하며 저만의 업무 템플릿을 엑셀 시트로 만들어 관리하였습니다.\n<br/>담당 업무를 대분류 > 중분류 > 소분류 로 잘게 쪼개어 <u>업무를 상세히 관리</u>하고,\n 각 기능 옆에는 필요 api여부나 완료사항 란을 만들어 체크하였습니다.\n<br/> 이렇게 저만의 템플릿을 만들어 관리하니 <b>업무의 우선순위를 파악</b>하기 쉬웠고\n 또한 <b>전반적인 진행상황도 파악</b>할 수 있었습니다.\n <br/>저는 앞으로도 이런 템플릿을 활용하여 업무를 꼼꼼하게 관리하며 처리해나갈 것 입니다.",
  ],
  [
    "문서로 소통하기",
    "팀 회의때 자주 사용되는 css는 mixin으로 만들어 사용하자는 제안이 나왔습니다.\n<br/>그러나 팀원들이 모두 시간적 여유가 없어보여서 제가 <b>주도하여</b> 한번 만들어 보겠다고 하였습니다.\n그리고 mixin <b>사용법을 문서화하여 팀원에게 공유</b>하였습니다.\n<br/>이를 통해 팀원들은 해당문서를 보고 코드에 적용을 했고, 이 문서를 언제든 다시 찾아볼 수 있게 되었습니다.",
  ],
  [
    "에러 해결기\n(useRef의 쓰임에 대해)",
    "카카오맵의 인스턴스 객체를 변수에 담고 이 인스턴스 객체에 접근하여 메서드를 사용했어야 했습니다. 그러나 컴포넌트가 <b>리렌더링 될 때마다 인스턴스가 초기화</b>되서 값이 유지되지 않는 문제가 발생하였습니다. \n<br/>이를 해결하기 위해 <b>useRef를 활용</b>하여 리렌더링 되도 바뀌지 않는 값을 갖을 수 있도록 하였습니다.\n<br/>이 계기를 통해 useRef의 값으로 <u>1&#41;외부 라이브러리의 인스턴스 객체의 값</u>이나 <u>2&#41;scroll위치</u>, <u>3&#41;setTimeout을 통해 만들어진 id</u>를 관리할 수 있다는 것 까지 알게되었습니다.",
  ],
];
