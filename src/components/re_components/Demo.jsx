import React, { Component } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

const randomNumber = () => Math.floor(Math.random() * 9999999999 + 100000);

const texts = ["Fast", "Scalable", "Potato", "Cabbage", "Cucumber", "Tomato"];

const paragraphs = [
  "Quis commodo velit quis cupidatat non amet aliqua sint veniam labore. Culpa ea laboris consequat mollit proident Lorem cupidatat officia fugiat. Tempor sunt non ullamco irure in proident. Laboris minim esse qui non id et anim commodo. Esse id do irure ut eiusmod aliqua irure dolor in est ullamco culpa enim. ",
  "Quis deserunt tempor consectetur id ea. Aute sunt eu minim nostrud officia excepteur duis et tempor do dolor culpa. Cillum nostrud quis magna consequat.",
  "Aute in id ullamco laboris aute tempor magna dolore ad laborum.",
  "Exercitation ullamco qui occaecat dolore ex cillum exercitation commodo magna Lorem in laborum do do. Laboris ad mollit adipisicing ad occaecat fugiat tempor commodo irure magna culpa. Culpa eiusmod nisi sit non ipsum."
];

class Demo extends Component {
  state = {
    number: randomNumber(),
    textIndex: 0,
    textFastIndex: 0,
    paragraphIndex: 0,
    customIndex: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        number: randomNumber(),
        textIndex: this.state.textIndex + 1,
        paragraphIndex: this.state.paragraphIndex + 1
      });
    }, 4000);
    setInterval(() => {
      this.setState({
        textFastIndex: this.state.textFastIndex + 1
      });
    }, 150);
  }

  render() {
    return (
      <React.Fragment>
        <h1>React Text Transition</h1>
        <section>
          <h2>Odometer Demo.</h2>
          <section className="inline">
            <ReactTextTransition className="big" inline>
              {`${this.state.number}`.split("")[0]}
            </ReactTextTransition>
            <ReactTextTransition className="big" inline>
              {`${this.state.number}`.split("")[1]}
            </ReactTextTransition>
            <span className="big">.</span>
            <ReactTextTransition inline>
              {`${this.state.number}`.split("")[2]}
            </ReactTextTransition>
            <ReactTextTransition inline>
              {`${this.state.number}`.split("")[3]}
            </ReactTextTransition>
            <ReactTextTransition inline>
              {`${this.state.number}`.split("")[4]}
            </ReactTextTransition>
          </section>
          <section className="inline">
            {`${this.state.number}`.split("").map((n, i) => (
              <ReactTextTransition
                key={i}
                children={n}
                className="big"
                direction="down"
                overflow
                inline
              />
            ))}
          </section>
          <section className="inline">
            <h3>With delay</h3>
            {`${this.state.number}`.split("").map((n, i) => (
              <ReactTextTransition
                key={i}
                children={n}
                delay={i * 100}
                className="big"
                overflow
                inline
              />
            ))}
          </section>
        </section>
        <section>
          <h2>Spring presets.</h2>
          <section>
            <h4>Default spring preset</h4>
            <ReactTextTransition
              children={this.state.number}
              springConfig={{ stiffness: 50, damping: 20 }}
            />
          </section>
          <section>
            <h4>wobbly spring preset</h4>
            <ReactTextTransition
              children={this.state.number}
              springConfig={{ tension: 300, friction: 10 }}
            />
          </section>
        </section>
        <section>
          <h2>Inline prop.</h2>
          <section className="inline">
            Create
            <ReactTextTransition
              springConfig={presets.gentle}
              style={{ margin: "0 4px" }}
              inline
            >
              {texts[this.state.textIndex % texts.length]}
            </ReactTextTransition>
            React Applications.
          </section>
        </section>
        <section>
          <h2>Fast transition.</h2>
          <section className="inline">
            Create
            <ReactTextTransition style={{ margin: "0 4px" }} inline>
              {texts[this.state.textFastIndex % texts.length]}
            </ReactTextTransition>
            React Applications.
          </section>
        </section>
        <section>
          <h2>Delay prop.</h2>
          <section className="inline">
            <ReactTextTransition
              children={texts[this.state.textIndex % texts.length]}
              springConfig={presets.gentle}
              className="big"
              delay={300}
              inline
            />
            <ReactTextTransition
              children={paragraphs[this.state.paragraphIndex % texts.length]}
              springConfig={presets.gentle}
            />
          </section>
        </section>
        <section>
          <h2>Paragraphs.</h2>
          <section className="inline">
            <ReactTextTransition
              children={paragraphs[this.state.paragraphIndex % texts.length]}
            />
          </section>
        </section>
      </React.Fragment>
    );
  }
}

export default Demo;