import "./Introduce.css";

function Introduce() {
  return (
    <div className="_introduce">
      <h1 className="font-xl title">Introduce</h1>

      <div className="wrapper">
        <div className="gridItemImg">
          <img
            src="/jihyunImg.png"
            alt="jihyunImg"
            style={{ width: "300px" }}
          />
        </div>

        <div className="gridItemText">
          <div className="font-l contentTitle">
            <p>
              저는 <strong>기본기가 탄탄한</strong> 프론트엔드 개발자
            </p>
            <p>
              <strong>전지현</strong>입니다
            </p>
          </div>
          <div className="contentText">
            <p>
              저는 <strong>차분하고 꼼꼼한</strong> 성격을 지니고 있어 준비성이
              좋다는 말을 듣곤 합니다
            </p>
            <p>
              또한 저에게 주어진 모든 상황이 저에게 기회라고 생각하기 때문에
            </p>
            <p>모든 일에 적극적인 태도로 임하려고자 합니다.</p>
            <br />
            <p>이전엔 세무대리인으로 근무를 하며 자동화가 될수록 세금 신고와</p>
            <p>
              회계 처리가 단순해지는 것을 보고, 복잡한 일을 단순하게 만들 수
              있다는
            </p>
            <p> 것에 흥미를 느껴 코딩을 시작하게 되었습니다.</p>
            <br />
            <p>개발자로서 목표는 기본기가 탄탄하여 빠르게 변화하는 추세에도</p>
            <p>
              그 <strong>트렌드를 따라갈 수 있는 개발자가</strong> 되는 것과
            </p>
            <p>
              개발로 <strong>사람들의 삶을 윤택하게 하는 것</strong>입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
