import React from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "We create our own independent products that operate both domestically and internationally under separate brands in various niches of the techand innovation industry",
  "We create our own independent products that operate both domestically and internationally under separate brands in various niches of the tech and innovation industry.",
  "Fundamentally improve workflow learning in any of these areas by delivering real-time, tailored content that automatically populates as users move through different software platforms",
];

function Type() {
  const [index, setIndex] = React.useState(1);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div>
      <p className="w-[80%] text-[18px] leading-8">
        <TextTransition springConfig={presets.slow} className=" h-auto w-[80%]">
          {TEXTS[index % TEXTS.length]}

          {/* {this.state.text} */}
        </TextTransition>
      </p>
    </div>
  );
}

export default Type;
