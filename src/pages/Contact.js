import React from 'react';
import { Grid, Divider, Typography, Link, Box } from '@material-ui/core';
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
    <Grid container justify="center" spacing={2} alignContent="center">
      <Grid item>
        <Box className={classes.outerDiv}>
          <img className={classes.image} src={contactImg} alt={"contact us"}/>
          <Typography className={classes.imageText} variant="h2">Contact Us</Typography>
        </Box>
      </Grid>
      </Grid>
      <Grid container justify="center" spacing={2} alignContent="center">
        <Grid item>
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
        </Grid>
        <Grid item>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item>
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
        </Grid>
    </Grid>
    </div>
  );
}

export default Contact;