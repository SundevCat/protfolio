import React from 'react'
import { Dropdown, DropdownItemText, DropdownMenu, DropdownToggle } from 'react-bootstrap'

function Home(prop) {
    return (
        <>
            <div className=' d-none d-sm-flex justify-content-between py-4 p-lg-5 mx-sm-5'>
                <button className='btn btn-dark shadow rounded-5' onClick={() => prop.setToggle('Home')}>Home</button>
                <button className='btn btn-dark shadow rounded-5' onClick={() => prop.setToggle('Resume')}>Resume</button>
                <button className='btn btn-dark shadow rounded-5' onClick={() => prop.setToggle('About')}>About</button>
                <button className='btn btn-dark shadow rounded-5' onClick={() => prop.setToggle('Contact')}>Contact</button>
                <button className='btn btn-dark shadow rounded-5' onClick={() => prop.setToggle('Project')}>Project</button>
            </div>
            <div className=' d-sm-none d-flex p-3 p-sm-5 justify-content-end '>
                <Dropdown >
                    <DropdownToggle id="dropdown-custom-components" as={React.forwardRef((({ onClick }, ref) => <div onClick={(e) => onClick(e)} className=' text-light pointer-event' style={{ cursor: 'pointer', userSelect: 'none' }}> <span className="material-symbols-outlined fs-1">
                        menu
                    </span></div>))}>
                    </DropdownToggle>
                    <DropdownMenu className='bg-dark'  align={{ xl: 'start' }} style={{ cursor: 'pointer', userSelect: 'none' }}>
                        <DropdownItemText className='text-light' onClick={() => prop.setToggle('Home')} key={1}>Home </DropdownItemText>
                        <DropdownItemText className='text-light' onClick={() => prop.setToggle('Resume')}>Resume </DropdownItemText>
                        <DropdownItemText className='text-light' onClick={() => prop.setToggle('About')}>About </DropdownItemText>
                        <DropdownItemText className='text-light' onClick={() => prop.setToggle('Contact')}>Contact </DropdownItemText>
                        <DropdownItemText className='text-light' onClick={() => prop.setToggle('Project')}>Project </DropdownItemText>
                    </DropdownMenu>
                </Dropdown>
            </div >
        </>

    )
}

export default Home