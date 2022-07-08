import React from "react";
import hero from "../assets/Maps.png";
import Group3 from "../assets/Group3.png";
import TextTransition, { presets } from "react-text-transition";
import Type from "./Type";

const span = "innovation";

// document.getElementById("Texts").innerHTML = codeBlock;
const TEXTS = [
  "Re-imagine" + " " + span + " " + "with forward thinking solutions",
  " A company that creates Companies ",
  " What does your organization need soluton for?",
];
const colors = ["#ff595e"];

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
        <div className="w-[60%] ">
          <div className=" h-auto">
            <h1 className=" text-[64px] leading-[61px] font-black">
              <TextTransition
                springConfig={presets.slow}
                className=" h-auto w-[80%]"
              >
                {TEXTS[index % TEXTS.length]}

                {/* {this.state.text} */}
              </TextTransition>
            </h1>
            <Type />
          </div>
        </div>

        <div className=" w-[30%]">
          <img src={Group3} alt="/" className="w-[8%] h-auto mt-14 ml-24" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
