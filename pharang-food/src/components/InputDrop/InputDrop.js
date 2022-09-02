import * as React from "react";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ProvinceData from "../../Config/provinces";


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

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function InputDrop() {
  console.log(ProvinceData);
  const theme = useTheme();
  const [personName, setPersonName] = useState("");

  const handleChange = (event) => {
    setPersonName( event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ width: 285 }}>
        <InputLabel id="demo-multiple-name-label">Tỉnh, thành phố</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={personName}
          onChange={(event) => handleChange(event)}
          input={<OutlinedInput label="Tỉnh, thành phố" />}
          MenuProps={MenuProps}
        >
          {ProvinceData.map((province) => (
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
  );
}
