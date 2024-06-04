import React from "react";
import TextTransition, { presets } from "react-text-transition";

type VerticalTextSliderProps = {
  texts: string[];
  className: string;
};

const VerticalTextSlider: React.FC<VerticalTextSliderProps> = ({ texts, className }) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <TextTransition className={className} springConfig={presets.gentle} inline>
      {texts.map((text, i) =>
        i === index % texts.length ? text : null
      )}
    </TextTransition>
  );
};

export default VerticalTextSlider;
