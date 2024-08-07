import React from "react";
import Lander from "../../components/Lander/Lander";
import MarqueList from "../../components/MarqueList/MarqueList";
import Founders from "../../components/Founder/Founders";
import ParallexComp from "../../components/ParallexComp/ParallexComp";

function Homepage() {
  return (
    <div>
      <Lander />
      <MarqueList />
      <Founders />
      <ParallexComp />
    </div>
  );
}

export default Homepage;
