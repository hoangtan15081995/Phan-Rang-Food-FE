import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Badges from "./badge";
import { Icon, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearAllFoodToCart, DecreaseQuantity, IncreaseQuantity } from "../features/shoppingCart/shoppingCartSlice";
import ClearIcon from "@mui/icons-material/Clear";
import DeleteIcon from "@mui/icons-material/Delete";
import FCard from "./Card";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";

export default function TDrawer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartList } = useSelector((state) => state.cart);
  const accessToken = window.localStorage.getItem("accessToken");
  // const [quantity, setQuantity] = useState(1);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  // const priceFormat = (price) => {
  //   return `${price}.000`
  // }

  let total = 0;
  const handleDecrease = (id) => {
    dispatch(DecreaseQuantity(id));
  }
    const handleIncrease = (id) => {
    dispatch(IncreaseQuantity(id));
  }

  cartList && cartList.forEach((cart) => {
    total += Number(cart.price * cart.quantity);
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const toggleDrawerAndToCheckOut = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
    accessToken ? navigate("/checkout") : navigate("/login");
    
  };

  const handleCheckout = () => {
    navigate("/checkout")
  }
  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 600,
        height: "100vh",
        // border: "1px solid black",
        overflowX: "hidden",
        // overflowY: "hidden",
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          // border: "1px solid black",
          height: "100vh",
          // margin: "10px",
        }}
      >
        <div
          style={{
            // border: "1px solid black",
            position: "fixed",
            right: 0,
            top: 0,
            zIndex: 100,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "600px",
            height: "90px",
            padding: 10,
            backgroundColor: "white",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <IconButton
            style={{ width: "auto", height: "auto" }}
            onClick={toggleDrawer(anchor, false)}
          >
            <ClearIcon style={{ fontSize: 30 }} />
          </IconButton>
          <p style={{ fontSize: 25, margin: 0 }}>Giỏ đồ ăn</p>
          <IconButton
            style={{ width: "auto", height: "auto" }}
            onClick={() => {
              dispatch(clearAllFoodToCart());
            }}
          >
            {/* <p style={{ fontSize: 15, margin: 0, color: "red" }}>Clear</p> */}
            <DeleteIcon style={{ color: "red", fontSize: 30 }} />
          </IconButton>
        </div>
        <div
          style={{
            marginTop: 90,
            // border: "1px solid black",
            width: "100%",
            backgroundColor: "rgb(248, 247, 247)",
            minHeight: "100%",
          }}
        >
          {cartList.length === 0 ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "727px",
                // border: "1px solid black",
                justifyContent: "center",
              }}
            >
              <img
                width="500px"
                alt="empty"
                src="https://www.getillustrations.com/packs/matilda-startup-illustrations/scenes/_1x/shopping,%20e-commerce%20_%20empty,%20shopping%20cart,%20items,%20products,%20zero,%20none_md.png"
              />
            </div>
          ) : (
            <>
              {cartList.map((cart) => (
                <>
                  <div
                    style={{
                      // border: "1px solid black",
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      height: 90
                      // justifyContent: "space-between",
                    }}
                  >
                    <div
                      style={{
                        // border: "1px solid black",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                        width: 90,
                      }}
                    >
                      <div>
                        <IconButton
                          onClick={() => handleDecrease(cart.id)}
                          style={{ width: "auto", height: "auto" }}
                        >
                          <RemoveIcon style={{ fontSize: 20 }} />
                        </IconButton>
                      </div>
                      <div>
                        <p style={{ fontSize: 15, margin: 0 }}>
                          {cart.quantity}
                        </p>
                      </div>
                      <div>
                        <IconButton
                          onClick={() => handleIncrease(cart.id)}
                          style={{ width: "auto", height: "auto" }}
                        >
                          <AddIcon style={{ fontSize: 20 }} />
                        </IconButton>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        // border: "1px solid black",
                        alignItems: "center",
                        width: 400,
                        height: 90,
                      }}
                    >
                      <div
                        style={{
                          // width: 50,
                          // height: 50,
                          // border: "1px solid black",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: 15
                        }}
                      >
                        <img width="60px" height="60px" src={cart.image} />
                      </div>
                      <div
                        style={{
                          // width: 50,
                          // height: 50,
                          // border: "1px solid black",
                          // width: "130px",
                        }}
                      >
                        <p style={{ fontSize: 16 }}>{cart.name}</p>
                      </div>
                    </div>
                    <div
                      style={{
                        // fontSize: 10,
                        width: "100px",
                        // border: "1px solid black",
                        display: "flex",
                        justifyContent: "end",
                        paddingRight: 15
                      }}
                    >
                      <p style={{ fontSize: 15 }}>
                        {cart.price * cart.quantity}
                      </p>
                    </div>
                  </div>
                  <Divider />
                </>
              ))}
            </>
          )}
        </div>
        <div
          style={{
            // border: "1px solid black",
            width: "100%",
            position: "fixed",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "600px",
            bottom: "0px",
            height: 150,
            zIndex: 100,
            right: 0,
            backgroundColor: "white",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              // border: "1px solid black",
              height: 75,
              alignItems: "center",
              paddingRight: 20,
              paddingLeft: 20,
            }}
          >
            <p style={{ fontSize: 25 }}>Tổng cộng</p>
            <div
              style={{
                // display: "flex",
                // justifyContent: "space-between",
                width: "280px",
                // border: "1px solid black",
                height: 75,
                textAlign: "end",
                // alignItems: "center"
              }}
            >
              <p style={{ fontSize: 22 }}>{total}</p>
            </div>
          </div>
          <div
            style={{
              // border: "1px solid black",
              height: 75,
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Button
              onClick={toggleDrawerAndToCheckOut(anchor, false)}
              variant="contained"
              color="success"
              style={{ width: "560px", height: 45 }}
            >
              {accessToken ? (
                <p style={{ fontSize: 16 }}>Đặt đơn</p>
              ) : (
                <p style={{ fontSize: 16 }}>Đăng nhập để đặt đơn</p>
              )}
            </Button>
          </div>
        </div>
        {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

     

      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
      </div>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            style={{ width: "auto", height: "auto" }}
            onClick={toggleDrawer(anchor, true)}
          >
            {/* {anchor} */}
            <Badges />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
