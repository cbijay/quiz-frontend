import { Card, CardContent, Grid, Typography } from '@material-ui/core'
import React from 'react'
import CardHeading from '../../components/card/CardHeading'
import SiteLayout from '../../layouts/SiteLayout'

function Gallery() {
    return (
        <SiteLayout>
            <Grid container>
                <Grid item xs={12}>
                    <Card>
                        <CardHeading>Gallery</CardHeading>
                        <CardContent>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <Typography paragraph>
                                        Comming soon....
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </SiteLayout>
    )
}

export default Gallery
