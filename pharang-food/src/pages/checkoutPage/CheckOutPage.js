import { Button, Divider, IconButton, TextField } from '@mui/material';
import React, { useState, useEffect } from "react";
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
import FullProvinceData from "../../Config/vietnam-provinces.json";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { clearDelivery, setDelivery } from '../../features/deliveryAddress/deliveryAddressSlice';
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from 'react-router-dom';


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

const phoneRegExp = /([0]{1})([1-9]{1})([0-9]{8})/;

const CheckOutSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .max(10)
    .required("Phone is required"),
  province: yup.string().required("Province is required"),
  district: yup.string().required("District is required"),
  ward: yup.string().required("Ward is required"),
  address: yup.string().required("Address is required"),
});

const CheckOutPage = () => {
   const {
     control,
     handleSubmit,
     register,
     formState: { errors, isSubmitting },
   } = useForm({
     resolver: yupResolver(CheckOutSchema)
   });
  // console.log(errors);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [province, setProvince] = useState("");
  const [district, setDistrict] = useState("");
  const [ward, setWard] = useState("");
  const [address, setAddress] = useState("");
  const [blockInput, setBlockInput] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const { deliveryAddress } = useSelector((state) => state.delivery);
  // console.log(deliveryAddress);

  useEffect(() => {
    if (deliveryAddress.province !== undefined) {
      setName(deliveryAddress.name);
      setPhone(deliveryAddress.phone);
      setProvince(deliveryAddress.province);
      setDistrict(deliveryAddress.district);
      setWard(deliveryAddress.ward);
      setAddress(deliveryAddress.address);
      setBlockInput(true)
    }
    // dispatch(clearDelivery());
  }, [])
  
  const onSubmit = (data) => {
    dispatch(
      setDelivery({
        name: data.name || name,
        phone: data.phone || phone,
        province: data.province || province,
        district: data.district || district,
        ward: data.ward || ward,
        address: data.address || address,
      })
    );
    setBlockInput(true);
    console.log("ok");
  };

  const handleUpdate = () => {
    dispatch(
      setDelivery({
        name: name,
        phone: phone,
        province: province,
        district: district,
        ward: ward,
        address: address,
      })
    );
    setBlockInput(true);
    setIsEdit(false)
  }
  
  const handleCompleted = () => {
    navigate("/orderPage")
  }
  let districtCurrent = FullProvinceData.find(
    (fullProvince) => fullProvince.name === province
  );

 let wardCurrent = districtCurrent && districtCurrent.districts &&  districtCurrent.districts.find(
    (fullDistrict) => fullDistrict.name === district
  );

  const { cartList } = useSelector((state) => state.cart);
  const theme = useTheme();
  

  const handleName = (event) => {
      setName(event.target.value);
  };

  const handlePhone = (event) => {
      setPhone(event.target.value);
  };
  const handleAddress = (event) => {
      setAddress(event.target.value);
  };
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
        <Divider variant="middle" />
        <div style={{ minHeight: 400 }}>
          <div
            style={{
              width: 600,
              height: 30,
              textAlign: "start",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p style={{ margin: 10 }}>Địa chỉ nhận hàng</p>
            <Button onClick={() => { setBlockInput(false); setIsEdit(true) }}>
              <EditIcon style={{ color: "black" }} />
            </Button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              style={{
                width: 600,
                // minHeight: 400,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  marginTop: 15,
                  width: 600,
                  // border: "1px solid black",
                  // minHeight: 400,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <TextField
                    {...register("name")}
                    style={{ width: 285 }}
                    id="outlined-basic"
                    label="Tên"
                    value={name}
                    onChange={(event) => handleName(event)}
                    variant="outlined"
                    disabled={blockInput}
                    // onChange={(e) => setName(e.target.value)}
                  />
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {name ? "" : errors.name?.message}
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <TextField
                    {...register("phone")}
                    style={{ width: 285 }}
                    disabled={blockInput}
                    value={phone}
                    onChange={(event) => handlePhone(event)}
                    id="outlined-basic"
                    label="Số điện thoại"
                    variant="outlined"
                  />
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {errors.phone?.message}
                  </p>
                </div>
              </div>
              <div
                style={{
                  marginTop: 15,
                  width: 600,
                  // border: "1px solid black",
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
                      {...register("province")}
                      labelId="province-label"
                      id="province-name"
                      disabled={blockInput}
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
                    <p style={{ color: "red", fontSize: "14px" }}>
                      {province ? "" : errors.province?.message}
                    </p>
                  </FormControl>
                </div>
                {/* <InputDrop /> */}
                <div>
                  <FormControl sx={{ width: 285 }}>
                    <InputLabel id="district-label">quận, huyện</InputLabel>
                    <Select
                      {...register("district")}
                      // disabled={true}
                      labelId="district-label"
                      id="district-name"
                      disabled={blockInput}
                      value={district}
                      onChange={(event) => handleDistrict(event)}
                      input={<OutlinedInput label="quận, huyện" />}
                      MenuProps={MenuProps}
                    >
                      {districtCurrent &&
                        districtCurrent.districts &&
                        districtCurrent.districts.map((district) => (
                          <MenuItem
                            key={district.codename}
                            value={district.name}
                            // style={getStyles(name, personName, theme)}
                          >
                            {district.name}
                          </MenuItem>
                        ))}
                    </Select>
                    <p style={{ color: "red", fontSize: "14px" }}>
                      {district ? "" : errors.district?.message}
                    </p>
                  </FormControl>
                </div>
              </div>
              <div
                style={{
                  marginTop: 15,
                  width: 600,
                  // border: "1px solid black",
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
                      {...register("ward")}
                      // disabled={true}
                      labelId="ward-label"
                      id="ward-name"
                      disabled={blockInput}
                      value={ward}
                      onChange={(event) => handleWard(event)}
                      input={<OutlinedInput label="xã, phường" />}
                      MenuProps={MenuProps}
                    >
                      {wardCurrent &&
                        wardCurrent.wards &&
                        wardCurrent.wards.map((ward) => (
                          <MenuItem
                            key={ward.codename}
                            value={ward.name}
                            // style={getStyles(name, personName, theme)}
                          >
                            {ward.name}
                          </MenuItem>
                        ))}
                    </Select>
                    <p style={{ color: "red", fontSize: "14px" }}>
                      {ward ? "" : errors.ward?.message}
                    </p>
                  </FormControl>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <TextField
                    {...register("address")}
                    style={{ width: 285 }}
                    id="outlined-basic"
                    label="tên đường, số nhà"
                    variant="outlined"
                    onChange={(event) => handleAddress(event)}
                    value={address}
                    disabled={blockInput}
                  />
                  <p style={{ color: "red", fontSize: "14px" }}>
                    {address? "" : errors.address?.message}
                  </p>
                </div>
              </div>
            </div>
            {isEdit ? 
           <Button
              variant="contained"
              disabled={blockInput}
              // type="submit"
              onClick={handleUpdate}
              style={{ marginBottom: 30 }}
            >
              Cập nhật
            </Button>
              :
              <Button
              variant="contained"
              disabled={blockInput}
              type="submit"
              style={{ marginBottom: 30 }}
            >
              Xác nhận
            </Button>
            }
            
          </form>
        </div>
        <Divider variant="middle" />
        <div style={{ minHeight: 200 }}>
          <div style={{ width: 600, height: 30 }}>
            <p style={{ margin: 10 }}>Tóm tắt đơn hàng</p>
          </div>
          <div style={{ width: 600, minHeight: 170 }}>
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
                <Divider variant="middle" />
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
            // border: "1px solid black",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: 300,
              // border: "1px solid black",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              // alignItems: "center"
            }}
          >
            <p style={{ fontSize: 19, margin: 0 }}>Tổng cộng</p>
            <p style={{ fontSize: 17, margin: 0, fontWeight: "bold" }}>
              {total}
            </p>
          </div>
          <div
            style={{
              width: 300,
              // border: "1px solid black",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
            }}
          >
            <Button
              onClick={handleCompleted}
              variant="contained"
              color="success"
              style={{ width: "250px", height: 50 }}
              disabled={!blockInput}
            >
              <p style={{ fontSize: 14 }}>Đặt đơn</p>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckOutPage