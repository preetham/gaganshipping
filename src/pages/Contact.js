import React from 'react';
import { Grid, Typography, Box, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import contactImg from '../static/contact.jpg';

const useStyles = makeStyles(theme => ({
  outerDiv: {
    width: '100%',
    display: 'grid',
    height: '40%',
    [theme.breakpoints.down('md')]: {
      height: '20%',
    },
  },
  imageText: {
    position: 'absolute',
    top: '25rem',
    [theme.breakpoints.down('md')]: {
      top: '19rem',
      fontSize: 'x-large',
    },
    left: '20%',
    transform: 'translate(-50%, -50%)',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  image: {
    borderRadius: '3px',
    maxWidth: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    <div>
    <Grid container justify="center" spacing={1} alignContent="center">
      <Grid item>
        <Box className={classes.outerDiv}>
          <img className={classes.image} src={contactImg} alt={"contact us"}/>
          <Typography className={classes.imageText} variant="h2">Contact Us</Typography>
        </Box>
      </Grid>
      </Grid>
      <Grid container style={{marginTop: '1rem', marginBottom: '2rem'}} justify="center" alignItems="flex-start" spacing={2}>
        <Grid item xs={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" component="h2">Gagan Shipping Services</Typography>
              <Typography gutterBottom variant="body2">
                  Door No: 39-9-9,
                  Tenneti Nagar, Murali Nagar,
                  Visakhapatnam – 530007.
                </Typography>
                <Typography gutterBottom variant="body2">
                  Telephone: +91-891–2540468
                  </Typography>
                  <Typography gutterBottom variant="body2">
                  Mobile: +91-98661–05677
                  </Typography>
                  <Typography variant="body2">
                  Email: gagan@gaganship.com
                  </Typography>
                  <Typography variant="body2">
                  crew@gaganship.com
                  </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card variant="outlined">
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                  Contact Persons
              </Typography>
              <Typography>
                G.G. Rao
              </Typography>
              <Typography gutterBottom variant="body2">
                Mobile: +91-98661–05677
              </Typography>
              <Typography>
                G.S.P. Kumar
              </Typography>
              <Typography gutterBottom variant="body2">
                Mobile: +91-93479-53664
              </Typography>
              <Typography>
                G. Kushal Vivek
              </Typography>
              <Typography variant="body2">
                Mobile: +91-81434-71234
              </Typography>
            </CardContent>
          </Card>
        </Grid>
    </Grid>
    </div>
  );
}

export default Contact;