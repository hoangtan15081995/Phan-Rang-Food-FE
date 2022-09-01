import { Outlet } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import MainFooter from "./MainFooter";
import MainHeader from "./mainHeader/MainHeader";
import AlertMsg from "../components/AlertMsg";
import { useLocation } from "react-router-dom";

function MainLayout() {
  const location = useLocation();
  return (
    <Stack sx={{ minHeight: "100vh", width: "100vw" }}>
      <MainHeader />
      <AlertMsg />
      <Outlet />

      <Box sx={{ flexGrow: 1 }} />
      {location.pathname !== "/checkout" && <MainFooter />}
      
    </Stack>
  );
}

export default MainLayout;
