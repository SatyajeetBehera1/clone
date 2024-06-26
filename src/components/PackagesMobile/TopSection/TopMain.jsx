import React from "react";
import Image from "./TopImages";
import Delightful from "./Delightful";
import Modify from "./Modify";
import GrandOffer from "./GrandOffer";

export default function TopMain(props) {
  return (
    <div>
      <Image {...props} />
      <Delightful {...props} />
      <Modify {...props} />
      <GrandOffer {...props} />
    </div>
  );
}
