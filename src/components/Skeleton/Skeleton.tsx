import React, { Component } from "react";
import { InlineGlow } from "../styled/InlineGlow";
import getCommonStyle from "../../common/getCommonStyle";
import { SkeletonProps } from "../../types/common";

export default class Skeleton extends Component<SkeletonProps, {}> {
  static defaultProps = {
    rounded: false,
    style: {}
  };

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <InlineGlow>
        <div style={getCommonStyle(this.props)}> {this.props.children} </div>
      </InlineGlow>
    );
  }
}
