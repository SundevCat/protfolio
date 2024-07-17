import { Email, Phone } from '@mui/icons-material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Contact() {
  return (
    <div className='text-light'>
      <Row >
        <Col></Col>
        <Col xs={9}>
          <div className=' text-center p-2 fs-3 fw-bold'> Contact Me</div>
          <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1938.3959294596884!2d100.68059581225079!3d13.670416707767505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d5f9da202687d%3A0x174b92a59f5c8123!2z4LiZ4Li04Lij4Lix4LiZ4LiU4Lij4LmM4LmA4Lij4Liq4LiL4Li04LmA4LiU4LiZ4LiL4LmMIDM!5e0!3m2!1sth!2sth!4v1721112124781!5m2!1sth!2sth"
            style={{ border: '0', width: '100%', height: '40dvh', borderRadius: '30px' }}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          <div className='my-5'>
            <div className='py-2'>
              Contact
            </div>
            <div>
              <Email />
              <span className='px-2'>
                chirapong.ph@gmail.com
              </span>
            </div>
            <div>
              <Phone />
              <span className='px-2'>
                0927149299
              </span>
            </div>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </div>
  )
}

export default Contact