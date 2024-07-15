import React from 'react'
import html from '../../assets/html.webp'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import ts from '../../assets/ts.png'
import c from '../../assets/c.png'
import { Image } from 'react-bootstrap'

function Skills() {
    return (
        <div className=' d-flex flex-column text-light'>
            <div className=' d-flex flex-column py-2'>
                <div>
                    Language
                </div>
                <div className=' py-2'>
                    <Image className='w-8 mx-3' src={html} />
                    <Image className='w-8 mx-3' src={css} />
                    <Image className='w-8 mx-3' src={js} />
                    <Image className='w-8 mx-3' src={ts} />
                    <Image className='w-8 mx-3' src={c} />
                </div>
            </div>
            <div className=' d-flex flex-column py-2'>
                <div>
                    Full stack Framework
                </div>
                <div className=' py-2'>
                    <Image className='w-8 mx-3' src={html} />
                    <Image className='w-8 mx-3' src={html} />
                    <Image className='w-8 mx-3' src={html} />
                    <Image className='w-8 mx-3' src={html} />
                </div>
            </div>
            <div className=' d-flex flex-column py-2'>
                <div>
                    CSS Framework
                </div>
                <div className=' py-2'>
                    <Image className='w-8 mx-3' src={html} />
                    <Image className='w-8 mx-3' src={html} />
                    <Image className='w-8 mx-3' src={html} />
                    <Image className='w-8 mx-3' src={html} />
                </div>
            </div>
            <div className=' d-flex flex-column py-2'>
                <div>
                    Database
                </div>
                <div className=' py-2'>
                    <Image className='w-8 mx-3' src={html} />
                    <Image className='w-8 mx-3' src={html} />
                    <Image className='w-8 mx-3' src={html} />
                    <Image className='w-8 mx-3' src={html} />
                </div>
            </div>
        </div>
    )
}

export default Skills