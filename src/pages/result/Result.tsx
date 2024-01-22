import { useNavigate } from "react-router-dom";
import Button, { ButtonVariant } from "src/atoms/button/Button";
import Flex from "src/atoms/containers/flex/Flex";
import Image from "src/atoms/image/Image";
import SearchInput from "src/atoms/searchInput/SearchInput";
import Text from "src/atoms/text/Text";
import colorSet from "src/styles/colorSet";
import styled, { CSSProperties } from "styled-components";
import Font from "src/styles/Font";
import { RiLoader2Line } from "react-icons/ri";

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
    navigate("/result2");
  };
  return (
    <>
      <Flex flexDirection="column" alignItems="center" gap="20px">
        <BookCard width={"300px"} height={"500px"}>
          <Text
            textAlign="left"
            color={colorSet.text}
            size={"1.3rem"}
            font={Font.Bold}
          >
            <br />
            설정단계
            <br />
          </Text>
          <Text
            textAlign="center"
            color={colorSet.secondaryText}
            size={"0.8rem"}
            font={Font.Bold}
          >
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            결과 산출 중입니다
            <br />
            <br />
          </Text>
          <RiLoader2Line size="100" color="#959595" />
          <Button
            onClick={handleSubmit}
            width="220px"
            height="50px"
            variant={ButtonVariant.contained}
          >
            <Text size={"1.1rem"}>확인</Text>
          </Button>
        </BookCard>
      </Flex>
    </>
  );
};

export default QuestionCard;
