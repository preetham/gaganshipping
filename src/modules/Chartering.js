import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItemText, ListItem, ListItemIcon } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
  bulletIcon: {
    fontSize: 'small',
  },
}));

export default function Chartering() {
  const classes = useStyles();
  return (
    <List>
        <ListItem>
          <ListItemIcon><ArrowForwardIosIcon className={classes.bulletIcon}/></ListItemIcon>
            <ListItemText primary="We trace out the
            cargoes available in Indian Market
            to export out of India and support the Ship
            Owners/Disponent Owners for fixing of
            their vessels to carry out these cargoes.">
            </ListItemText>
        </ListItem>
    </List>
  );
}