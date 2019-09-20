import React, { Component } from "react";
import { InlineGlow } from "../styled/InlineGlow";
import getCommonStyle from "../../common/getCommonStyle";
import { SkeletonProps } from "../../types/common";

export const defaultProps = {
  style: {
    width: 100,
    height: 100,
    background: "#DDDDDD",
    borderRadius: "0"
    // backgroundImage: "linear-gradient(to left, #ec008c, #fc6767)"
  },
  rounded: false
};

export default class Skeleton extends Component<SkeletonProps, {}> {
  static defaultProps = defaultProps;

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <InlineGlow>
        <div style={getCommonStyle(this.props)} />
      </InlineGlow>
    );
  }
}
