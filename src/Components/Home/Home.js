import React from 'react'
import { Card, Col, Container, Image, Row } from 'react-bootstrap'
import logo from '../../assets/6caf62a9929ca120668d0a936c5c3719.jpg'

function Home() {
    return (

        <div className='d-flex justify-content-between p-5 mx-sm-5'>
            <button className='btn btn-dark shadow rounded-5'>Contact</button>
            <button className='btn btn-dark shadow rounded-5'>Contact</button>
            <button className='btn btn-dark shadow rounded-5' >About</button>
            <button className='btn btn-dark shadow rounded-5'>Certificate</button>
            <button className='btn btn-dark shadow rounded-5'>Project</button>
        </div>


    )
}

export default Home