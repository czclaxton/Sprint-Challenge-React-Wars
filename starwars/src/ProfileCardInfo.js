import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const Wrapperdiv = styled.div`
  box-shadow: 0 1px 4px rgba(255, 255, 255, 0.5),
    0 0 40px rgba(255, 255, 255, 0.3) inset;
  display: flex;
  justify-content: center;
  margin: 30px auto;
  width: 325px;
`;

export default function ProfileCardInfo(props) {
  const classes = useStyles();

  return (
    <Wrapperdiv>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://i.imgur.com/MccmTOd.jpg"
            title="starwars"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Gender: {props.gender}
              <br />
              Eye Color: {props.eye_color}
              <hr />
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Star Wars is an American epic space-opera media franchise...
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Wrapperdiv>
  );
}
