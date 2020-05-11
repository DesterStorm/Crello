import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const CrelloCard = () => {
  return(
    <Card className={classes.root}>
      <Typography gutterBottom>
        Word of the Day
      </Typography>
    </Card>
  )
}

export default CrelloCard