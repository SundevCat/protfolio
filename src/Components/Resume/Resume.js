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
                            ABCDEF
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
                            Lorem ipsum dolor sit amet.
                        </Typography>
                        <Typography component={'span'}>
                            <div className=' small text-warning-emphasis'>lorem</div>
                            <div className=' small'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet aspernatur inventore iusto vero neque pariatur id minus
                                dolorum. Quo sequi vero tenetur sapiente blanditiis ullam nesciunt, error nemo dolores molestias.</div>
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
                            Lorem ipsum dolor sit amet.
                        </Typography>
                        <Typography component={'span'}>
                            <div className=' small text-warning-emphasis'>lorem</div>
                            <div className=' small'> lorem</div>
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
                            ABCDEF
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
                            Lorem ipsum dolor sit amet.
                        </Typography>
                        <Typography component={'span'}>
                            <div className=' small text-warning-emphasis'>lorem</div>
                            <div className=' small'> lorem</div>
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
                            Lorem ipsum dolor sit amet.
                        </Typography>
                        <Typography component={'span'}>
                            <div className=' small text-warning-emphasis'>lorem</div>
                            <div className=' small'> lorem</div>
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </>
    )
}

export default Resume