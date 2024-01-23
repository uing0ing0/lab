import { useNavigate } from "react-router-dom";
import Button, { ButtonVariant } from "src/atoms/button/Button";
import Flex from "src/atoms/containers/flex/Flex";
import SearchInput from "src/atoms/searchInput/SearchInput";
import Text from "src/atoms/text/Text";
import colorSet from "src/styles/colorSet";
import styled, { CSSProperties } from "styled-components";
import React, { useRef, useState } from "react";
import Font from "src/styles/Font";
import Image from "src/atoms/image/Image";
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";

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
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSubmit = () => {
    console.log("Submit");
    navigate("/q1");
  };

  const storage = globalThis?.sessionStorage;
  const prevPath = storage?.getItem("prevPath");
  //const prevPath: string | null = storage?.getItem("prevPath");

  let audioSrc;
  console.log("refererPage:", document.referrer);

  if (prevPath !== null) {
    if (prevPath.includes("/q1")) {
      audioSrc = "/q1/1.mp3";
    } else if (prevPath.includes("/q2")) {
      audioSrc = "/q2/2.mp3";
    } else if (prevPath.includes("/q3")) {
      audioSrc = "/q3/3.mp3";
    } else if (prevPath.includes("/q4")) {
      audioSrc = "/q4/4.mp3";
    } else if (prevPath.includes("/q5")) {
      audioSrc = "/q5/5.mp3";
    } else if (prevPath.includes("/q6")) {
      audioSrc = "/q6/6.mp3";
    } else {
      audioSrc = "/q7/7.mp3";
    }
    console.log("refererPage:", prevPath);
    console.log("audioSrc:", audioSrc);
  }

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
            음악감상
            <br />
            <br />
            <br />
          </Text>
          <Image
            src={"https://cdn-icons-png.flaticon.com/512/3771/3771046.png"}
            width={100}
          />
          <Text
            textAlign="center"
            color={colorSet.text}
            size={"1.0rem"}
            font={Font.Bold}
          >
            <br />
            노래 이름
            <br />
            <br />
          </Text>
          <audio ref={audioRef} src={audioSrc} />
          <button
            style={{ width: "100px", height: "55px", border: "none" }}
            onClick={togglePlayPause}
          >
            {isPlaying ? <CiPause1 /> : <CiPlay1 />}
          </button>
          <Button
            onClick={handleSubmit}
            width="220px"
            height="50px"
            variant={ButtonVariant.contained}
          >
            <Text size={"1.3rem"}>다시하기</Text>
          </Button>
        </BookCard>
      </Flex>
    </>
  );
};

export default QuestionCard;
