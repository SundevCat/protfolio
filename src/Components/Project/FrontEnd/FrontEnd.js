import React, { useState } from 'react'
import './FrontEnd.css'
import { Col, Image, Row } from 'react-bootstrap'
import pif from '../../../assets/Product Information.png'
import pos from '../../../assets/6ecb91e73eab30f51b0b29a880338147.png'
import fb from '../../../assets/facebook-logo-facebook-icon-transparent-free-png.webp'
import github from '../../../assets/25231.png'
import { Link } from 'react-router-dom'

function FrontEnd() {
    const [select, setSelece] = useState(0)
    const Details = [{
        name: 'Website PIF',
        des: 'Laravel blade for website in frontend and backend.  Bootstrap 5 for template.',
        img: pif,
        url: 'https://github.com/SundevCat/pro_pif'
    }, {
        name: 'Facebook copy',
        des: 'ReactJS Framework and tailwind.',
        img: fb,
        url: 'https://github.com/SundevCat/react-facebook'
    }, {
        name: 'POS System',
        des: 'AngularJS Framework and Bootstrap 5.',
        img: pos,
        url: 'https://github.com/SundevCat/MyProjectWeb'
    }]
    return (
        <>
            <Row className=' animation mt-5'>
                <Col xs={4} className=' d-flex flex-column gap-2'>
                    <div onClick={() => setSelece(0)} style={{cursor:'pointer'}}>
                        <Image className=' d-block m-auto w-75 h-75 object-fit-contain' rounded src={pif} />
                        <div className=' text-center small'>Website PIF </div>
                    </div>
                    <div onClick={() => setSelece(1)} style={{cursor:'pointer'}}>
                        <Image className=' d-block m-auto w-75 h-75 object-fit-contain' rounded src={fb} />
                        <div className=' text-center small'> Facebook copy </div>
                    </div>
                    <div onClick={() => setSelece(2)} style={{cursor:'pointer'}}>
                        <Image className=' d-block m-auto w-75 h-75 object-fit-contain' rounded src={pos} />
                        <div className=' text-center p-1 small'> POS System </div>
                    </div>

                </Col>
                <Col xs={6} className='m-auto  shadow rounded-5'>
                    <div className=' py-3 py-md-4'>
                        <Image className=' d-block m-auto w-75 h-75 object-fit-contain' rounded src={Details[select].img} />
                        <div className=' text-center pt-1 fs-5 fw-bold'>{Details[select].name} </div>
                        <div className=' text-center w-75 m-auto small'>{Details[select].des} </div>
                        <div className=' m-auto w-25 h-25 my-2'>
                            <Link to={Details[select].url} target='_blank'>
                                <Image className=' d-block m-auto w-50 h-50 object-fit-contain' rounded src={github} />
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default FrontEnd