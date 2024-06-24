import React from "react";
import Header from "./Header";
import DayWise from "./DayWise";
export default function SummaryMain() {
  return (
    <div className="w-[95%] mr-[5%] shadow-xl">
      <Header></Header>
      <DayWise></DayWise>
    </div>
  );
}
