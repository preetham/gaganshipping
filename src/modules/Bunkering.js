import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItemText, ListItemIcon, ListItem } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
  bulletIcon: {
    fontSize: 'small',
  },
}));

export default function Bunkering() {
  const classes = useStyles();
  return (
    <List>
        <ListItem>
          <ListItemIcon><ArrowForwardIosIcon className={classes.bulletIcon}/></ListItemIcon>
            <ListItemText primary="We are providing Bunkering services at port
            of Visakhapatnam & Gangavaram in East Coast Ports of India.
            We make sure to replenish our customers with world class companies
            to supply required fuels, lubricants with an internationally approved standard norm.">
            </ListItemText>
        </ListItem>
    </List>
  );
}