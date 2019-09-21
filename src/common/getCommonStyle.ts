import { getMaxSize } from "./utils";
import { Style, SkeletonProps } from "../types/common";

// TODO replace style with actual type of style attributes
const getCommonStyle = ({ rounded, style }: SkeletonProps): Style => {
  const defaultStyle = {
    width: 100,
    height: 100,
    background: "#DDDDDD"
  };

  let newStyleObject = { ...defaultStyle, ...style };
  if (rounded === true) {
    const maxSize = getMaxSize(style.width, style.height);
    newStyleObject.width = maxSize;
    newStyleObject.height = maxSize;
    newStyleObject.borderRadius = "100%";
  }
  return newStyleObject;
};

export default getCommonStyle;
