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
                            Roi Et Tachnical Collage
                        </Typography>
                        <Typography component={'span'}>
                            <div className=' small text-warning-emphasis'>2016-2017</div>
                            <div className=' small'> Certificate of Technical Vocation, Technical Computer</div>
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
                            Rajamangala University of Technology Isan Khonkean Campus
                        </Typography>
                        <Typography component={'span'}>
                            <div className=' small text-warning-emphasis'>2018-2023</div>
                            <div className=' small'> Bechelor's Degree, Computer Engineering</div>
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
                            Full Stack Intern | MEE HAI GROUP CO., LTD
                        </Typography>
                        <Typography component={'span'}>
                            <div className=' small text-warning-emphasis'>April 2021 - Auguse 2021</div>
                            <div className=' small'>
                                <ul>
                                    <li>
                                        Use Figma for website design UX | UI.
                                    </li>
                                    <li>
                                        use Angular and Boostrap5 for Front end.
                                    </li>
                                    <li>
                                        use C# .NET for back end.
                                    </li>
                                    <li>
                                        use MongoDB for database.
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
                    </TimelineSeparator>
                    <TimelineContent className=' text-light'>
                        <Typography component={'span'}>
                            Web Developer | Plan Creations Co. Ltd
                        </Typography>
                        <Typography component={'span'}>
                            <div className=' small text-warning-emphasis'>June 2023 - Current</div>
                            <div className=' small'>
                                <ul>
                                    <li>
                                        Use Shopify for web ecommerce.
                                    </li>
                                    <li>
                                        Design website UX | UI and landing page for Ecommerce.
                                    </li>
                                    <li>
                                        Use Laravel and React to create website.
                                    </li>
                                    <li>
                                        Use Boostrap5 for website.
                                    </li>
                                    <li>
                                        Use NodeJS for backend
                                    </li>
                                    <li>
                                        Query Oracle database to manage stock and website.
                                    </li>
                                    <li>
                                        Manage Product Info.
                                    </li>
                                    <li>
                                        Monitor Live Streaming.
                                    </li>
                                    <li>
                                        Manage CRM system.
                                    </li>
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