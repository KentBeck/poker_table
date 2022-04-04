import './App.css';
import PokerTable from "./PokerTable";
import HandHistory from './HandHistory';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap';

class Replayer {
    forward() {
        console.log("inside");
    }
    back() {
        console.log("back");
    }
}

function ReplayerApp() {
    const replayer = new Replayer();
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

    function back() {
        console.log("howdy");
    }

    function forward() {
        console.log("forward");
        console.log(replayer);
        // I want to change the state to a different hand. How do I do that?
    }

    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <Button onClick={replayer.back}>Back</Button>
                    </Col>
                    <Col>
                        <PokerTable hand={hand} />
                    </Col>
                    <Col>
                        <Button onClick={replayer.forward}>Forward</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ReplayerApp;
