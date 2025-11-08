import { Laptop, MenuBook } from '@mui/icons-material'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, timelineOppositeContentClasses, TimelineSeparator } from '@mui/lab'
import { Typography } from '@mui/material'
import React from 'react'

function Resume() {
    return (
        <>
            <Timeline sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.1,
                },
            }}>
                <TimelineItem>
                    <TimelineOppositeContent />
                    <TimelineSeparator>
                        <TimelineDot color="warning">
                            <MenuBook color="action" />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }} className=' text-light'>
                        <Typography variant='h6'>
                            Education
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent />
                    <TimelineSeparator sx={{ marginLeft: '10px' }}>
                        <TimelineDot color="warning" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className=' text-light'>
                        <Typography component={'span'}>
                            Rajamangala University of Technology Isan Khonkean Campus
                        </Typography>
                        <Typography component={'span'}>
                            <div className=' small text-warning'>2018-2023</div>
                            <div className=' small'> Bechelor's Degree, Computer Engineering</div>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent />
                    <TimelineSeparator sx={{ marginLeft: '10px' }}>
                        <TimelineDot color="warning" />
                    </TimelineSeparator>
                    <TimelineContent className=' text-light'>
                        <Typography component={'span'}>
                            Roi Et Tachnical Collage
                        </Typography>
                        <Typography component={'span'}>
                            <div className=' small text-warning'>2016-2017</div>
                            <div className=' small'> Certificate of Technical Vocation, Technical Computer</div>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>


            <Timeline sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                    flex: 0.1,
                },
            }}>
                <TimelineItem>
                    <TimelineOppositeContent />
                    <TimelineSeparator>
                        <TimelineDot color="warning">
                            <Laptop color="action" />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ m: 'auto 0' }} className=' text-light'>
                        <Typography variant='h6'>
                            Experience
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent />
                    <TimelineSeparator sx={{ marginLeft: '10px' }}>
                        <TimelineDot color="warning" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className=' text-light'>
                        <Typography component={'span'}>
                            Software Engineer  |  Gotel Co. Ltd
                        </Typography>
                        <Typography component={'span'}>
                            <div className=' small text-warning'>Oct 2024 - Current</div>
                            <div className=' small'>
                                <ul>
                                    <li>
                                        Developed and designed a CMS web application using Next.js
                                    </li>
                                    <li>
                                        Developed and designed APIs using NestJS.
                                    </li>
                                    <li>
                                        Used n8n automation to facilitate monitoring
                                    </li>
                                    <li>
                                        Used RabbitMQ to manage message queues and handle
                                        system logs.
                                    </li>
                                    <li>
                                        Migrated the microservice legacy system to Node.js.
                                    </li>
                                    <li>
                                        Refactored MSSQL Server stored procedures into a new
                                        system.
                                    </li>
                                    <li>
                                        Deployed projects on Docker in a Linux environment.
                                    </li>
                                    <li>
                                        Resolved system issues based on user feedback.
                                    </li>
                                    <li>
                                        Created and updated system documentation.
                                    </li>
                                    <li>
                                        Design and solve problems together with the team.
                                    </li>
                                </ul>
                            </div>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent />
                    <TimelineSeparator sx={{ marginLeft: '10px' }}>
                        <TimelineDot color="warning" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className=' text-light'>
                        <Typography component={'span'}>
                            Web Developer | Plan Creations Co. Ltd
                        </Typography>
                        <Typography component={'span'}>
                            <div className=' small text-warning'>June 2023 - Sep 2024</div>
                            <div className=' small'>
                                <ul>
                                    <li>
                                        E-Commerce Development
                                    </li>
                                    <ul>
                                        <li>
                                            Developed and managed eCommerce websites using Shopify
                                        </li>
                                        <li>
                                            Designed UX/UI and landing pages for eCommerce
                                        </li>
                                    </ul>
                                    <li>
                                        Frontend Development
                                    </li>
                                    <ul>
                                        <li>
                                            Utilized Laravel React and Angular for development
                                        </li>
                                        <li>
                                            Employed Bootstrap 5 as a CSS framework to create responsive websites for desktop and mobile
                                        </li>
                                    </ul>
                                    <li>
                                        Backend Development
                                    </li>
                                    <ul>
                                        <li>
                                            Developed backend systems using Express.js and C# .NetCore
                                        </li>
                                        <li>
                                            Created RESTful APIs
                                        </li>
                                    </ul>
                                    <li>
                                        Database Management
                                    </li>
                                    <ul>
                                        <li>
                                            Oracle and  MySQL databases
                                        </li>
                                    </ul>
                                    <li>
                                        Operations Management
                                    </li>
                                    <ul>
                                        <li>
                                            Managed product stock
                                        </li>
                                        <li>
                                            Monitored live streaming
                                        </li>
                                        <li>
                                            Managed CRM systems
                                        </li>
                                    </ul>
                                </ul>
                            </div>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent />
                    <TimelineSeparator sx={{ marginLeft: '10px' }}>
                        <TimelineDot color="warning" />
                    </TimelineSeparator>
                    <TimelineContent className=' text-light'>
                        <Typography component={'span'}>
                            Full Stack Intern | MEE HAI GROUP CO., LTD
                        </Typography>
                        <Typography component={'span'}>
                            <div className=' small text-warning'>April 2021 - Auguse 2021</div>
                            <div className=' small'>
                                <ul>
                                    <li>
                                        Website Design
                                    </li>
                                    <ul>
                                        <li>
                                            Used Figma for designing website UX/UI
                                        </li>
                                    </ul>
                                    <li>
                                        Frontend Development
                                    </li>
                                    <ul>
                                        <li>
                                            Utilized Angular and Bootstrap 5 for frontend development
                                        </li>
                                    </ul>
                                    <li>
                                        Backend Development
                                    </li>
                                    <ul>
                                        <li>
                                            Employed C# and .NET for backend development
                                        </li>
                                    </ul>
                                    <li>
                                        Database Management
                                    </li>
                                    <ul>
                                        <li>
                                            Used MongoDB for database management
                                        </li>
                                    </ul>
                                </ul>
                            </div>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </>
    )
}

export default Resume