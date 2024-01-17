import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button, { ButtonVariant } from "src/atoms/button/Button";
import UploadPic from "src/atoms/components/uploadPic/UploadPic";
import Flex from "src/atoms/containers/flex/Flex";
import Grid from "src/atoms/containers/grid/Grid";
import SearchInput from "src/atoms/searchInput/SearchInput";
import Text from "src/atoms/text/Text";
import colorSet from "src/styles/colorSet";
const MakeCard = () => {
  const navigate = useNavigate();
  const [images, setImages] = useState<File[]>([]);
  const handleNext = () => {
    navigate("/makecardinfo");
  };
  return (
    <>
      <Flex flexDirection="column" alignItems="center" gap="20px">
        <Grid gridTemplateColumns="3fr 1fr ">
          <Text size="1.1rem">레전드 해결책 정보</Text>
        </Grid>
        <Grid gridTemplateColumns="1fr 3fr" gap="10px">
          <Text>책 이름</Text>
          <Flex
            wrap={"nowrap"}
            width={"320px"}
            height={"40px"}
            alignItems={"center"}
            style={{
              border: `2px solid ${colorSet.secondaryText}`,
              padding: "0.1rem 1rem",
              borderRadius: "1rem",
            }}
          >
            <SearchInput placeholder="당신의 질문은?" />
          </Flex>
          <Text>책 설명</Text>
          <Flex
            wrap={"nowrap"}
            width={"320px"}
            height={"40px"}
            alignItems={"center"}
            style={{
              border: `2px solid ${colorSet.secondaryText}`,
              padding: "0.1rem 1rem",
              borderRadius: "1rem",
            }}
          >
            <SearchInput placeholder="당신의 질문은?" />
          </Flex>
        </Grid>
        <SearchInput />
        <Flex width={"50%"} justifyContent={"center"} alignItems={"center"}>
          <UploadPic files={images} setFiles={setImages} />
        </Flex>
        <Button variant={ButtonVariant.contained} onClick={handleNext}>
          <Text>다음으로</Text>
        </Button>
      </Flex>
    </>
  );
};
export default MakeCard;
