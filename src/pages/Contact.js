import React from 'react';
import { Grid, Divider, Typography, Link, Paper, Box } from '@material-ui/core';

function Contact() {
  return (
    <Grid container justify="center" spacing={2}>
        <Grid item>
            <Paper elevation={0}>
              <Box p={3}>
              <Typography variant="h5">Gagan Shipping Services</Typography>
              <Typography>
                  Door No: 39-9-9,<br/>
                  Tenneti Nagar, Murali Nagar,<br/>
                  Visakhapatnam – 530007.
              </Typography>
              <br/>
              <Typography>
                Telephone:&nbsp;
                <Link href="tel:+91–891–2540468">+91-891–2540468</Link>
              </Typography>
              <Typography>
                Mobile:&nbsp;
                <Link href="tel:+91-98661–05677">+91-98661–05677</Link>
              </Typography>
              <Typography>
                Email:&nbsp;
                <Link href="mailto:gagan@gaganship.com">gagan@gaganship.com</Link>,<br/>
                <Link href="mailto:crew@gaganship.com">crew@gaganship.com</Link>
              </Typography>
        </Box>
        </Paper>
        </Grid>
        <Grid item>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item>
          <Paper elevation={0}>
              <Box p={3}>
                <Typography variant="h5">
                    Contact Persons
                </Typography>
                <Typography variant="h6">
                  G.G. Rao
                </Typography>
                <Typography variant="subtitle1">
                  <Link href="tel:+91-98661–05677">+91-98661–05677</Link>
                </Typography>
                <Typography variant="h6">
                  G.S.P. Kumar
                </Typography>
                <Typography variant="subtitle1">
                  Mobile:&nbsp;
                  <Link href="tel:+91-93479-53664">+91-93479-53664</Link>
                </Typography>
                <Typography variant="h6">
                  G. Kushal Vivek
                </Typography>
                <Typography variant="subtitle1">
                  Mobile:&nbsp;
                  <Link href="tel:+91-81434-71234">+91-81434-71234</Link>
                </Typography>
          </Box>
        </Paper>
        </Grid>
    </Grid>
  );
}

export default Contact;