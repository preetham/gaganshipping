import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import crewHandlingImg from '../static/crew-handling.webp';
import portAgencyImg from '../static/port-agency.webp';
import husbandryImg from '../static/husbandry.webp';
import overheadImg from '../static/overhead-ship.webp';
import charteringImg from '../static/chartering.jpg';
import bunkeringImg from '../static/bunkering.jpg';
import { Box, Card, CardActionArea, CardContent,
  CardMedia, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
  },
  image: {
    borderRadius: '3px',
    maxWidth: '100%',
    height: 'auto',
    objectFit: 'cover',
  },
  imageText: {
    position: 'absolute',
    top: '20rem',
    [theme.breakpoints.down('md')]: {
      top: '16rem',
    },
    [theme.breakpoints.down('sm')]: {
      top: '21rem',
      fontSize: '1.6rem',
    },
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  imageSubtitle: {
    position: 'absolute',
    top: '25rem',
    [theme.breakpoints.down('md')]: {
      top: '24rem',
    },
    [theme.breakpoints.down('sm')]: {
      top: '28rem',
      fontSize: '1rem',
    },
    left: '50%',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#000',
    color: '#fff',
    letterSpacing: '0.2rem',
    fontWeight: 'lighter',
  },
  grid: {
    height: '25%',
  },
  outerDiv: {
    width: '100%',
    display: 'grid',
    height: '40%',
    [theme.breakpoints.down('md')]: {
      height: '20%',
    },
    [theme.breakpoints.down('sm')]: {
      height: '10%',
    },
  }
}));

const cardData = [
  {
    thumbnail: crewHandlingImg,
    title: 'Crew Handling Services',
    content: `The personalized attention from the
      movement of the arrival of the crew members at
      our airports until the effective boarding passing
      through the transportation to the port to safely
      board the vessel for incoming crew.`,
  },
  {
    thumbnail: portAgencyImg,
    title: 'Port Agency Services',
    content: `We provide agency services and shipping
      expertise to local and foreign ship owning, trading,
      and industry interests. We ensure vessels a fast turnaround,
      covering bunkering, stores, spares and repairs, cash advances,
      attending to crew change and timely support of all other
      required activities with maximum efficiency at appropriate cost.`
  },
  {
    thumbnail: husbandryImg,
    title: 'Husbandry Services',
    content: `Giving top priority for the time and money are key
      considerations of masters, owners and operators,
      our ships supply services operates 24/7 with a standby
      for emergency response and management support.`
  },
  {
    thumbnail: charteringImg,
    title: 'Chartering',
    content: `We trace out the cargoes available in Indian Market
      to export out of India and support the Ship
      Owners/Disponent Owners for fixing of
      their vessels to carry out these cargoes.`,
  },
  {
    thumbnail: bunkeringImg,
    title: 'Bunkering',
    content: `We are providing Bunkering services at port
      of Visakhapatnam & Gangavaram in East Coast Ports of India.
      We make sure to replenish our customers with world class companies
      to supply required fuels, lubricants with an internationally approved standard norm.`,
  },
]

export default function Home() {
  const classes = useStyles();
  return (
    <Box display="grid">
      <Box display="none">
        <a href="https://commons.wikimedia.org/wiki/File:Two_bunkering_tankers.jpg">The Great Stahl</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a>, via Wikimedia Commons
      </Box>
      <Box paddingBottom={3} className={classes.outerDiv}>
          <img className={classes.image} alt={classes.image} src={overheadImg}/>
          <Typography className={classes.imageText} variant="h2">A Unique Service Offering</Typography>
          <Typography variant="h5" className={classes.imageSubtitle}>
            The most competitive, timely and reliable services
          </Typography>
      </Box>
      <Grid container justify="center" spacing={2}>
        {cardData && cardData.length > 0 && cardData.map((d, index) => 
          <Grid item key={index} style={{display: 'flex'}}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={d.title}
                  height="140"
                  title={d.title}
                  src={d.thumbnail}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {d.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {d.content}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};