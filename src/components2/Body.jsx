import { Card, Grid, CardContent, Button } from "@mui/material";
import React from "react";
import { Data } from "./Newdata";

export const Body = () => {
  return (
    <div>
      <Grid container>
        {Data.map((elem) => {
          return (
            <Grid item xs={3}>
              <Card style={{ textAlign: "center" }}>
                <CardContent>
                  <h1> {elem.title}</h1>
                  <img src={elem.img} width="250px" height="260px" />
                  <h2>{elem.Model}</h2>
                  <Button variant="contained">{elem.price}</Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
