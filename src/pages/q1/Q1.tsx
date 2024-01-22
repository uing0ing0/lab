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
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegCirclePause } from "react-icons/fa6";

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
    console.log("플레이/일시정지 전환");
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
    navigate("/q2");
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
            Step 1
          </Text>
          <Text
            textAlign="left"
            color={colorSet.secondaryText}
            size={"0.8rem"}
            font={Font.Bold}
          >
            <br />
            소리를 듣고 들리면 O 안들리면 X 버튼을 눌러주세요.
            <br />
            <br />
          </Text>

          <Text color={colorSet.text} size={"2.0rem"} font={Font.Bold}>
            <br />
          </Text>

          <audio ref={audioRef} src="D:\soundweb\soundweb\public\1.mp3" />
          <button
            style={{
              color: "#ffffff",
              width: "150px",
              height: "150px",
              border: "none",
            }}
            onClick={togglePlayPause}
          >
            {isPlaying ? (
              <FaRegCirclePause size="100" color="#959595" />
            ) : (
              <FaRegCirclePlay size="100" color="#959595" />
            )}
          </button>
          <Flex gap="20px">
            <Button
              onClick={handleSubmit}
              width="130px"
              height="50px"
              variant={ButtonVariant.o}
            >
              <Text color={colorSet.colorless} size={"1.0rem"}>
                O
              </Text>
            </Button>
            <Button
              onClick={handleSubmit}
              width="130px"
              height="50px"
              variant={ButtonVariant.x}
            >
              <Text size={"1.0rem"}>X</Text>
            </Button>
          </Flex>
        </BookCard>
      </Flex>
    </>
  );
};

export default QuestionCard;
