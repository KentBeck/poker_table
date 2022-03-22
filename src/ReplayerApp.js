import './App.css';
import PokerTable from "./PokerTable";
import HandHistory from './HandHistory';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';

function Replayer() {
    
}

function back() {
  console.log("howdy");
}
function forward() {
  console.log("forward");
  // I want to change the state to a different hand. How do I do that?
}

function ReplayerApp() {
  const hand = new HandHistory('KB', 'AdJh');
  hand.sit('KB', 100);
  hand.sit('BA', 200);
  hand.sit('LA', 150);
  hand.bet('KB', 3);
  hand.bet('BA', 5);
  hand.fold('LA');
  hand.bet('KB', 2);
  hand.check('BA');
  hand.dealFlop('3d7h9c');
  hand.check('KB');
  hand.check('BA');
  hand.dealTurn('4d');
  hand.check('KB');
  hand.check('BA');
  hand.dealRiver('5c');
  hand.check('KB')
  hand.actionOn('BA');

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Button onClick={back}>Back</Button>
          </Col>
          <Col>
            <PokerTable hand={hand} />
          </Col>
          <Col>
            <Button onClick={forward}>Forward</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ReplayerApp;
