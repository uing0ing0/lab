import { useNavigate } from "react-router-dom";
import Button, { ButtonVariant } from "src/atoms/button/Button";
import Flex from "src/atoms/containers/flex/Flex";
import Image from "src/atoms/image/Image";
//import SearchInput from "src/atoms/searchInput/SearchInput";
import Text from "src/atoms/text/Text";
import colorSet from "src/styles/colorSet";
import Font from "src/styles/Font";
import styled, { CSSProperties } from "styled-components";

interface PanelProps {
  color?: CSSProperties["backgroundColor"];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
}
const BookCard = styled.div<PanelProps>`
  position: relative;
  background-color: ${({ color }) => color};
  border-radius: 16px;
  padding: 0px;
  border: 3px solid #fff;
  box-shadow: ${({ color }) =>
    color
      ? "2px 4px 4px 0px rgba(0, 0, 0, 0.15)"
      : "2px 4px 8px 0px rgba(0, 0, 0, 0.1)"};
  color: white;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: 20px;
  align-items: center;
  justify-content: center;
  padding: 30px;
  gap: 30px;
`;

const QuestionCard = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log("Submit");
    navigate("/p3");
  };
  const containerStyle1 = {
    flex: 1, // 페이지 내용이 컨테이너를 채우도록 함
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingTop: "100px", // 위쪽 패딩 설정
    paddingBottom: "0px", // 아래쪽 패딩 설정
  };
  const containerStyle2 = {
    flex: 1, // 페이지 내용이 컨테이너를 채우도록 함
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingTop: "0px", // 위쪽 패딩 설정
    paddingBottom: "150px", // 아래쪽 패딩 설정
  };

  return (
    <>
      <div style={containerStyle1}>
        <Text
          textAlign="left"
          color={colorSet.text}
          size={"1.4rem"}
          font={Font.Bold}
        >
          준비단계
          <br />
          <br />
          <br />
          <br />
        </Text>
      </div>
      <Image maxWidth="100%" src={"images/11.png"} />
      <div style={containerStyle2}>
        <Flex flexDirection="column" alignItems="center" gap="20px">
          <Text color={colorSet.secondaryText} size={"0.9rem"}>
            <br />
            블루투스와 연결 되었나요?
          </Text>

          <Button
            onClick={handleSubmit}
            width="220px"
            height="50px"
            variant={ButtonVariant.contained}
            justify-content="center"
          >
            <Text size={"1.1rem"}>확인</Text>
          </Button>
        </Flex>
      </div>
    </>
  );
};

export default QuestionCard;
