import React, { useState } from "react";

const CountSLSP = () => {
  const [dem, setCount] = useState(0);
  const tang = () => {
    setCount(dem + 1);
  };
  const giam = () => {
    if (dem > 0) {
      setCount(dem - 1);
    }
  };
  return { dem, tang, giam };
};

export default CountSLSP;
