import './App.css';
import Home from './Components/Home/Home';
import { Card, Col, Container, ProgressBar, Row } from 'react-bootstrap'
import Profile from './Components/Profile/Profile';
import About_me from './Components/About_Me/About_me';
import Project from './Components/Project/Project';
import Skills from './Components/Skills/Skills';
import { useEffect, useState } from 'react';
import Resume from './Components/Resume/Resume';
import Bar from './Components/Bar/Bar';
function App() {
  const [selectedStatus, SetSelecedStatus] = useState('Home')


  useEffect(() => {
    console.log(selectedStatus);
  }, [selectedStatus])

  const setStatus = (status) => {
    SetSelecedStatus(status)
  }
  return (
    <div className='w-100 h-100 bg-dark min-vh-100'>
      <Container fluid="lg" >
        <Row>
          <Col md={2}>
          </Col>
          <Col md={8} className='my-5 '>
            <Card className=' bg-dark  bg-gradient rounded-5 shadow min-vh-50'>
              <Home setToggle={setStatus} />
              {selectedStatus === 'Home' && <>
                <Profile />
                <About_me />
                <Project />
                <Bar header="lorem">
                  <Skills />
                </Bar>
                {/* <Bar header="lorem">
                  <Resume />
                </Bar> */}
              </>}
              {selectedStatus === 'Resume' && <>
                <Resume />
              </>}
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
