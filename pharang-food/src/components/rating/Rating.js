import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function FRating({rating}) {
  // const [value, setValue] = React.useState(4);

  return (
      <Rating style={{fontSize: "12px"}} name="read-only" value={rating} readOnly />
  );
}
