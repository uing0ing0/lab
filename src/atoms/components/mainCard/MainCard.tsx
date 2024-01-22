import Image from "src/atoms/image/Image";
import styled, { CSSProperties } from "styled-components";
interface PanelProps {
  color?: CSSProperties["backgroundColor"];
}
import { useNavigate } from "react-router-dom";
import Button, { ButtonVariant } from "src/atoms/button/Button";
import Flex from "src/atoms/containers/flex/Flex";
import Grid from "src/atoms/containers/grid/Grid";
import Text from "src/atoms/text/Text";
import colorSet from "src/styles/colorSet";
const MainCard = styled.div<PanelProps>`
  background-color: ${({ color }) => color};
  border-radius: 16px;
  padding: 16px;

  border: 3px solid #fff;
  box-shadow: ${({ color }) =>
    color
      ? "2px 4px 4px 0px rgba(0, 0, 0, 0.15)"
      : "2px 4px 8px 0px rgba(0, 0, 0, 0.1)"};
  color: white;
`;

const MainCardPic = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/questioncard");
    console.log("click");
  };
  return (
    <MainCard
      color={"#fff"}
      style={{ width: "400px", height: "100px" }}
      onClick={handleClick}
    >
      <Grid
        style={{ flexDirection: "column" }}
        gridTemplateColumns={"1fr 2fr"}
        gap={"10px"}
        justifyContent={"center"}
        placeItems={"stretch"}
        alignItems={"stretch"}
      >
        <Flex>
          <Image src={"https://picsum.photos/100/100"} />
        </Flex>
        <Flex>
          <Text color={colorSet.text} size={"1.1rem"}>
            명탐정 코난이 알려주는 해결책
          </Text>
          <Text color={colorSet.text} size={"0.9rem"}>
            쉽덕의 심금을 울리는 명언 모아놨다
          </Text>
          <Button
            width={"100px"}
            height={"35px"}
            variant={ButtonVariant.outlined}
          >
            <Text size={"0.9rem"}>공유하기</Text>
          </Button>
        </Flex>
      </Grid>
    </MainCard>
  );
};
export default MainCardPic;
