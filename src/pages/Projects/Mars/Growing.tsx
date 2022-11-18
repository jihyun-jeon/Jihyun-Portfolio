import React, { useState } from "react";
import styled from "styled-components";
import "./Growing.css";

const Growing = () => {
  const [clickValue, setClickValue] = useState("1");

  const onClickCircle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    setClickValue(value);
  };

  return (
    <div className="_growing">
      <div className="circleWrapper">
        <button type="button" value="1" onClick={onClickCircle}>
          <p>주도적으로</p>
          <p>진행한 기획</p>
        </button>

        <button type="button" value="2" onClick={onClickCircle}>
          <p> 원만한 대화를 통한</p>
          <p>의견 조율</p>
        </button>

        <button type="button" value="3" onClick={onClickCircle}>
          <p>에러 해결기</p>
          <p>(비동기 처리 순서 보장)</p>
        </button>
      </div>

      <div className="circleContentWrapper">
        {clickValue === "1" && (
          <div className="circleContent font-ml">
            <p>
              구현해야 할 기능 명세만 텍스트로 주어진 상태에서 기획부터 앱
              제작까지 하였습니다.
            </p>
            <br />
            <p>
              도메인 지식이 없어서 용어 파악부터 사용자가 원하는 니즈가
              무엇인지까지 끊임없이 생각하였습니다.
            </p>
            <p>
              이 경험을 통해
              <span className="hightligher">
                단순 기능 구현이 아닌, 도메인과 서비스를 이해하여 사용자가
                원하는 가치를 파악
              </span>
              하고 그 가치를 코드로 구현 해보는 경험을 하였습니다.
            </p>
            <br />
            <p>
              개발자는 항상
              <span className="hightligher">서비스 중심의 마인드 </span>를
              가지고 의미 있는 코드를 작성해야 한다는 것을 배웠습니다.
            </p>
          </div>
        )}
        {clickValue === "2" && (
          <div className="circleContent font-ml">
            <p>
              MobX를 사용하는데 있어서 다른 팀원과 각자 추구하는 방식이
              달랐습니다.
            </p>
            <br />
            <p>
              때문에 각자가 선호하는 방법을 서로에게 설명하는 시간을 가졌고 또한
              구글링을 통해 두 방식은 테스트 할 때의 차이를 보인다는 것을
              알아냈습니다.
            </p>
            <br />
            <p>
              그 결과 다른 팀원이 상태 관리 셋팅을 담당하기도 했기 때문에 팀원을
              믿고 팀원의 결정대로 진행하였습니다
            </p>
            <br />
            <p>
              저는 상대와 의견 충돌이 있을 시,
              <span className="hightligher">
                동료의 의견이 옳을 수 있다는 열린 마음
              </span>
              을 갖고
              <br /> 동료와의 충분한 상의를 통해 해결해 나갈 것입니다.
            </p>
          </div>
        )}
        {clickValue === "3" && (
          <div className="circleContent font-ml">
            <p>
              데이터를 put요청 후 다시 get요청을 하여 최신 데이터로 store값을
              갱신해줘야 했습니다. 그러나 store 업데이트 후 자동으로 리렌더링이
              안되고 새로고침을 해야지만 반영이 되는 현상이 발생하였습니다.
            </p>
            <br />
            <p>
              MobX를 처음 사용해본 탓에 MobX 사용법의 문제인 줄 알고 MobX를
              수정해보다,
              <br />
              이후 api 호출 하는 코드에서 응답값을 콘솔로 찍어보니 put요청과
              get요청의 순서가 보장되지 않는 것을 알게되었습니다.
            </p>
            <br />
            <p>
              때문에 <span className="hightligher">async구문을 사용</span>하여
              두 api호출의 순서를 보장하도록 하였고
              <br />
              또한 fetch의
              <span className="hightligher">
                then메서드에서 중첩 fetch를 반환
              </span>
              하는 식으로 비동기 처리의 순서를 보장 할 수도 있다는 것을
              알았습니다.
            </p>
            <br />
          </div>
        )}
      </div>
    </div>
  );
};

export default Growing;
