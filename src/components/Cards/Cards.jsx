import React from "react";

import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";

export default function Cards({
  data: { confirmed, recovered, deaths, lastUpdate },
}) {
  if (!confirmed) {
    return "Loading...";
  }

  let cardsObject = [
    {
      status: "Infected",
      number: confirmed.value,
      discription: "Number of active cases",
    },
    {
      status: "Recovered",
      number: recovered.value,
      discription: "Number of recovered cases",
    },
    {
      status: "Deathes",
      number: deaths.value,
      discription: "Number of deaths",
    },
  ];

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {cardsObject.map((card, i) => (
          <Grid
            key={i}
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.recovered)}
          >
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                {" "}
                {card.status}{" "}
              </Typography>
              <Typography variant="h5">
                {" "}
                <CountUp
                  start={0}
                  end={card.number}
                  duration={2}
                  separator=","
                />{" "}
              </Typography>
              <Typography color="textSecondary">
                {new Date(lastUpdate).toDateString()}
              </Typography>
              <Typography variant="body2"> {card.discription} </Typography>
            </CardContent>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
