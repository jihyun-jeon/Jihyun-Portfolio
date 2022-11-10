import React, { useState } from "react";
import "./Growing.css";

const Growing = () => {
  const [clickValue, setClickValue] = useState(1);

  const onClickCircle = (e: React.MouseEvent<HTMLLIElement>) => {
    const { value } = e.currentTarget;
    setClickValue(value);
  };

  return (
    <div className="_growing">
      <div className="circleWrapper">
        <ul>
          <li value="1" onClick={onClickCircle}>
            <p>주도적으로</p>
            <p>진행한 기획</p>
          </li>
        </ul>
        <ul>
          <li value="2" onClick={onClickCircle}>
            <p> 원만한 대화를 통한</p>
            <p>의견 조율</p>
          </li>
        </ul>
        <ul>
          <li value="3" onClick={onClickCircle}>
            <p>에러 해결기</p>
            <p>(비동기 처리의 순서)</p>
          </li>
        </ul>
      </div>

      <div className="circleContentWrapper">
        {clickValue === 1 && (
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
        {clickValue === 2 && <div className="circleContent font-ml">2</div>}
        {clickValue === 3 && <div className="circleContent font-ml">3</div>}
      </div>
    </div>
  );
};

export default Growing;
