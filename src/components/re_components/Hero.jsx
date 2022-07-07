import React from "react";
import hero from "../assets/Maps.png";
import Group3 from "../assets/Group3.png";
import TextTransition, { presets } from "react-text-transition";

const span = `<span className=" text-blue-700">innovation</span>`;

// document.getElementById("Texts").innerHTML = codeBlock;
const TEXTS = [
  "Re-imagine innovation with forward thinking solutions",
  " A company that creates Companies ",
  " What does your organization need soluton for?",
];


function Hero() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="w-[100%] h-auto  hero-bg pb-[2rem] ">
      <div className="w-[90%] mx-auto flex pt-96 ">
        <div className="w-[60%] flex flex-col">
          
          <h1 className="w-[80%] h-auto text-[64px] leading-[61px] font-black">
            <TextTransition springConfig={presets.slow}>
              {TEXTS[index % TEXTS.length]}
              {/* {this.state.text} */}
            </TextTransition>
          </h1>

          <p className="w-[80%] text-[18px] leading-8">
            We create our own independent products that operate both
            domestically and internationally under separate brands in various
            niches of the tech and innovation industry.
          </p>
        </div>
        <div className=" w-[30%]">
          <img src={Group3} alt="/" className="w-[10%] h-auto mt-14 ml-24" />
        
        </div>
      </div>
    </div>
  );
}

export default Hero;
