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

    hand1() {
        return new HandHistory('KB', 'AdJh')
            .sit('KB', 100)
            .sit('BA', 200)
            .sit('LA', 150)
            .bet('KB', 3)
            .bet('BA', 5)
            .fold('LA')
            .bet('KB', 2)
            .check('BA')
            .dealFlop('3d7h9c')
            .check('KB')
            .check('BA')
            .dealTurn('4d')
            .check('KB')
            .check('BA')
            .dealRiver('5c')
            .check('KB')
            .actionOn('BA');
    }

}

function ReplayerApp() {
    const replayer = new Replayer();

    return (
        <div className="App">
            <Container>
                <Row>
                    <Col>
                        <Button onClick={replayer.back}>Back</Button>
                    </Col>
                    <Col>
                        <PokerTable hand={replayer.hand1()} />
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
