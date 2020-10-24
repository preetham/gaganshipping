import React from 'react';
import { List,
  ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

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


export default function Husbandry() {
  return (
    <List>
      {/* <ListItem>
        <ListItemText primary="Giving top priority for the 
        time and money are key considerations of masters,
        owners and operators. Our ships supply services operate
        24/7 with a standby for emergency response and management support.">
        </ListItemText>
      </ListItem>
      <ListItem>
        <Typography variant="h6">
          We offer and arrange the following services:
        </Typography>
      </ListItem> */}
      {services && services.length > 0 && 
        services.map((text, index) => {
          return (
            <ListItem key={index}>
              <ListItemIcon><ArrowRightIcon/></ListItemIcon>
              <ListItemText primary={text}>
              </ListItemText>
            </ListItem>
          );
      })}
    </List>
  );
}