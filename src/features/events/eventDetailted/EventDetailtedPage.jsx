import React from 'react'
import { Grid } from 'semantic-ui-react'
import EventDetailtedChat from './EventDetailtedChat'
import EventDetailtedHeader from './EventDetailtedHeader'
import EventDetailtedInfo from './EventDEtailtedInfo'
import EventDetailtedSidebar from './EventDetailtedSidebar'

export default function EventDetailtedPage() {
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventDetailtedHeader />
                <EventDetailtedInfo />
                <EventDetailtedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailtedSidebar />
            </Grid.Column>
        </Grid>
    )
}