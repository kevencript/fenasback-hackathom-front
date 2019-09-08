import React, { Component } from "react";
import FirstSection from "./sections/firstSection";
import SecondSection from "./sections/secondSection";
import ThirdSection from "./sections/thirdSection";

export default class HomePage extends Component {
  render() {
    return (
      <div style={{ paddingBottom: '50px' }}>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
      </div>
    );
  }
}
