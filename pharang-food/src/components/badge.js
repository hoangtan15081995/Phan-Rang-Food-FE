import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 0,
    top: 0,
    width: 30,
    height: 30,
    fontSize: 14,
    border: `2px solid ${theme.palette.background.paper}`,
    // padding: "11px 11px",
    borderRadius: "50%"
  },
}));

export default function Badges() {
  const { cartList } = useSelector((state) => state.cart);
  return (
    <StyledBadge badgeContent={cartList.length} color="success">
      <ShoppingCartIcon style={{fontSize: "30px"}} />
    </StyledBadge>
  );
}
