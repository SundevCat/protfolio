import React, { useState } from 'react'
import './FrontEnd.css'
import { Col, Image, Row } from 'react-bootstrap'
import pif from '../../../assets/pif.png'
import pos from '../../../assets/pos.png'
import fb from '../../../assets/face web.png'
import plantoys from '../../../assets/plantoys.png'
import port from '../../../assets/port.png'
import github from '../../../assets/25231.png'
import web from '../../../assets/web.png'
import stockweb from '../../../assets/stockweb.png'
import { Link } from 'react-router-dom'

function FrontEnd() {
    const Details = [{
        name: 'Website PIF',
        des: 'Laravel blade +  Bootstrap 5 ',
        img: pif,
        url1_img: github,
        url1: 'https://github.com/SundevCat/pro_pif',
        url2_img: web,
        url2: 'https://webapps.plantoys.com/plantoys_pif/login'
    }, {
        name: 'Stock Ecom Plantoys',
        des: 'AngularTs + Boostrap5.',
        img: stockweb,
        url1_img: github,
        url1: 'https://github.com/SundevCat/stockEcomWeb',
        url2_img: '',
        url2: ''
    },
    {
        name: 'Facebook copy',
        des: 'React + tailwind.',
        img: fb,
        url1_img: github,
        url1: 'https://github.com/SundevCat/react-facebook',
        url2_img: '',
        url2: ''
    }, {
        name: 'POS System',
        des: 'Angular + Bootstrap5.',
        img: pos,
        url1_img: github,
        url1: 'https://github.com/SundevCat/MyProjectWeb',
        url2_img: '',
        url2: ''
    }, {
        name: 'Protfolio',
        des: 'React + Bootstrap 5',
        img: port,
        url1_img: github,
        url1: 'https://github.com/SundevCat/protfolio',
        url2_img: '',
        url2: ''
    }, {
        name: 'Plantoys',
        des: 'shopify Ecommerce',
        img: plantoys,
        url1_img: github,
        url1: 'https://th.plantoys.com/',
        url2_img: '',
        url2: ''
    }]
    return (
        <>
            <Row className=' row-cols-2  animation my-5 '>
                {Details.map((data, i) =>
                    <Col className='' key={i}>
                        <div className=' py-3 py-md-4'>
                            <Image className=' d-block m-auto w-75 h-75 object-fit-contain hover' rounded src={data.img} />
                            <div className=' text-center py-1 fs-6 fw-bold'>{data.name} </div>
                            <div className=' text-center w-100 small'>{data.des} </div>
                            <div className=' m-auto w-25 h-25 my-2 d-flex justify-content-center' >
                                <Link to={data.url1} target='_blank' className=' w-50'>
                                    <Image className=' d-block m-auto w-75 h-75 object-fit-contain' rounded src={data.url1_img} />
                                </Link>
                                {data.url2 !== '' ?
                                    <Link to={data.url2} target='_blank' className=' w-50'>
                                        <Image className=' d-block m-auto w-75 h-75 object-fit-contain' rounded src={data.url2_img} />
                                    </Link>
                                    :
                                    <></>
                                }
                            </div>
                        </div>
                    </Col>
                )}
            </Row>
        </>
    )
}

export default FrontEnd