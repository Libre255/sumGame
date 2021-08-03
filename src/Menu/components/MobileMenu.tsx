import React, { useState } from "react";
import { Row, Col, Button, Card } from "antd";

const MobileMenu: React.FC = () => {
  const [how2PlayBtn, setHow2PlayBtn] = useState(false);

  let cardStyle: {} = {
    display: how2PlayBtn ? "block" : "none",
    zIndex: 1,
    position: "absolute",
    border: "1px solid white",
    backgroundColor: "black",
  };
  return (
    <Row
      id="Menu"
      justify="space-around"
      align="middle"
      style={{ borderBottom: "1px solid white", paddingBottom: "5px" }}
    >
      <Col>
        <Button
          className="buttonStyle"
          shape="circle"
          size="large"
          type="primary"
        >
          New Game
        </Button>
      </Col>

      <Col>
        <Button
          className="buttonStyle"
          shape="circle"
          size="large"
          type="primary"
        >
          Save Score
        </Button>
      </Col>

      <Col>
        <Card
          className="cardMenu"
          size="small"
          title="How to play"
          headStyle={{ color: "white", textAlign: "center" }}
          bodyStyle={cardStyle}
          onClick={() => setHow2PlayBtn((pv) => !pv)}
        >
          Use the keyboard arrows/fingers to move the piece
          {<br />}
          Use Space z to throw the next piece.
          {<br />}
          Use x to push the piece to the top
        </Card>
      </Col>
    </Row>
  );
};

export default MobileMenu;
