import { getMaxSize } from "./utils";
import { Style, SkeletonProps } from "../types/common";

// TODO replace any with actual type of style attributes
const getCommonStyle = ({ rounded, style }: SkeletonProps): Style => {
  let newStyleObject = style;
  if (rounded) {
    const maxSize = getMaxSize(style.width, style.height);
    newStyleObject.width = maxSize;
    newStyleObject.height = maxSize;
    newStyleObject.borderRadius = "100%";
  }
  return newStyleObject;
};

export default getCommonStyle;
