import React from 'react'
import { Dropdown, DropdownButton, DropdownItemText, DropdownMenu, DropdownToggle } from 'react-bootstrap'

function Home() {
    return (
        <>
            <div className=' d-none d-sm-flex justify-content-between py-4 p-lg-5 mx-sm-5'>
                <button className='btn btn-dark shadow rounded-5'>Contact</button>
                <button className='btn btn-dark shadow rounded-5'>Contact</button>
                <button className='btn btn-dark shadow rounded-5'>About</button>
                <button className='btn btn-dark shadow rounded-5'>Certificate</button>
                <button className='btn btn-dark shadow rounded-5'>Project</button>
            </div>
            <div className=' d-sm-none d-flex p-3 p-sm-5 justify-content-end '>
                <Dropdown >
                    <DropdownToggle id="dropdown-custom-components" as={({ onClick }) => <div onClick={(e) => onClick(e)} className=' text-light pointer-event' style={{cursor:'pointer', userSelect:'none'}}> <span class="material-symbols-outlined">
                        menu
                    </span></div>} className=' bg-danger'>

                    </DropdownToggle>
                    <DropdownMenu className='bg-dark ' align={{xl:'start'}} style={{cursor:'pointer', userSelect:'none'}}>
                        <DropdownItemText className='text-light' >Contact </DropdownItemText>
                        <DropdownItemText className='text-light'>Contact </DropdownItemText>
                        <DropdownItemText className='text-light'>About </DropdownItemText>
                        <DropdownItemText className='text-light'>Certificate </DropdownItemText>
                        <DropdownItemText className='text-light'>Project </DropdownItemText>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </>

    )
}

export default Home