import { useNavigate } from "react-router-dom";
import Button, { ButtonVariant } from "src/atoms/button/Button";
import Flex from "src/atoms/containers/flex/Flex";
import Grid from "src/atoms/containers/grid/Grid";
import Image from "src/atoms/image/Image";
import SearchInput from "src/atoms/searchInput/SearchInput";
import Text from "src/atoms/text/Text";
import colorSet from "src/styles/colorSet";
import styled, { CSSProperties } from "styled-components";
interface PanelProps {
  color?: CSSProperties["backgroundColor"];
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
}
const BookCard = styled.div<PanelProps>`
  background-color: ${({ color }) => color};
  border-radius: 16px;
  padding: 16px;

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
  padding: 25px;
  gap: 30px;
`;

const ResultCard = () => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log("Submit");
    navigate("/resultcard");
  };
  return (
    <>
      <Flex flexDirection="column" alignItems="center" gap="20px">
        <BookCard width={"300px"} height={"400px"}>
          <Image src={"https://picsum.photos/200/350"} />
          <Text color={colorSet.secondaryText} size={"1.2rem"}>
            네 운명에서 도망치지 마
          </Text>
        </BookCard>
        <Button>
          <Text size={"1.1rem"}>친구에게 답변 공유하기</Text>
        </Button>
        <Grid
          alignItems={"stretch"}
          justifyContent={"stretch"}
          gap={"10px"}
          gridTemplateColumns="repeat(4, 1fr)"
        >
          <Button variant={ButtonVariant.outlined}>복사</Button>
          <Button variant={ButtonVariant.outlined}>틔터</Button>
          <Button variant={ButtonVariant.outlined}>페북</Button>
          <Button variant={ButtonVariant.outlined}>카톡</Button>
        </Grid>
        <Button width="350px" variant={ButtonVariant.contained3}>
          <Text size={"0.9rem"}>또 질문하기</Text>
        </Button>
        <Button width="350px" variant={ButtonVariant.contained3}>
          <Text size={"0.9rem"}>해결책의 모든 답변보기</Text>
        </Button>
        <Button width="350px" variant={ButtonVariant.contained2}>
          <Text size={"0.9rem"}>다른 해결책에 질문하러 가기</Text>
        </Button>
      </Flex>
    </>
  );
};

export default ResultCard;
