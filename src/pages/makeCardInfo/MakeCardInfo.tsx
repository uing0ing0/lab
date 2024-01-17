import { useState } from "react";
import Button, { ButtonVariant } from "src/atoms/button/Button";
import UploadPic from "src/atoms/components/uploadPic/UploadPic";
import Flex from "src/atoms/containers/flex/Flex";
import Grid from "src/atoms/containers/grid/Grid";
import Image from "src/atoms/image/Image";
import SearchInput from "src/atoms/searchInput/SearchInput";
import Text from "src/atoms/text/Text";
import colorSet from "src/styles/colorSet";
const MakeCardInfo = () => {
  const [images, setImages] = useState<File[]>([]);
  return (
    <>
      <Flex flexDirection="column" alignItems="center" gap="20px">
        <Grid gridTemplateColumns="3fr 1fr ">
          <Text size="1.1rem">레전드 해결책 정보</Text>
        </Grid>
        <Grid gridTemplateColumns="1fr" gap="10px">
          <Text>해결책 페이지 추가</Text>
          <SearchInput />
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
            <SearchInput placeholder="해결책을 입력해주세요. (입력하지 않는 경우 공란이 적용됩니다." />
          </Flex>
          <Button variant={ButtonVariant.contained}>
            <Text>추가하기</Text>
          </Button>
        </Grid>
        <Flex width={"50%"} justifyContent={"center"} alignItems={"center"}>
          <UploadPic files={images} setFiles={setImages} />
        </Flex>
        <Flex wrap={"nowrap"} width={"350px"} alignItems={"center"}>
          <Grid gridTemplateColumns="1fr 6fr" gap="10px">
            <Button variant={ButtonVariant.contained}>
              <Text>1</Text>
            </Button>
            <Flex flexDirection={"column"} gap={"10px"}>
              <Grid gridTemplateColumns="3fr 3fr" gap="10px">
                <Image src="https://via.placeholder.com/150" />
                <Button variant={ButtonVariant.outlined}>
                  <Text size={"0.9rem"}>
                    수정할 이미지 파일을 드래그 드랍하거나 클릭하여
                    업로드하세요.
                  </Text>
                </Button>
              </Grid>
              <Grid gridTemplateColumns="4fr 1fr" gap="10px">
                <SearchInput
                  style={{ border: "solid 1px", borderRadius: "5px" }}
                  placeholder="수정할 해결책을 입력해주세요."
                />
                <Button
                  style={{ padding: "0px" }}
                  variant={ButtonVariant.outlined}
                >
                  <Text size={"0.9rem"}>수정</Text>
                </Button>
              </Grid>
              <Button variant={ButtonVariant.contained}>
                <Text>삭제하기</Text>
              </Button>
            </Flex>
          </Grid>
        </Flex>
        <Button variant={ButtonVariant.contained}>
          <Text>다음으로</Text>
        </Button>
      </Flex>
    </>
  );
};
export default MakeCardInfo;
