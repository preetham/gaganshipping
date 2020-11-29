import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItemText, ListItem, ListItemIcon } from '@material-ui/core';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
  bulletIcon: {
    fontSize: 'small',
    color: 'black',
  },
}));

export default function Chartering() {
  const classes = useStyles();
  return (
    <List>
        <ListItem>
          <ListItemIcon><FiberManualRecordIcon className={classes.bulletIcon}/></ListItemIcon>
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