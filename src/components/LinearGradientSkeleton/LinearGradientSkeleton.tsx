import React, { Component } from "react";
import { InlineGlow } from "../styled/InlineGlow";
import getCommonStyle from "../../common/getCommonStyle";
import getGradientColors, {
  GradientType
} from "../../common/getGradientColors";
import { SkeletonProps } from "../../types/common";

interface LinearGradientSkeletonProps extends SkeletonProps {
  gradientType?: GradientType;
  gradientColors?: string[];
  style?: React.CSSProperties;
}

export default class LinearGradientSkeleton extends Component<
  LinearGradientSkeletonProps,
  {}
> {
  constructor(props: LinearGradientSkeletonProps) {
    super(props);
  }

  static defaultProps = {
    rounded: false,
    gradientType: "dimigo",
    style: {}
  };

  shouldComponentUpdate() {
    return false;
  }

  getLinearStyle = (): React.CSSProperties => {
    const commonStyle = getCommonStyle(this.props);
    let linearStyleObject: React.CSSProperties = {
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
        <div style={this.getLinearStyle()}> {this.props.children} </div>
      </InlineGlow>
    );
  }
}
