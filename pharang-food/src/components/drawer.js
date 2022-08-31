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

export default function TDrawer() {
  const dispatch = useDispatch();
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
    total += Number(cart.price);
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

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 300,
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
            width: "300px",
            height: "50px",
            padding: 10,
            backgroundColor: "white",
          }}
        >
          <IconButton
            style={{ width: 30, height: 30 }}
            onClick={toggleDrawer(anchor, false)}
          >
            <ClearIcon style={{ fontSize: 20 }} />
          </IconButton>
          <p style={{ fontSize: 14, margin: 0 }}>Giỏ đồ ăn</p>
          <IconButton
            style={{ width: 30, height: 30 }}
            onClick={() => {
              dispatch(clearAllFoodToCart());
            }}
          >
            {/* <p style={{ fontSize: 15, margin: 0, color: "red" }}>Clear</p> */}
            <DeleteIcon style={{ color: "red", fontSize: 20 }} />
          </IconButton>
        </div>
        <div
          style={{
            marginTop: 50,
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
                height: "463.71px",
                justifyContent: "center",
              }}
            >
              <img
                width="200px"
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
                        width: 60,
                      }}
                    >
                      <div>
                        <IconButton onClick={()=>handleDecrease(cart.id)} style={{ width: 5, height: 5 }}>
                          <RemoveIcon style={{ fontSize: 10 }} />
                        </IconButton>
                      </div>
                      <div>
                        <p style={{ fontSize: 10, margin: 0 }}>{cart.quantity}</p>
                      </div>
                      <div>
                        <IconButton onClick={()=>handleIncrease(cart.id)} style={{ width: 5, height: 5 }}>
                          <AddIcon style={{ fontSize: 10 }} />
                        </IconButton>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        // border: "1px solid black",
                        alignItems: "center",
                        width: 180,
                        height: 50,
                      }}
                    >
                      <div
                        style={{
                          width: 50,
                          height: 50,
                          // border: "1px solid black",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img width="45px" height="40px" src={cart.image} />
                      </div>
                      <div
                        style={{
                          // width: 50,
                          // height: 50,
                          // border: "1px solid black",
                          width: "130px",
                        }}
                      >
                        <p style={{ fontSize: 10 }}>{cart.name}</p>
                      </div>
                    </div>
                    <div
                      style={{
                        fontSize: 10,
                        width: "70px",
                        // border: "1px solid black",
                        display: "flex",
                        justifyContent: "end",
                      }}
                    >
                      <p style={{ fontSize: 10 }}>{cart.price}</p>
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
            width: "300px",
            bottom: "0px",
            height: 80,
            zIndex: 100,
            right: 0,
            backgroundColor: "white",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              // border: "1px solid black",
              height: 40,
              alignItems: "center",
              paddingRight: 100,
              paddingLeft: 10,
            }}
          >
            <p style={{ fontSize: 14 }}>Tổng cộng</p>
            <p style={{ fontSize: 14 }}>{total}</p>
          </div>
          <div
            style={{
              // border: "1px solid black",
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "start",
            }}
          >
            <Button
              variant="contained"
              color="success"
              style={{ width: "280px", height: 25 }}
            >
              {accessToken ? (
                <p style={{ fontSize: 12 }}>Đặt đơn</p>
              ) : (
                <p style={{ fontSize: 12 }}>Đăng nhập để đặt đơn</p>
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
            style={{ width: "30px", height: "30px" }}
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
