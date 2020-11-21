import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import portImg from '../static/port-banner.webp';

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 'bold',
  },
  quote: {
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  textBold: {
    fontWeight: 'bold',
  },
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
    top: '20rem',
    [theme.breakpoints.down('md')]: {
      top: '16rem',
      fontSize: 'x-large',
    },
    [theme.breakpoints.down('sm')]: {
      top: '20rem',
      fontSize: '1.3rem',
    },
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  imageSubtitle: {
    position: 'absolute',
    top: '30rem',
    [theme.breakpoints.down('md')]: {
      top: '23rem',
      fontSize: '1rem',
    },
    [theme.breakpoints.down('sm')]: {
      top: '25rem',
      fontSize: '0.7rem',
    },
    left: '50%',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#000',
    color: '#fff',
    letterSpacing: '0.2rem',
    fontWeight: 'lighter',
  },
  image: {
    borderRadius: '3px',
    maxWidth: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
}));


const quote = `"Whether you're a vessel
  Owner/Disponent Owner/Operator looking for quality shipping services,
  a market leader in need of a most competitive, timely and reliable services,
  or in a line of marine operations seeking world-class support services, think GSS."`

const p1 = `A name with a reputation in the shipping agency
  and it’s allied businesses. This company has been established by a qualified person
  in the shipping industry, besides serving over three decades in India’s leading shipping company
  serving the nation globally over 100 years.`
const p2 = `A hallmark of the company is the ability to keep to its
  professional commitments and the reliability it has
  towards the global shipping industry. The founder leadership style is
  based on a hands-on experience with MBA in Shipping & Port Management,
  Member in Narottam Morarjee Institute of Shipping, Mumbai and
  also holds a Rule 8 Certificate to act as ‘Customs House Agent’ issued by Indian Customs.`
const p31 = `With years of strong presence in the Indian market,
  equipped with professionals & expertise `
const p32 = ` is able to
  traverse a steep growth graph in terms of volumes of businesses.
  A pure professional in action when it comes to finding solutions
  for your vessels movements, we extend our services and ensure safe
  handling of your Dry Bulk/Break Bulk/General Cargo and Containerised Cargoes.`
const p41 = `We at `
const p42 = ` believe in commitment to our customers in terms of services
  and our mission is to go that extra mile to ensure cent percent customer satisfaction`

function About() {
  const classes = useStyles();
  return (
    <Box display="grid">
    <Box paddingBottom={3} className={classes.outerDiv}>
      <img className={classes.image} alt={classes.image} src={portImg}/>
      <Typography className={classes.imageText} variant="h2">India's leading shipping company</Typography>
      <Typography variant="h5" className={classes.imageSubtitle}>
        A name with a reputation in the shipping agency and it’s allied businesses
      </Typography>
    </Box>
    <Grid container justify="center" alignItems="center">
      <Grid item>
      </Grid>
      <Grid item >
          <Typography align="center" style={{fontWeight: "bold"}} variant="h4">GAGAN SHIPPING SERVICES</Typography>
          <Box p={3}>
            <Typography className={classes.quote} align="center" variant="subtitle1">{quote}</Typography>
          </Box>
          <Typography align="center">{p1}</Typography>
          <Box p={3}>
          <Typography align="center">
            {p2}
          </Typography>
          </Box>
          <Box p={3}>
            <Typography align="center">
              {p31}
              <Typography component="span" align="center" className={classes.textBold}>GSS</Typography>
              {p32}
            </Typography>
          </Box>
          <Box p={3}>
            <Typography align="center">
              {p41}
              <Typography component="span" align="center" className={classes.textBold}>GSS</Typography>
              {p42}
            </Typography>
          </Box>
      </Grid>
    </Grid>
    </Box>
  );
}

export default About;