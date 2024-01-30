import { useNavigate } from "react-router-dom";
import Button, { ButtonVariant } from "src/atoms/button/Button";
import Flex from "src/atoms/containers/flex/Flex";
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

const QuestionCard = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log("Submit");
    navigate("/p2");
  };
  const containerStyle = {
    flex: 1, // 페이지 내용이 컨테이너를 채우도록 함
    paddingleft: "20px",
    paddingright: "20px",
    paddingTop: "100px", // 위쪽 패딩 설정
    paddingBottom: "150px", // 아래쪽 패딩 설정
  };

  return (
    <>
      <div style={containerStyle}>
        <Flex flexDirection="column" alignItems="center" gap="20px">
          <Text color={colorSet.primary} size={"3.0rem"} font={Font.Bold}>
            <br />
            <br />
            OralFlow
            <br />
            Sound
            <br />
            <br />
            <br />
          </Text>
          <Button
            onClick={handleSubmit}
            width="220px"
            height="50px"
            variant={ButtonVariant.contained}
            justify-content="center"
          >
            <Text size={"1.3rem"}>Start</Text>
          </Button>
        </Flex>
      </div>
    </>
  );
};

export default QuestionCard;
