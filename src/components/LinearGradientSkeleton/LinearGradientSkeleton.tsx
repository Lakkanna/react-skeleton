import React, { Component } from "react";
import { InlineGlow } from "../styled/InlineGlow";
import getCommonStyle from "../../common/getCommonStyle";
import getGradientColors, {
  GradientType
} from "../../common/getGradientColors";
import { Style, SkeletonProps } from "../../types/common";
import { defaultProps } from "../Skeleton/Skeleton";

interface LinearGradientSkeletonProps extends SkeletonProps {
  gradientType?: GradientType;
  gradientColors?: string[];
}

interface LinearGradientStyle extends Style {
  backgroundImage: string;
}

export const linearGradientDefaultProps = {
  ...defaultProps,
  gradientType: "dimigo"
};

export default class LinearGradientSkeleton extends Component<
  LinearGradientSkeletonProps,
  {}
> {
  constructor(props: LinearGradientSkeletonProps) {
    super(props);
  }
  static defaultProps = { ...linearGradientDefaultProps };

  shouldComponentUpdate() {
    return false;
  }

  getLinearStyle = (): LinearGradientStyle => {
    const commonStyle = getCommonStyle(this.props);
    let linearStyleObject: LinearGradientStyle = {
      ...commonStyle,
      backgroundImage: ""
    };

    const { gradientType, gradientColors } = this.props;

    if (gradientType) {
      const [firstColor, secondColor] = getGradientColors(gradientType);
      linearStyleObject.backgroundImage = `linear-gradient(to left, ${firstColor}, ${secondColor})`;
    }

    if (gradientColors && gradientColors.length > 1) {
      const colors = gradientColors.join(", ");
      linearStyleObject.backgroundImage = `linear-gradient(to left, ${colors})`;
    }

    return linearStyleObject;
  };

  render() {
    return (
      <InlineGlow>
        <div style={this.getLinearStyle()} />
      </InlineGlow>
    );
  }
}
