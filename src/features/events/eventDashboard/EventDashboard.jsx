import React from 'react'
import { Grid } from 'semantic-ui-react'
import EventFrom from '../eventForm/EventForm'
import EventList from './EventList'
import { sampleData } from '../../../app/api/sampleData' 

const EventDashboard = () => {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventList events={sampleData}/>
            </Grid.Column>
            <Grid.Column width={6}>
                <EventFrom />
            </Grid.Column>
        </Grid>
    )
}

export default EventDashboard