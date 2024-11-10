import { useState } from "react";

const CountSLSP = () => {
  const [dem, setCount] = useState(1);
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
