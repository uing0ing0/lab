import React from "react";
import colorSet from "src/styles/colorSet";
import { CSSProperties } from "styled-components";

interface IconsProps {
  size?: CSSProperties["width"];
  color?: CSSProperties["color"];
  style?: CSSProperties;
}

const Icons = () => {
  return <></>;
};

const ExpandDown = ({ size = 30, color = "white", style }: IconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 110 30"
      fill="none"
      style={style}
    >
      <line
        y1="-2.5"
        x2="59.4854"
        y2="-2.5"
        transform="matrix(0.907786 0.419434 -0.529515 0.848301 0 4.44141)"
        stroke={color}
        strokeWidth="5"
      />
      <line
        y1="-2.5"
        x2="61.3067"
        y2="-2.5"
        transform="matrix(-0.91344 0.406973 -0.515701 -0.856769 107 0)"
        stroke={color}
        strokeWidth="5"
      />
    </svg>
  );
};

const Search = ({ size, color }: IconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size ?? "24px"}
      height={size ?? "24px"}
      fill={color ?? colorSet.colorless}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    </svg>
  );
};

const Logo = ({ size }: IconsProps) => {
  return (
    <svg
      viewBox="0 0 299.5 299.5"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="https://boxy-svg.com"
      width={size ?? "24px"}
      height={size ?? "24px"}
    >
      <defs>
        <rect
          x="100.5"
          width="100"
          height="100"
          fill="rgb(207, 209, 211)"
          y="200"
        />
        <mask x="81.813" y="149.453" />
        <mask x="-30.317740424551005" y="193.55089479947543" />
        <mask x="33.734052139452885" y="165.49901484443726" />
      </defs>
      <rect x="-0.039" width="100" height="100" fill="rgb(60, 90, 168)" />
      <rect x="99.5" width="100" height="100" fill="rgb(60, 90, 168)" y="0" />
      <rect x="0" width="100" height="100" fill="rgb(60, 90, 168)" y="99.5" />
      <rect
        x="200"
        width="100"
        height="100"
        fill="rgb(207, 209, 211)"
        y="100"
      />
      <rect
        x="200"
        width="100"
        height="100"
        fill="rgb(207, 209, 211)"
        y="199.5"
      />
      <rect
        x="100"
        width="100"
        height="100"
        fill="rgb(207, 209, 211)"
        y="199.5"
      />
    </svg>
  );
};
const X = ({ size = 24, color = "white", style }: IconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      width={size}
      fill={color}
      style={style}
    >
      <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
    </svg>
  );
};

const ArrowBackward = ({ size = 24, color = "white", style }: IconsProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      width={size}
      fill={color}
      style={style}
      transform={"rotate(180)"}
    >
      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
    </svg>
  );
};

const ArrowForward = ({ size = 24, color = "white", style }: IconsProps) => {
  return (
    <svg viewBox="0 -960 960 960" width={size} fill={color} style={style}>
      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
    </svg>
  );
};

const ShadowedArrowForward = ({
  size = 24,
  color = "white",
  style,
}: IconsProps) => {
  return (
    <svg
      width={size}
      viewBox="0 0 32 65"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <g filter="url(#filter0_i_108_50)">
        <rect
          y="61"
          width="42.437"
          height="5.53724"
          rx="2.76862"
          transform="rotate(-50 0 61)"
        />
      </g>
      <g filter="url(#filter1_i_108_50)">
        <rect
          x="4.30176"
          width="42.4317"
          height="5.61558"
          rx="2.80779"
          transform="rotate(50 4.30176 0)"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_108_50"
          x="1.13184"
          y="29.623"
          width="29.2559"
          height="35.8042"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_108_50"
          />
        </filter>
        <filter
          id="filter1_i_108_50"
          x="1.14746"
          y="1.14795"
          width="29.2812"
          height="35.8184"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_108_50"
          />
        </filter>
      </defs>
    </svg>
  );
};
const Help = ({ size = 24, color = "white", style }: IconsProps) => {
  return (
    <svg viewBox="0 -960 960 960" width={size} fill={color} style={style}>
      <path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
    </svg>
  );
};

const Edit = ({ size = 24, color = "white", style }: IconsProps) => {
  return (
    <svg viewBox="0 -960 960 960" width={size} fill={color} style={style}>
      <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
    </svg>
  );
};

const RotateLeft = ({ size = 24, color = "white", style }: IconsProps) => {
  return (
    <svg viewBox="0 -960 960 960" width={size} fill={color} style={style}>
      <path d="M440-80q-50-5-96-24.5T256-156l56-58q29 21 61.5 34t66.5 18v82Zm80 0v-82q104-15 172-93.5T760-438q0-117-81.5-198.5T480-718h-8l64 64-56 56-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-438q0 137-91 238.5T520-80ZM198-214q-32-42-51.5-88T122-398h82q5 34 18 66.5t34 61.5l-58 56Zm-76-264q6-51 25-98t51-86l58 56q-21 29-34 61.5T204-478h-82Z" />
    </svg>
  );
};

const RotateRight = ({ size = 24, color = "white", style }: IconsProps) => {
  return (
    <svg viewBox="0 -960 960 960" width={size} fill={color} style={style}>
      <path d="M522-80v-82q34-5 66.5-18t61.5-34l56 58q-42 32-88 51.5T522-80Zm-80 0Q304-98 213-199.5T122-438q0-75 28.5-140.5t77-114q48.5-48.5 114-77T482-798h6l-62-62 56-58 160 160-160 160-56-56 64-64h-8q-117 0-198.5 81.5T202-438q0 104 68 182.5T442-162v82Zm322-134-58-56q21-29 34-61.5t18-66.5h82q-5 50-24.5 96T764-214Zm76-264h-82q-5-34-18-66.5T706-606l58-56q32 39 51 86t25 98Z" />
    </svg>
  );
};

const FlipHorizontal = ({ size = 24, color = "white", style }: IconsProps) => {
  return (
    <svg viewBox="0 -960 960 960" width={size} fill={color} style={style}>
      <path d="M360-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h160v80H200v560h160v80Zm80 80v-880h80v880h-80Zm160-80v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80q0 33-23.5 56.5T760-120Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80q33 0 56.5 23.5T840-760h-80Z" />
    </svg>
  );
};

const FlipVertical = ({ size = 24, color = "white", style }: IconsProps) => {
  return (
    <svg
      viewBox="0 -960 960 960"
      width={size}
      fill={color}
      style={style}
      transform={"rotate(90)"}
    >
      <path d="M360-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h160v80H200v560h160v80Zm80 80v-880h80v880h-80Zm160-80v-80h80v80h-80Zm0-640v-80h80v80h-80Zm160 640v-80h80q0 33-23.5 56.5T760-120Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80h80v80h-80Zm0-160v-80q33 0 56.5 23.5T840-760h-80Z" />
    </svg>
  );
};

const ArrowLeft = ({ size = 24, color = "white", style }: IconsProps) => {
  return (
    <svg
      viewBox="0 -960 960 960"
      width={size}
      fill={color}
      style={style}
      transform={"rotate(180)"}
    >
      <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
    </svg>
  );
};

const ArrowRight = ({ size = 24, color = "white", style }: IconsProps) => {
  return (
    <svg viewBox="0 -960 960 960" width={size} fill={color} style={style}>
      <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
    </svg>
  );
};

const ArrowUp = ({ size = 24, color = "white", style }: IconsProps) => {
  return (
    <svg
      viewBox="0 -960 960 960"
      width={size}
      fill={color}
      style={style}
      transform={"rotate(270)"}
    >
      <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
    </svg>
  );
};

const ArrowDown = ({ size = 24, color = "white", style }: IconsProps) => {
  return (
    <svg
      viewBox="0 -960 960 960"
      width={size}
      fill={color}
      style={style}
      transform={"rotate(90)"}
    >
      <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
    </svg>
  );
};

const Timer = ({ size = 24, color = "white", style }: IconsProps) => {
  return (
    <svg viewBox="0 -960 960 960" width={size} fill={color} style={style}>
      <path d="M360-840v-80h240v80H360Zm80 440h80v-240h-80v240Zm40 320q-74 0-139.5-28.5T226-186q-49-49-77.5-114.5T120-440q0-74 28.5-139.5T226-694q49-49 114.5-77.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q38 50 58 107t20 119q0 74-28.5 139.5T734-186q-49 49-114.5 77.5T480-80Zm0-80q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-280Z" />
    </svg>
  );
};

const Click = ({ size = 24, color = "white", style }: IconsProps) => {
  return (
    <svg viewBox="0 -960 960 960" width={size} fill={color} style={style}>
      <path d="M80-480v-80h120v80H80Zm136 222-56-58 84-84 58 56-86 86Zm28-382-84-84 56-58 86 86-58 56Zm476 480L530-350l-50 150-120-400 400 120-148 52 188 188-80 80ZM400-720v-120h80v120h-80Zm236 80-58-56 86-86 56 56-84 86Z" />
    </svg>
  );
};

const Replay = ({ size = 24, color = "white", style }: IconsProps) => {
  return (
    <svg viewBox="0 -960 960 960" width={size} fill={color} style={style}>
      <path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Z" />
    </svg>
  );
};

Icons.Logo = Logo;
Icons.Search = Search;
Icons.Logo = Logo;
Icons.ExpandDown = ExpandDown;
Icons.Search = Search;
Icons.ExpandDown = ExpandDown;
Icons.X = X;
Icons.ArrowBackward = ArrowBackward;
Icons.ArrowForward = ArrowForward;
Icons.ShadowedArrowForward = ShadowedArrowForward;
Icons.Help = Help;
Icons.Edit = Edit;
Icons.RotateLeft = RotateLeft;
Icons.RotateRight = RotateRight;
Icons.FlipHorizontal = FlipHorizontal;
Icons.FlipVertical = FlipVertical;
Icons.ArrowLeft = ArrowLeft;
Icons.ArrowRight = ArrowRight;
Icons.ArrowUp = ArrowUp;
Icons.ArrowDown = ArrowDown;
Icons.Timer = Timer;
Icons.Click = Click;
Icons.Replay = Replay;

export default Icons;
