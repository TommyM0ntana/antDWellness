import React from "react";
import { Button } from "antd";

import { Carousel } from "antd";

const items = [
  {
    key: "1",
    title: "Hello you are welcome to,",
    content: "PROFESSIONAL WELLNESS AND HEALTH CLUB",
  },
];

function AppHero() {
  return (
    <div id="hero" className="heroBlock">
      <Carousel>
        {items.map((item) => {
          return (
            <div key={item.key} className="container-fluid">
              <div className="content">
                <h2>{item.title}</h2>
                <h1>{item.content}</h1>
                <div className="btnHolder">
                  <Button type="primary" size="large">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default AppHero;
