import { getMaxSize } from "./utils";
import { SkeletonProps } from "../types/common";

const getCommonStyle = ({
  rounded,
  style,
  color
}: SkeletonProps): React.CSSProperties => {
  const defaultStyle = {
    width: 100,
    height: 100
  };

  let background = "#DDDDDD";
  if (color) {
    background = color;
  }

  let newStyleObject = { ...defaultStyle, ...style, background };
  if (rounded === true) {
    // @ts-ignore
    const maxSize = getMaxSize(style.width, style.height); // TODO make this should accept string or number
    newStyleObject.width = maxSize;
    newStyleObject.height = maxSize;
    newStyleObject.borderRadius = "100%";
  }
  return newStyleObject;
};

export default getCommonStyle;
