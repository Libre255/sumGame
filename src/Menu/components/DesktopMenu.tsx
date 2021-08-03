import { Row, Col, Button, Card } from "antd";

const DesktopMainMenu = () => {
  return (
    <Col id="Menu" className="testBox">
      <Row className="menuRows" justify="center">
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
      </Row>
      <Row justify="center" className="menuRows">
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
      </Row>
      <Row className="menuRows" justify="center">
        <Col>
          <Card
            className="cardMenu"
            size="small"
            title="How to play"
            headStyle={{ color: "white" }}
          >
            Use the keyboard arrows/fingers to move the piece
            {<br />}
            Use x to push the piece to the top
            {<br />}
            Use z to grab next piece
          </Card>
        </Col>
      </Row>
    </Col>
  );
};

export default DesktopMainMenu;
