import React from "react";
import { BeatLoader, ClockLoader, RingLoader } from "react-spinners";

function LoaderButton() {
  return (
    <div className="flex items-center justify-center mr-2">
      <RingLoader 
        visible={true}
        size={20}
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#075cab"]}
      />
    </div>
  );
}

export default LoaderButton;
