import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import pizza from "../../src/images/pizza.jpg";
import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton, Input } from '@mui/material';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useNavigate } from "react-router-dom";

export default function FCard() {
    const navigate = useNavigate();
    const handleOnclickDetail = (id) => {
      navigate("/detail");
    };
  return (
    <Card sx={{ width: 210, height: 230, marginBottom: "50px" }}>
      <CardActionArea>
        <CardMedia
          onClick={() => handleOnclickDetail()}
          component="img"
          // width="170"
          height="100"
          image={pizza}
          alt="green iguana"
          style={{ border: "1px solid black" }}
        />
        <CardContent
          style={{
            border: "1px solid black",
            height: 130,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            onClick={() => handleOnclickDetail()}
            style={{ border: "1px solid black" }}
          >
            <Typography>food name</Typography>
          </div>
          <div
            style={{
              border: "1px solid black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography color="text.secondary">catagories</Typography>
            <Typography variant="body2" color="text.secondary">
              price
            </Typography>
          </div>
          <div style={{ border: "1px solid black" }}>
            <Typography variant="body2" color="text.secondary">
              30 lê văn sĩ phường 11 quận 3 hcm 
            </Typography>
          </div>
          <div
            style={{
              border: "1px solid black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                border: "1px solid black",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <IconButton aria-label="add to favorites">
                <FavoriteBorderIcon style={{ fontSize: 15 }} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon style={{ fontSize: 15 }} />
              </IconButton>
            </div>
            <div
              style={{
                border: "1px solid black",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <IconButton aria-label="share">
                <RemoveCircleOutlineIcon style={{ fontSize: 17 }} />
              </IconButton>
              {/* <Input style={{ width: 17, height: 17, fontSize: 17 }} defaultValue="2" /> */}
              <Typography variant="body2" color="text.secondary">
                2
              </Typography>
              <IconButton aria-label="share">
                <AddCircleOutlineIcon style={{ fontSize: 17 }} />
              </IconButton>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}



