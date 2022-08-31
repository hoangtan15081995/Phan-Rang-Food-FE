import * as React from "react";
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
import { clearAllFoodToCart } from "../features/shoppingCart/shoppingCartSlice";

export default function TDrawer() {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cart);
  const accessToken = window.localStorage.getItem("accessToken");
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const priceFormat = (price) => {
    return `${price}.000`
  } 

  let total = 0;
  cartList.forEach((cart) => {
    total += Number(cart.price)
  }
    
  )
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
        border: "1px solid black",
        overflowX: "hidden",
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
          border: "1px solid black",
          height: "100vh",
          margin: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <IconButton
            style={{ width: 30, height: 30 }}
            onClick={toggleDrawer(anchor, false)}
          >
            x
          </IconButton>
          <IconButton onClick={() => dispatch(clearAllFoodToCart())}>
            Clear All
          </IconButton>
        </div>
        <div>
          {cartList.length === 0 ? (
            <img
              width="200px"
              alt="empty"
              src="https://www.getillustrations.com/packs/matilda-startup-illustrations/scenes/_1x/shopping,%20e-commerce%20_%20empty,%20shopping%20cart,%20items,%20products,%20zero,%20none_md.png"
            />
          ) : (
            <>
              {cartList.map((cart) => (
              <div>
                  {cart.name} {cart.price}
              </div>
              ))}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
                >
                  <p>Tổng cộng</p>
                  <p>{total}</p>
              </div>
            </>
          )}
        </div>
        <Button variant="contained" color="success">
          {" "}
          {accessToken ? "Đặt đơn" : "Đăng nhập để đặt đơn"}{" "}
        </Button>
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
            onClick={
              toggleDrawer(anchor, true)
            }
          >
            {/* {anchor} */}
            <Badges />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={
              toggleDrawer(anchor, false)
            }
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
