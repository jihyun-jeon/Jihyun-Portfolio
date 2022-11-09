import React, { useState } from "react";
import "./Skill.css";

function Skills() {
  const [skillText, setSkillText] = useState("HTML");

  const onClickByn = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const LinkValue = (e.target as HTMLLinkElement).dataset.value;
    const DomValue = (e.target as HTMLLinkElement).innerText;

    const isInClude = LinkValue && DomValue?.includes(LinkValue);

    if (isInClude) {
      setSkillText(`${LinkValue}`);
    }
  };

  return (
    <div className="_skill">
      <div className="oneSection">
        <h1 className="font-xl sectionTitle">Skills</h1>

        <div className="skillBoxes">
          <a data-value="HTML" className="font-l" onClick={onClickByn}>
            HTML
            <br />
            CSS(SCSS)
          </a>

          <a data-value="Javascript" className="font-l" onClick={onClickByn}>
            Javascript
          </a>

          <a data-value="React" className="font-l" onClick={onClickByn}>
            React.js
          </a>

          <a data-value="Redux" className="font-l" onClick={onClickByn}>
            Redux
            <br />
            toolkit
          </a>

          <a data-value="Styled" className="font-l" onClick={onClickByn}>
            Styled-componets <br />
            TailwindCSS
          </a>

          <a data-value="git" className="font-l" onClick={onClickByn}>
            git
          </a>
        </div>
        {skillText === "HTML" && (
          <div className="skillTextBox">
            <p>
              기본적인 마크업 작업이 가능하며 flex나 grid를 이용한
              <span className="boldWord font-m">반응형</span>
              레이아웃을 구상할 수 있습니다.
            </p>
          </div>
        )}

        {skillText === "Javascript" && (
          <div className="skillTextBox">
            <p>
              자바스크립트의 문법을 익기 위해 “모던 자바스크립트 Deep Dive”라는
              책을 정독했으며
            </p>
            <p>
              앞으로 더 깊게 공부하여
              <span className="boldWord font-m">기본기가 단단한 개발자가</span>
              되고자 합니다.
            </p>
          </div>
        )}

        {skillText === "React" && (
          <div className="skillTextBox">
            <p>
              <span className="boldWord font-m">공통 컴포넌트</span>나
              <span className="boldWord font-m">hook</span>을 활용하여 반복되는
              작업을 더 효율적으로 구상하려고 합니다.
            </p>
          </div>
        )}

        {skillText === "Redux" && (
          <div className="skillTextBox">
            <p>Redux를 활용한 상태관리의 기본 로직을 이해하고 있으며</p>
            <p>
              비동기 처리를 위해 Redux-toolkit의 내장 기능인
              <span className="boldWord font-m">createAsyncThunk</span>를 활용할
              수 있습니다.
            </p>
          </div>
        )}

        {skillText === "Styled" && (
          <div className="skillTextBox">
            js코드와 css가 상태 값을 공유하며 컴포넌트와 스타일 코드를 오가는
            로직을 구상할 수 있습니다.
          </div>
        )}

        {skillText === "git" && (
          <div className="skillTextBox">
            git을 이용한 팀 프로젝트 경험이 있으며, 깃 컨벤션에 맞춰 협업을 할
            수 있습니다.
          </div>
        )}
      </div>

      <div className="twoSection">
        <h1 className="font-xl  sectionTitle">Possibility</h1>
        <ul className="lists">
          <li className="list">
            <div className="listTitle">ㅇㅇ함</div>
            <div>
              <p className="possibilityBar" />
              <p>성실하게 맡은 바 임무를 해낼 수 있습니다.</p>
            </div>
          </li>
          <li className="list">
            <div className="listTitle">ㅇㅇ함</div>
            <div>
              <p className="possibilityBar" />
              <p>성실하게 맡은 바 임무를 해낼 수 있습니다.</p>
            </div>
          </li>
          <li className="list">
            <div className="listTitle">ㅇㅇ함</div>
            <div>
              <p className="possibilityBar" />
              <p>성실하게 맡은 바 임무를 해낼 수 있습니다.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
