import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

const options = [
  "Phan Rang",
  "Ninh sơn",
  "Ninh Hải",
  "Ninh Phước",
  "Thuận Nam",
  "Thuận Bắc",
  "Bắc Ái",
];

export default function SelectMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [down, setDown] = React.useState(false);
  const open = Boolean(anchorEl);

  // const sendCondition = (condition) => {
  //   setPdrSelectMenu(condition);
  // };

  const handleClickListItem = (event) => {
    // sendCondition(true);
    setAnchorEl(event.currentTarget);
    setDown(true);
  };

  const handleMenuItemClick = (event, index) => {
    // sendCondition(false);
    setSelectedIndex(index);
    setAnchorEl(null);
    setDown(false);
  };

  const handleClose = () => {
    // sendCondition(false);
    setAnchorEl(null);
    setDown(false);
  };

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        // sx={{ bgcolor: "background.paper" }}
      >
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <ListItemText
              secondary={options[selectedIndex]}
              // secondary={options[selectedIndex]}
            />
            {down ? (
              <ArrowDropUpIcon style={{ fontSize: 15 }} />
            ) : (
              <ArrowDropDownIcon style={{ fontSize: 15 }} />
            )}
          </div>
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "lock-button",
          role: "listbox",
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            // disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
