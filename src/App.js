import './App.css';
import Home from './Components/Home/Home';
import { Card, Col, Container, Row } from 'react-bootstrap'
import Profile from './Components/Profile/Profile';
import About_me from './Components/About_Me/About_me';
import Project from './Components/Project/Project';
import Skills from './Components/Skills/Skills';
import { useEffect, useState } from 'react';
import Resume from './Components/Resume/Resume';
import Bar from './Components/Bar/Bar';
import Contact from './Components/Contact/Contact';
import Cookies from 'universal-cookie';
function App() {
  const cookies = new Cookies()
  const [selectedStatus, SetSelecedStatus] = useState(cookies.get('status'))


  useEffect(() => {

  }, [])
  const setStatus = (status) => {
    SetSelecedStatus(status)
    cookies.set('status', status)
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
                <Profile setToggle={setStatus} />
                <About_me />
                <Project />
                <Bar header="Skills">
                  <Skills />
                </Bar>
                <Bar header="Resume">
                  <Resume />
                </Bar>
                <Bar header="Contact">
                  <Contact />
                </Bar>
                <Bar>
                  <div className=' text-light text-center pb-5 fs-1 fw-light'>
                    "Thanks for Scrolling"
                  </div>
                </Bar>
              </>}
              {selectedStatus === 'Resume' && <>
                <Resume />
                <Contact />
              </>}
              {selectedStatus === 'About' && <>
                <Profile setToggle={setStatus} />
                <About_me />
              </>}
              {selectedStatus === 'Contact' && <>
                <Contact />
              </>}
              {selectedStatus === 'Project' && <>
                <Project />
                <Bar header="Skills">
                  <Skills />
                </Bar>
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
