import './App.css';
import Home from './Components/Home/Home';
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
function App() {
  return (
    <div className='w-100 h-100 bg-dark d-flex flex-row'>
      <Container fluid="lg" >
        <Row>
          <Col md={2}>
          </Col>
          <Col md={8} className='mt-5 '>
            <Card className='bg-secondary bg-gradient rounded-5'>
              <Home />
            </Card>
          </Col>
          <Col md={2}>
          </Col>
        </Row>
      </Container >
    </div >
  );
}

export default App;
