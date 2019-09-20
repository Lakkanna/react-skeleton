import React, { Component, Fragment } from "react";

class Skeleton extends Component<{}, {}> {
  constructor(props: any) {
    super(props);
    console.log("Skeleton constructor");
  }
  render(): JSX.Element {
    console.log("Skeleton render");
    return (
      <React.Fragment>
        <div> Skeleton </div>
      </React.Fragment>
    );
  }
}

export default Skeleton;
