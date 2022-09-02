import { Divider, IconButton, TextField } from '@mui/material';
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DecreaseQuantity, IncreaseQuantity } from "../../features/shoppingCart/shoppingCartSlice";
import "./CheckOutPage.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CommonComboBox from '../../components/selectInput/CommonComboBox';
import InputDrop from '../../components/InputDrop/InputDrop';
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ProvinceData from "../../Config/provinces";
import DistrictData from "../../Config/districts";
import WardData from "../../Config/wards";
import FullProvinceData from "../../Config/vietnam-provinces.json"

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const CheckOutPage = () => {

  
  const dispatch = useDispatch();
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  let districtCurrent = FullProvinceData.find(
    (fullProvince) => fullProvince.name === province
  );
  console.log(province);
  console.log(districtCurrent);
  // console.log(districtCurrent.districts || []);

  const { cartList } = useSelector((state) => state.cart);
  const theme = useTheme();

  const handleProvince = (event) => {
    // console.log(event);
      setProvince(event.target.value);
  };
    const handleDistrict = (event) => {
      setDistrict(event.target.value);
  };
  const handleWard = (event) => {
      setWard(event.target.value);
  };

  let total = 0;
  const handleDecrease = (id) => {
      dispatch(DecreaseQuantity(id));
  };
  const handleIncrease = (id) => {
      dispatch(IncreaseQuantity(id));
    };

  cartList &&
      cartList.forEach((cart) => {
        total += Number(cart.price * cart.quantity);
      });
  return (
    <div className="checkout-page">
      <div className="checkout-info">
        <p style={{ fontSize: 25, margin: 10 }}>Thanh toán</p>
        <Divider />
        <div style={{ height: 400 }}>
          <div style={{ width: 600, height: 30, textAlign: "start" }}>
            <p style={{ margin: 10 }}>Địa chỉ nhận hàng</p>
          </div>
          <form>
            <div
              style={{
                width: 600,
                minHeight: 400,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  marginTop: 15,
                  width: 600,
                  border: "1px solid black",
                  // minHeight: 400,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <TextField
                  style={{ width: 285 }}
                  id="outlined-basic"
                  label="Tên"
                  variant="outlined"
                />
                <TextField
                  style={{ width: 285 }}
                  id="outlined-basic"
                  label="Số điện thoại"
                  variant="outlined"
                />
              </div>
              <div
                style={{
                  marginTop: 15,
                  width: 600,
                  border: "1px solid black",
                  // minHeight: 400,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                {/* <InputDrop /> */}
                <div>
                  <FormControl sx={{ width: 285 }}>
                    <InputLabel id="province-label">Tỉnh, thành phố</InputLabel>
                    <Select
                      labelId="province-label"
                      id="province-name"
                      value={province}
                      onChange={(event) => handleProvince(event)}
                      input={<OutlinedInput label="Tỉnh, thành phố" />}
                      MenuProps={MenuProps}
                    >
                      {FullProvinceData.map((province) => (
                        <MenuItem
                          key={province.codename}
                          value={province.name}
                          // style={getStyles(name, personName, theme)}
                        >
                          {province.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                {/* <InputDrop /> */}
                <div>
                  <FormControl sx={{ width: 285 }}>
                    <InputLabel id="district-label">quận, huyện</InputLabel>
                    <Select
                      // disabled={true}
                      labelId="district-label"
                      id="district-name"
                      value={district}
                      onChange={(event) => handleDistrict(event)}
                      input={<OutlinedInput label="quận, huyện" />}
                      MenuProps={MenuProps}
                    >
                      {districtCurrent && districtCurrent.districts &&  districtCurrent.districts.map(
                        (district) => (
                          <MenuItem
                            key={district.codename}
                            value={district.name}
                            // style={getStyles(name, personName, theme)}
                          >
                            {district.name}
                          </MenuItem>
                        )
                      )}
                    </Select>
                  </FormControl>
                </div>
              </div>
              <div
                style={{
                  marginTop: 15,
                  width: 600,
                  border: "1px solid black",
                  // minHeight: 400,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                {/* <InputDrop /> */}
                <div>
                  <FormControl sx={{ width: 285 }}>
                    <InputLabel id="ward-label">xã, phường</InputLabel>
                    <Select
                      disabled={true}
                      labelId="ward-label"
                      id="ward-name"
                      value={ward}
                      onChange={(event) => handleWard(event)}
                      input={<OutlinedInput label="xã, phường" />}
                      MenuProps={MenuProps}
                    >
                      {WardData.map((ward) => (
                        <MenuItem
                          key={ward.codename}
                          value={ward.name}
                          // style={getStyles(name, personName, theme)}
                        >
                          {ward.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <TextField
                  style={{ width: 285 }}
                  id="outlined-basic"
                  label="tên đường, số nhà"
                  variant="outlined"
                />
              </div>
            </div>
          </form>
        </div>
        <Divider />
        <div style={{ minHeight: 200, border: "1px solid black" }}>
          <div style={{ width: 600, height: 30, border: "1px solid black" }}>
            <p style={{ margin: 0 }}>Tóm tắt đơn hàng</p>
          </div>
          <div
            style={{ width: 600, border: "1px solid black", minHeight: 170 }}
          >
            {cartList.map((cart) => (
              <>
                <div
                  style={{
                    // border: "1px solid black",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    height: 90,
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
                      <p style={{ fontSize: 15, margin: 0 }}>{cart.quantity}</p>
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
                        marginRight: 15,
                      }}
                    >
                      <img width="60px" height="60px" src={cart.image} />
                    </div>
                    <div
                      style={
                        {
                          // width: 50,
                          // height: 50,
                          // border: "1px solid black",
                          // width: "130px",
                        }
                      }
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
                      paddingRight: 15,
                    }}
                  >
                    <p style={{ fontSize: 15 }}>{cart.price * cart.quantity}</p>
                  </div>
                </div>
                <Divider />
              </>
            ))}
          </div>
        </div>
        {/* <Divider />
        <div style={{ height: 200, border: "1px solid black" }}>
          Chi tiết thanh toán
        </div> */}
      </div>

      <div
        style={{
          width: 1920,
          height: 90,
          backgroundColor: "white",
          position: "fixed",
          bottom: 0,
          left: 0,
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 0px 8px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 600,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>tổng cộng : {total}</div>
          <div>đặt đơn</div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutPage