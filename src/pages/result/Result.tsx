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
  const containerStyle = {
    flex: 1, // 페이지 내용이 컨테이너를 채우도록 함
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingTop: "90px", // 위쪽 패딩 설정
    paddingBottom: "150px", // 아래쪽 패딩 설정
  };

  return (
    <>
      {" "}
      <div style={containerStyle}>
        <Text
          textAlign="left"
          color={colorSet.text}
          size={"1.4rem"}
          font={Font.Bold}
        >
          음악감상
          <br />
          <br />
        </Text>
        <Flex flexDirection="column" alignItems="center" gap="20px">
          <Image
            src={"https://cdn-icons-png.flaticon.com/512/3771/3771046.png"}
            width={100}
          />
          <Text
            textAlign="center"
            color={colorSet.text}
            size={"1.1rem"}
            font={Font.Bold}
          >
            <br />
            노래 이름
          </Text>
          <Text
            textAlign="center"
            color={colorSet.secondaryText}
            size={"0.9rem"}
          >
            작곡가
            <br />
            <br />
          </Text>
          <audio ref={audioRef} src="musics\result\case1.mp3" />
          <progress
            value={currentTime}
            max={duration}
            style={{
              width: "90%",
              height: "2.5px",
              border: "none",
              borderRadius: "5px",
            }}
          ></progress>
          <style>
            {`
          progress {
            -webkit-appearance: none;
          }
          progress::-webkit-progress-bar {
            background-color:#E0E0E0;
            border-radius: 5px; 
          }

          progress::-webkit-progress-value {
            background-color: ${colorSet.primary};
            border-radius: 5px; 
          }
        `}
          </style>
          <Flex gap="170px">
            <span style={{ fontSize: "0.8rem", color: colorSet.secondaryText }}>
              {formatTime(currentTime)}
            </span>
            <span style={{ fontSize: "0.8rem", color: colorSet.secondaryText }}>
              {formatTime(duration)}
            </span>
          </Flex>
          <Flex gap="10px">
            <button
              style={{ width: "50px", height: "50px", border: "none" }}
              onClick={() => handleSeek(false)}
            >
              <IoPlayBack />
            </button>
            <button
              style={{ width: "50px", height: "50px", border: "none" }}
              onClick={togglePlayPause}
            >
              {isPlaying ? <CiPause1 /> : <CiPlay1 />}
            </button>
            <button
              style={{ width: "50px", height: "50px", border: "none" }}
              onClick={() => handleSeek(true)}
            >
              <IoPlayForward />
            </button>
          </Flex>

          <Button
            onClick={handleSubmit}
            width="220px"
            height="50px"
            variant={ButtonVariant.contained}
          >
            <Text size={"1.3rem"}>다시하기</Text>
          </Button>
        </Flex>
      </div>
    </>
  );
};

export default QuestionCard;
