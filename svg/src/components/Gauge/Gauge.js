import { a, useSpring } from "@react-spring/web";

export const Gauge = ({
  current = 0,
  minValue = 0,
  maxValue = 180,
  steps = 10,
}) => {
  const rotation = scale(current, minValue, maxValue, 60, 310);

  const { transform } = useSpring({
    transform: `rotate(${rotation}deg)`,
  });

  return (
    <div>
      <svg width="500" height="500" viewBox="-200 -200 400 400" fill="none">
        <a.rect
          x="-5"
          y="-20"
          width="10"
          height="128"
          rx="5"
          fill="#626C76"
          style={{ transform }}
        />

        <circle cx="0" cy="0" r="2.5" fill="yellow" stroke="none" />

        <Beschriftung minValue={minValue} maxValue={maxValue} steps={steps} />
      </svg>
    </div>
  );
};

const Beschriftung = ({ minValue, maxValue, steps }) => {
  let result = [];

  for (let i = minValue; i <= maxValue; i += steps) {
    const currentRotation = scale(i, minValue, maxValue, 60, 310);
    const { x, y } = p2c(125, currentRotation);
    result.push(
      <text
        key={`${x},${y}`}
        x={x}
        y={y}
        fill="darkgray"
        height="1"
        width="1"
        textAnchor="middle"
        alignmentBaseline="central"
      >
        {i}
      </text>
    );
  }

  return result;
};

const p2c = (radius, angle) => {
  const theta = ((angle + 90) * Math.PI) / 180;

  return {
    x: radius * Math.cos(theta),
    y: radius * Math.sin(theta),
  };
};

const scale = (value, x1, y1, x2, y2) => {
  return ((value - x1) * (y2 - x2)) / (y1 - x1) + x2;
};
