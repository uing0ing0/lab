import Button from "src/atoms/button/Button";
import Flex from "src/atoms/containers/flex/Flex";
import Icons from "src/atoms/icon/Icons";
import colorSet from "src/styles/colorSet";

interface ImagePreviewItemProps {
  src: string;
  onDelete: () => void;
}

const ImagePreviewItem = ({ src, onDelete }: ImagePreviewItemProps) => {
  return (
    <Flex
      style={{
        position: "relative",
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <img
        src={src}
        alt={"image"}
        style={{
          width: "100%",
          height: "100%",
        }}
      />

      <Button
        onClick={(e) => {
          e.stopPropagation();
          onDelete();
        }}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: colorSet.primary,
          padding: "5px",
          borderRadius: "4px",
        }}
      >
        <Icons.X />
      </Button>
    </Flex>
  );
};

export default ImagePreviewItem;
