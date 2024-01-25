import React, { useEffect, useRef, useState } from "react";
import { CiPlay1 } from "react-icons/ci";
import { CiPause1 } from "react-icons/ci";
import { IoPlayBack } from "react-icons/io5";
import { IoPlayForward } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Button, { ButtonVariant } from "src/atoms/button/Button";
import Flex from "src/atoms/containers/flex/Flex";
import Image from "src/atoms/image/Image";
import SearchInput from "src/atoms/searchInput/SearchInput";
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
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
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
  const handleSeek = (forward: boolean) => {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime;
      const newTime = forward ? currentTime + 5 : currentTime - 5;
      audioRef.current.currentTime = Math.max(0, newTime);
    }
  };

  const handleSubmit = () => {
    console.log("Submit");
    navigate("/q1");
  };

  useEffect(() => {
    console.log("useEffect");
    const audioElement = audioRef.current;

    if (audioElement) {
      const handleTimeUpdate = () => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
          setDuration(audioRef.current.duration);
        }
      };

      audioElement.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [audioRef]); // 이케 수정합니다.

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0",
    )}`;
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
          </Text>
          <Text
            textAlign="center"
            color={colorSet.secondaryText}
            size={"0.8rem"}
            font={Font.Bold}
          >
            <br />
            작곡가?
            <br />
            <br />
          </Text>
          <audio ref={audioRef} src="musics\result\case1.mp3" />
          <progress
            value={currentTime}
            max={duration}
            style={{ width: "100%" }}
          ></progress>
          <div
            style={{
              color: "black",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>

          <button
            style={{ width: "100px", height: "55px", border: "none" }}
            onClick={() => handleSeek(false)}
          >
            <IoPlayBack />
          </button>
          <button
            style={{ width: "100px", height: "55px", border: "none" }}
            onClick={togglePlayPause}
          >
            {isPlaying ? <CiPause1 /> : <CiPlay1 />}
          </button>
          <button
            style={{ width: "100px", height: "55px", border: "none" }}
            onClick={() => handleSeek(true)}
          >
            <IoPlayForward />
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
