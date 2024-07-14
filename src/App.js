import './App.css';
import Home from './Components/Home/Home';
import { Card, Col, Container, Row } from 'react-bootstrap'
import Profile from './Components/Profile/Profile';
import About_me from './Components/About_Me/About_me';
import Project from './Components/Project/Project';
import Skills from './Components/Skills/Skills';
function App() {
  return (
    <div className='w-100 h-100 bg-dark '>
      <Container fluid="lg" >
        <Row>
          <Col md={2}>
          </Col>
          <Col md={8} className='my-5 '>
            <Card className=' bg-dark  bg-gradient rounded-5 shadow '>
              <Home />
              <Profile />
              <About_me />
              <Project />
              <Skills />
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
