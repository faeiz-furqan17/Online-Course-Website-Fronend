import React from "react";
import Lander from "../../components/Lander/Lander";
import MarqueList from "../../components/MarqueList/MarqueList";
import Founders from "../../components/Founder/Founders";
import ParallexComp from "../../components/ParallexComp/ParallexComp";
import Reviews from "../../components/Reviews/Reviews";

function Homepage() {
  return (
    <div>
      <Lander />
      <MarqueList />
      <Founders />
      <ParallexComp />
      <Reviews />
    </div>
  );
}

export default Homepage;
