import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const classNames = require('classnames');

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: '10px',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const CustomCard = (props) => {
  const {
    headingClasses,
    contentClasses,
    cardClasses,
    cardMediaClasses,
    cardContentClasses,
    cardActionClasses,
    viewButtonClasses,
    editButtonClasses,
    viewAction,
    editAction,
    cardHeading,
    cardSubHeading,
    img,
  } = props;
  const classes = useStyles();

  return (
    <Card className={classNames(classes.card, cardClasses)}>
      <CardMedia
        className={classNames(classes.cardMedia, cardMediaClasses)}
        image={img ? img : 'https://source.unsplash.com/random'}
        title="Image title"
      />
      <CardContent
        className={classNames(classes.cardContent, cardContentClasses)}>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={headingClasses}>
          {cardHeading ? cardHeading : 'Heading'}
        </Typography>
        <Typography className={contentClasses}>
          {cardSubHeading
            ? cardSubHeading
            : 'This is a media card. You can use this section to describe the content.'}
        </Typography>
      </CardContent>
      <CardActions className={cardActionClasses}>
        <Button
          size="small"
          color="primary"
          className={viewButtonClasses}
          onClick={() => viewAction(cardHeading, cardSubHeading)}>
          View
        </Button>
        <Button
          size="small"
          color="primary"
          className={editButtonClasses}
          onClick={() => editAction(props)}>
          Edit
        </Button>
        <Button>
          Test
        </Button>
      </CardActions>
    </Card>
  );
};

export default CustomCard;
