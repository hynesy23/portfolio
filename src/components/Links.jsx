import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardBody } from "reactstrap";
import ModalImage from "react-modal-image";

import chNews from "./images/ch-news.png";
import marvelpedia from "./images/marvelpedia.png";
import pokedex from "./images/pokedex.png";

export default class Links extends Component {
  // state = {
  //   marvelpedia: "https://github.com/hynesy23/Marvelpedia",
  //   pokedex: "https://gitlab.com/hynesy23/frontend-test",
  //   chNewsBE: "https://github.com/hynesy23/be-ch-news",
  //   chNewsFE: "https://github.com/hynesy23/fe-ch-news",
  // };
  render() {
    return (
      <div className="links">
        <h2 className="headers">Links</h2>
        <p>
          Below is a list of links that showcase some of my projects, both
          personal and from bootcamp:
        </p>
        <ul className="cards">
          <li>
            <ul className="cards">
              <li>
                <ModalImage
                  small={chNews}
                  large={chNews}
                  alt="CH News"
                  className="images"
                />
              </li>
              <li>
                <p style={{ fontWeight: "bold" }}>
                  <a href="https://ch-news.netlify.app/">CH News</a>
                </p>
                <p>
                  This is the first project that I developed, and it was
                  completed during my time at Northcoders bootcamp. Github link
                  (frontend):{" "}
                  <a href="https://github.com/hynesy23/fe-ch-news">
                    https://github.com/hynesy23/fe-ch-news;
                  </a>{" "}
                  and Github link (backend):{" "}
                  <a href="<https://github.com/hynesy23/be-ch-news">
                    https://github.com/hynesy23/be-ch-news
                  </a>
                </p>
              </li>
            </ul>
            <ul className="cards">
              <li>
                <ModalImage
                  small={marvelpedia}
                  large={marvelpedia}
                  alt="Marvelpedia"
                  className="marvel-image"
                />
              </li>
              <li>
                <p style={{ fontWeight: "bold" }}>Marvelpedia</p>
                <p>
                  This project was one of the first I completed after bootcamp,
                  and being a huge Marvel nerd, I could not wait to get started.
                  I had to register with the site to get an api key, and used
                  some Material UI for the bio cards and search box.
                </p>
                <li>
                  {" "}
                  Githublink:
                  <a
                    href="https://github.com/hynesy23/Marvelpedia"
                    className="long-url"
                  >
                    https://github.com/hynesy23/Marvelpedia
                  </a>
                </li>
              </li>
            </ul>
            <ul className="cards">
              <li>
                <ModalImage
                  small={pokedex}
                  large={pokedex}
                  alt="Pokedex"
                  className="images"
                />
              </li>
              <li>
                <p style={{ fontWeight: "bold" }}>Pokedex</p>
                <p>
                  I completed this project as a tech test, again however this
                  was less of a test and more of a treat, as I was a massive
                  Pokemon fan and had had my eye on the pokemon API for a while
                </p>
                <li>
                  Gitlab link:{" "}
                  <a
                    href="https://gitlab.com/hynesy23/frontend-test"
                    className="long-url"
                  >
                    https://gitlab.com/hynesy23/frontend-test
                  </a>
                </li>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
