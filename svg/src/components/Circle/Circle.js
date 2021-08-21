import { useRef, useEffect, useState } from "react";
import style from "./Circle.module.css";

export const Circle = () => {
  const percentProp = 95.75;
  const size = 500;

  const percent = 100 - percentProp;

  const ref = useRef();
  const [circumference, setCircumference] = useState(0);

  useEffect(() => {
    const radius = ref.current.r.baseVal.value;
    setCircumference(radius * 2 * Math.PI);
  }, []);

  return (
    <div className={style.container}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
      >
        <circle
          ref={ref}
          cx="500"
          cy="500"
          r="300"
          stroke="green"
          strokeDasharray={circumference}
          strokeDashoffset={(circumference / 100) * percent}
          transform="rotate(90,500,500) translate(1000,1000) scale(-1,-1)"
          fill="none"
          strokeWidth="100px"
        />
      </svg>
    </div>
  );
};
