import React, { Component } from "react";
import { Button } from "reactstrap";

export default class About extends Component {
  state = {
    par1:
      "Hi! My name's Cillian. I'm a web developer currently working in an ecom role based in Manchester",
    par2:
      "Two years ago, having grown dissatisfied with my previous job, I decided I was going my life by the scruff of its neck and make a change. I knew I had so much more to offer than what that job required of me.",
    par3:
      "I had had a little taste of coding while at secondary school, and had heard Manchester had a very distinguished and growing Tech Scene, so I decided to revisit this subject, using free resources like freecodecamp and Codecademy. To my surprise, I found it addictive from the first minute, and could not stop myself working through the online tutorials. It was like a game to me, a huge puzzle, and having been an avid gamer, this really struck a chord with me.",
    par4:
      "After a couple of months I decided that this was the change I wanted, so I researched how I could learn this professionaly without having to go back to university. It was then that I found out about coding bootcamps, and that Manchester actually had a couple! I chose my bootcamp and began saving as much as I could each month, all the while coding in the evening when I came home from work, as well as at the weekend.Finally, last July, I had saved enough and developed my skills enough that I was able to land a place on Northcoders bootcamp",
    par5:
      "Fast forward 10 months and I am now in my first dev role. It's all happened so fast and sometimes I stop myself just to take stock of how far I've come, and also remind myself that I have a long, long way to go if I want to have a successful career in the industry!",
    isRestOfAboutVisible: false,
  };

  readMoreOrLess = (event) => {
    const field = event.target.name;
    if (field === "more") {
      this.setState({ isRestOfAboutVisible: true });
    } else {
      this.setState({ isRestOfAboutVisible: false });
    }
  };

  render() {
    const { par1, par2, par3, par4, par5, isRestOfAboutVisible } = this.state;
    return (
      <div className="about">
        <h2 className="headers">About</h2>
        <p>{par1}</p>
        {!isRestOfAboutVisible && (
          <Button color="success" name="more" onClick={this.readMoreOrLess}>
            Read More
          </Button>
        )}
        {isRestOfAboutVisible && (
          <>
            <p>{par2}</p>
            <p>{par3}</p>
            <p>{par4}</p>
            <p>{par5}</p>
            <Button color="danger" name="less" onClick={this.readMoreOrLess}>
              Read Less
            </Button>
          </>
        )}
      </div>
    );
  }
}
