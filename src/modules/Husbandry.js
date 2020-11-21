import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List,
  ListItem, ListItemText, ListItemIcon } from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const services = [
  "Receiving of Ship Spares at Airport and Clearing through Customs and placement of same onboard the vessel within short time.",
  "CTM (Cash to Master) – Be assured any payments to your Master and Crew are handled professionally with the aid of security services wherever necessary – your funds are safe with us.",
  "Supply of Fresh Water with economical costs.",
  "Supply of BA Charts, NP Publications and other publications if any.",
  "Workshop assistance for any kind of Ship Repairs within short notice.",
  "All technical assistance viz., fire extinguishers new and any kind of services maintenance, Indian Cargo gear certification with competent person etc. all services.",
  "Removal of sludge and garbage disposal.",
  "All kind of surveys i.e. P & I Surveys, Class Surveys, PSC Survey, Off/On hire Bunkers + Condition Surveys etc.",
  "Under Water Services for hull, rudder & propeller cleaning.",
  "Supply of all kind of fresh provisions, ship stores & chemicals etc.",
  "Supply of dunnage material for steel cargo, sugar and rice vessels etc.",
]

const useStyles = makeStyles((theme) => ({
  bulletIcon: {
    fontSize: 'small',
  },
}));


export default function Husbandry() {
  const classes = useStyles();
  return (
    <List>
      {services && services.length > 0 && 
        services.map((text, index) => {
          return (
            <ListItem key={index}>
              <ListItemIcon><ArrowForwardIosIcon className={classes.bulletIcon}/></ListItemIcon>
              <ListItemText primary={text}>
              </ListItemText>
            </ListItem>
          );
      })}
    </List>
  );
}