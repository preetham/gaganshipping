import React from 'react';
import { Grid, GridList, GridListTile } from '@material-ui/core';
import images from '../modules/GalleryImages';

function Gallery() {
  return (
    <Grid container>
      <Grid item>
      <GridList cellHeight={200} cols={3}>
          {images && images.length > 0 && images.map((image, index) => (
            <GridListTile key={index}>
              <img src={image} alt={image}/>
            </GridListTile>
            ))
          }
      </GridList>
      </Grid>
    </Grid>
  );
}

export default Gallery;