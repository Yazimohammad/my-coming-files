import { Card, CardContent, Button } from "@mui/material";
import React, { useState } from "react";

export const Footer = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Card style={{ width: "500px", textAlign: "center" }}>
        <CardContent>
          <h1>Counter</h1>
          <Button
            variant="outlined"
            onClick={() => count < 10 && setCount(count + 1)}
          >
            Increament
          </Button>
          <h1> Count:{count}</h1>
          <Button
            variant="outlined"
            color="error"
            onClick={() => count > 0 && setCount(count - 1)}
          >
            Decreament
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
