import * as React from "react";
import { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, NavLink } from "react-router-dom";
import { Avatar, Button, styled, Tab, Tabs, Tooltip } from "@mui/material";
import { tabsClasses } from "@mui/material/Tabs";
import logo from "../../images/logo.png";
import ninhthuan from "../../images/ninhthuan.png";
import avatar from "../../images/avatar.png";
import "./MainHeader.css";
import { motion } from "framer-motion";
import SelectMenu from "../../components/selectMenu";
import Badges from "../../components/badge"
import SearchIcon from "@mui/icons-material/Search";
import TDrawer from "../../components/drawer";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {setLocation} from "../../features/location/locationSlice"
import FSearch from "../../components/Search";


export default function MainHeader() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [active, setActive] = useState("All");
  // const [pdr, setPdr] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [value, setValue] = React.useState("one");

  const accessToken = window.localStorage.getItem("user");
  // console.log(accessToken);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { locationPathname } = useSelector((state) => state.location);
  // console.log(locationPathname, "redux");

  // console.log(active, "active");
  // console.log(pdr);
  useEffect(() => {
    dispatch(setLocation(location.pathname));
  }, [location.pathname]);
  
   useEffect(() => {
      switch (locationPathname) {
        case "/":
          setValue("one");
          break;
        case "/rice":
           setValue("two");
          break;
        case "/noodleSoup":
           setValue("three");
          break;
        case "/porridge":
           setValue("four");
          break;
        case "/hotpot":
           setValue("five");
          break;
        case "/juice":
           setValue("six");
          break;
        case "/milktea":
           setValue("seven");
          break;
        case "/coffee":
           setValue("eight");
          break;
        default:
          break;
      }
   }, [locationPathname]);
  
  const options = [
    { id: "one", option: "All", active: false },
    { id: "two", option: "Cơm", active: false },
    { id: "three", option: "Phở", active: false },
    { id: "four", option: "Cháo", active: false },
    { id: "five", option: "Lẩu", active: false },
    { id: "six", option: "Nước ép", active: false },
    { id: "seven", option: "Trà sữa", active: false },
    { id: "eight", option: "Cà phê", active: false },
  ];

  const handleClickOption = (option) => {
    setActive(option.option);
    switch (option.option) {
      case "All":
        navigate("/");
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        })
        break;
      case "Cơm":
        navigate("/");
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        // navigate("/rice");
        break;
      case "Phở":
        navigate("/");
         window.scrollTo({
           top: 640,
           behavior: "smooth",
         });
        // navigate("/noodleSoup");
        break;
      case "Cháo":
        navigate("/");
        window.scrollTo({
          top: 1280,
          behavior: "smooth",
        });
        // navigate("/porridge");
        break;
      case "Lẩu":
        navigate("/");
        // navigate("/hotpot");
        break;
      case "Nước ép":
        navigate("/");
        // navigate("/juice");
        break;
      case "Trà sữa":
        navigate("/");
        // navigate("/milktea");
        break;
      case "Cà phê":
        navigate("/");
        // navigate("/coffee");
        break;
      default:
        break;
    }
  };
  const handleOpenUserMenu = (event) => {
    // setPdr(true);
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (setting) => {
    // setPdr(false);
    const from = location.pathname || "/";
    switch (setting) {
      case "Profile":
        navigate("/profile");
        break;
      case "Order":
        navigate("/order");
        break;
      case "Login":
        navigate("/login");
        break;
      case "Logout":
        navigate(from, { replace: true });
        window.localStorage.removeItem("user")
        break;
      default:
        break;
    }
    setAnchorElUser(null);
  };

  const settings = ["Profile", "Order", "Logout"];
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -4,
      top: -5,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  // const setPdrSelectMenu = (condition) => {
  //   setPdr(condition);
  // }

  return (
    <div className="container-header">
      <div className="container">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              // border: "1px solid black",
              height: 50,
              width: 100,
            }}
          >
            <IconButton
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
                navigate("/");
                setValue("one");
              }}
              style={{ width: "auto", height: "auto" }}
            >
              <motion.img
                whileTap={{ scale: 0.7 }}
                src={ninhthuan}
                alt="logo"
                width="35px"
                height="35px"
              />
            </IconButton>
            <h6>85 Food</h6>
          </div>
          <div
            style={{
              width: 135,
              display: "flex",
              justifyContent: "center",
              // border: "1px solid black",
            }}
          >
            <SelectMenu />
          </div>
          <div>
            <Box
              sx={{
                width: 400,
                // bgcolor: "background.paper",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="secondary tabs example"
                sx={{
                  [`& .${tabsClasses.scrollButtons}`]: {
                    "&.Mui-disabled": { opacity: 0.3 },
                  },
                }}
              >
                {/* <a href="rice-page-food">Cơm</a>
                <a href="noodleSoup-page-food">Phở</a>
                <a href="porridge-page-food">Cháo</a> */}

                {options.map((option) => {
                  return (
                    <Tab
                      // style={{ width: 5, height: 5, fontSize: 11 }}
                      onClick={() => handleClickOption(option)}
                      key={option.id}
                      value={option.id}
                      label={option.option}
                    />
                  );
                })}
              </Tabs>
            </Box>
          </div>
        </div>
        <div>
          <FSearch />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            // border: "1px solid black",
            // marginRight: pdr ? "10px" : "0px",
            // marginLeft: 250,
          }}
        >
          <div>
            <TDrawer />
          </div>
          <div>
            <Tooltip title="Open settings">
              <IconButton
                style={{ width: "auto", height: "auto", marginLeft: "10px" }}
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
                <motion.img
                  whileTap={{ scale: 0.8 }}
                  alt="userProfile"
                  src={avatar}
                  width="35px"
                  height="35px"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "40px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {accessToken ? (
                settings.map((setting) => (
                  <MenuItem
                    key={setting}
                    onClick={() => handleCloseUserMenu(setting)}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))
              ) : (
                <MenuItem
                  key="Login"
                  onClick={() => handleCloseUserMenu("Login")}
                >
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
              )}
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}

            // {
            //   options.map((option) => {
            //     return (
            //       <div
            //         style={{
            //           display: "flex",
            //           alignItems: "center",
            //           borderBottom:
            //             option.option === active ? "2px solid orange" : "",
            //           height: 70,
            //         }}
            //       >
            //         {/* {console.log(option.option, "option")} */}
            //         <IconButton
            //           onClick={() => handleClickOption(option)}
            //           key={option.id}
            //           style={{ width: "auto", height: "auto" }}
            //         >
            //           <Typography
            //             color={option.option === active ? "orange" : "black"}
            //           >
            //             {option.option}
            //           </Typography>
            //         </IconButton>
            //       </div>
            //     );
            //   });
            // }

