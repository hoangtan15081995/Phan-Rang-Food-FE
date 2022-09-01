import * as React from 'react';
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import pizza from "../../src/images/pizza.jpg";
import Typography from '@mui/material/Typography';
import { CardActionArea, IconButton, Input } from '@mui/material';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useNavigate } from "react-router-dom";
import FRating from './rating/Rating';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { setFoodToCart } from "../features/shoppingCart/shoppingCartSlice";
import { useDispatch, useSelector } from "react-redux";
import TDrawer from './drawer';
import { useLocation } from 'react-router-dom';

export default function FCard({ food }) {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
    // const [favorite, setFavorite] = useState(false);
  const { cartList, clearAll } = useSelector((state) => state.cart);
  const [shoppingCart, setShoppingCart] = useState(false);
    // console.log(clearAll);
    
    // useEffect(() => {
    //   setShoppingCart(false);
    // }, [clearAll]);
  
  let findFood = cartList.find((cart) => cart.id === food.id)
    // if (!findFood) {setShoppingCart(false)}
     
    

  const handleOnclickDetail = (shoppingCart) => {
      navigate("/detail");
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    };
  
  const handleShoppingCart = (food) => {
      // setShoppingCart(!shoppingCart);
      dispatch(setFoodToCart(food));
      
  }
  
  return (
    <Card sx={{ width: 210, height: 230, marginRight: location.pathname === "/" ? "20px" : "0px", marginBottom: location.pathname === "/" ? "0px" : "20px",  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}>
      <CardActionArea>
        <CardMedia
          onClick={() => handleOnclickDetail()}
          component="img"
          // width="170"
          height="100"
          image={food.image}
          alt={food.name}
          // style={{ border: "1px solid black" }}
        />
        <CardContent
          style={{
            // border: "1px solid black",
            height: 130,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            onClick={() => handleOnclickDetail()}
            // style={{ border: "1px solid black" }}
          >
            <Typography>{food.name}</Typography>
          </div>
          <div
            style={{
              // border: "1px solid black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography color="text.secondary">{food.catagory}</Typography>
            <Typography variant="body2" color="text.secondary">
              {food.price}
            </Typography>
          </div>
          <div
          // style={{ border: "1px solid black" }}
          >
            <Typography variant="body2" color="text.secondary">
              {food.address}
            </Typography>
          </div>
          <div
            style={{
              // border: "1px solid black",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                // border: "1px solid black",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* <IconButton aria-label="add to favorites" onClick={() => setFavorite(!favorite)}>
                {favorite ? <FavoriteIcon style={{ fontSize: 15, color: 'red' }} /> : <FavoriteBorderIcon style={{ fontSize: 15 }} /> }
              </IconButton> */}
              <FRating rating={food.rating} />
            </div>
            <div
              style={{
                // border: "1px solid black",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <IconButton aria-label="add to card" onClick={()=>handleShoppingCart(food)}>
                {findFood ? <ShoppingCartIcon style={{ fontSize: "20px", color: "green" }} /> : <ShoppingCartIcon style={{ fontSize: "20px" }} />}
              </IconButton>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}



