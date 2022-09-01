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
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {setLocation} from "../../features/location/locationSlice"
import FSearch from "../../components/Search";


export default function MainHeader() {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [active, setActive] = useState("Cơm");
  const [search, setSearch] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [value, setValue] = useState("one");

  const accessToken = window.localStorage.getItem("accessToken");
  // console.log(search)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  {
      let position = document.getElementById("container-header");

      window.addEventListener("scroll", function (event) {
        let scroll_y = this.scrollY;
        // console.log(scroll_y);
        if (scroll_y < 230) {
          setValue("one");
        }
        if (scroll_y > 230) {
          setValue("two");
        }
        if (scroll_y > 540) {
          setValue("three");
        }
        if (scroll_y > 840) {
          setValue("four");
        }
        if (scroll_y > 1140) {
          setValue("five");
        }if (scroll_y > 1440) {
          setValue("six");
        }
        if (scroll_y > 1740) {
          setValue("seven");
        }
      });
  } 
  
  const { locationPathname } = useSelector((state) => state.location);
  // console.log(locationPathname, "redux");
  // console.log(value)

  // console.log(active, "active");
  useEffect(() => {
     switch (value) {
       case "one":
         dispatch(setLocation("rice"));
         break;
       case "two":
         dispatch(setLocation("noodleSoup"));
         break;
       case "three":
         dispatch(setLocation("porridge"));
         break;
       case "four":
         dispatch(setLocation("hotpot"));
         break;
       case "five":
         dispatch(setLocation("juice"));
         break;
       case "six":
         dispatch(setLocation("milktea"));
         break;
       case "seven":
         dispatch(setLocation("coffee"));
         break;
       default:
         break;
     }
  }, [value]);
  
  useEffect(() => {
    //  window.scrollTo({
    //    top: 681,
    //    behavior: "smooth",
    //  });
    
  }, []);
  
  const options = [
    { id: "one", option: "Cơm", active: false },
    { id: "two", option: "Phở", active: false },
    { id: "three", option: "Cháo", active: false },
    { id: "four", option: "Lẩu", active: false },
    { id: "five", option: "Nước ép", active: false },
    { id: "six", option: "Trà sữa", active: false },
    { id: "seven", option: "Cà phê", active: false },
  ];

  const handleClickOption = (option) => {
    // debugger
    switch (option.option) {
      case "Cơm":
        // navigate("/");
        // setValueTab("rice")
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        setValue("one");
        break;
      case "Phở":
        // navigate("/noodleSoup");
        // setValueTab("noodleSoup");
        // navigate("/");
        window.scrollTo({
          top: 346.5,
          behavior: "smooth",
        });
        setValue("two");
        break;
      case "Cháo":
        // navigate("/");
        // navigate("/porridge");
        // setValueTab("porridge");
        window.scrollTo({
          top: 693,
          behavior: "smooth",
        });
        setValue("three");
        break;
      case "Lẩu":
        // navigate("/");
        // navigate("/hotpot");
        // setValueTab("hotpot");
        window.scrollTo({
          top: 1039.5,
          behavior: "smooth",
        });
        setValue("four");
        break;
      case "Nước ép":
        // navigate("/");
        // navigate("/juice");
        // setValueTab("juice");
        window.scrollTo({
          top: 1386,
          behavior: "smooth",
        });
        setValue("five");
        break;
      case "Trà sữa":
        // navigate("/");
        // navigate("/milktea");
        // setValueTab("milktea");
        window.scrollTo({
          top: 1732.5,
          behavior: "smooth",
        });
        setValue("six");
        break;
      case "Cà phê":
        // navigate("/");
        // navigate("/coffee");
        // setValueTab("coffee");
        window.scrollTo({
          top: 2079,
          behavior: "smooth",
        });
        setValue("seven");
        break;
      default:
        break;
    }
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (setting) => {
    const from = location.pathname || "/";
    switch (setting) {
      case "Favorite":
        navigate("/favorite");
        break;
      case "Order":
        navigate("/order");
        break;
      case "Login":
        navigate("/login");
        break;
      case "Logout":
        navigate(from, { replace: true });
        window.localStorage.removeItem("accessToken");
        break;
      default:
        break;
    }
    setAnchorElUser(null);
  };

  const settings = ["Order", "Logout"];
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -4,
      top: -5,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

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
              width: 150,
            }}
          >
            <IconButton
              onClick={() => {
                navigate("/");
                window.scrollTo({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              style={{ width: "auto", height: "auto" }}
            >
              <motion.img
                whileTap={{ scale: 1 }}
                src={ninhthuan}
                alt="logo"
                width="50px"
                height="50px"
              />
            </IconButton>
            <h5>85 Food</h5>
          </div>

          {location.pathname === "/" && (
            <div>
              <Box
                sx={{
                  width: 500,
                  // bgcolor: "background.paper",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  // textColor="secondary"
                  // indicatorColor="secondary"
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="secondary tabs example"
                  sx={{
                    [`& .${tabsClasses.scrollButtons}`]: {
                      "&.Mui-disabled": { opacity: 0.3 },
                    },
                  }}
                >
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
          )}
        </div>
        {location.pathname !== "/" &&
          location.pathname !== "/detail" &&
          location.pathname !== "/checkout" &&
          location.pathname !== "/order" && (
            <FSearch setSearch={setSearch} />
          )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // border: "1px solid black",
            // marginRight: pdr ? "10px" : "0px",
            // marginLeft: 250,
          }}
        >
          {location.pathname === "/" && (
            <IconButton
              style={{ width: "auto", height: "auto", marginLeft: "10px" }}
              onClick={() => {
                navigate("/search");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <SearchIcon style={{ fontSize: "30px" }} />
            </IconButton>
          )}

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
                  width="45px"
                  height="45px"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "50px" }}
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

