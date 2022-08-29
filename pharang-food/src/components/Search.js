import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useLocation } from "react-router-dom";
import { IconButton } from "@mui/material";
import "./Search.css";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.04),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.08),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      // transition: "1s",
      width: "20ch",
      "&:focus": {
        // transition: "3s",s
        width: "40ch",
      },
    },
  },
}));

export default function FSearch({ setSearch }) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        console.log("enter", e);
        e.preventDefault();
      }}
    >
      <Search>
        <IconButton type="submit">
          <SearchIcon />
        </IconButton>
        <SearchIconWrapper></SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onClick={() => { navigate("/search"); window.scrollTo({top: 0, behavior: "smooth"}) }}
          onChange={(e) => console.log(e.target.value)}
        />
      </Search>
    </form>
  );
}
