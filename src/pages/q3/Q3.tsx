import React, { useRef, useState } from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegCirclePause } from "react-icons/fa6";
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
  const location = useLocation();
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
    navigate("/q4");
  };
  const handleX = () => {
    console.log("Submit", location.pathname);
    navigate("/result3");
  };
  const containerStyle = {
    flex: 1, // 페이지 내용이 컨테이너를 채우도록 함
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingTop: "100px", // 위쪽 패딩 설정
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
          설정단계
          <br />
          Step 3
        </Text>
        <Text textAlign="left" color={colorSet.secondaryText} size={"1.0rem"}>
          <br />
          소리를 듣고 들리면 O 안들리면 X <br />
          버튼을 눌러주세요.
          <br />
          <br />
        </Text>
        <Flex flexDirection="column" alignItems="center" gap="20px">
          <Text color={colorSet.text} size={"2.0rem"} font={Font.Bold}>
            <br />
          </Text>

          <audio ref={audioRef} src="musics\test\250Hz.mp3" />
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
          <div style={{ position: "fixed", bottom: "120px" }}>
            <Flex gap="20px" justifyContent="center">
              <Button
                onClick={handleSubmit}
                width="135px"
                height="50px"
                variant={ButtonVariant.o}
              >
                <Text color={colorSet.colorless} size={"1.0rem"}>
                  O
                </Text>
              </Button>
              <Button
                onClick={handleX}
                width="135px"
                height="50px"
                variant={ButtonVariant.x}
              >
                <Text size={"1.0rem"}>X</Text>
              </Button>
            </Flex>
          </div>
        </Flex>
      </div>
    </>
  );
};

export default QuestionCard;
