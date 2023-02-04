

import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { map } from "lodash";



export default function Dropdown({ dropdownFor = "ALL_WALLETS" }) {
 


  const dropdownTypes = [
    {
      type: "TOKEN_PRICES",
      name: "Token Prices",
      color: "black",
      backgroundColor: "white",
      borderColor: "#D6D6D6",
      options: [
        "Current price",
        "Transaction time price",
        "End of month",
        "Beginning of month",
        "30 days average",
        "20 days average",
        "15 days average",
        "10 days average",
        "5 days average",
      ],
    },
    {
      type: "ALL_NETWORKS",
      name: "All Networks",
      color: "black",
      backgroundColor: "white",
      borderColor: "#D6D6D6",
      options: ["Example 1", "Example 2", "Example 3"],
    },
    {
      type: "ALL_WALLETS",
      name: "All Wallets",
      color: "black",
      backgroundColor: "white",
      borderColor: "#D6D6D6",
      options: ["Example 1", "Example 2", "Example 3"],
    },
    {
      type: "EXPORT",
      name: "Export",
      color: "black",
      backgroundColor: "white",
      borderColor: "#D6D6D6",
      options: ["Example 1", "Example 2", "Example 3"],
    },
    {
      type: "LABELS",
      name: "Labels",
      color: "greylish",
      backgroundColor: "greylish",
      borderColor: "greylish",
      options: [ "Blockchain", "Wallet", "Token", "Budget"],
    },
    {
      type: "TOKENS",
      name: "Tokens",
      color: "greylish",
      backgroundColor: "greylish",
      borderColor: "greylish",
      options: [ "Blockchain", "Wallet"],
    },
  ];

  const [dropdownType, setDropdownType] = useState(
    dropdownTypes.find((e) => e.type == dropdownFor)
  );
  const [type, setType] = useState("");

  const handleChange = (event) => {
    setType(event.target.value);
    
    
  };
  return (
      <Box sx={{ minWidth: +`${dropdownFor == "LABELS" || dropdownFor == "TOKENS" ? 80 : 110}`, ml: 1  , fontWeight: 600}}>
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label" className="text-xs font-semibold font-sans flex items-center ">
            {/* translate-x-3 translate-y-[7px] */}
            {dropdownType.type==="EXPORT" && <img src={"/icons/export-icon.svg" } alt="refresh" className="w-3 h-3 mr-2"/>}
            {dropdownType.name}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label={dropdownType.name}
            style={{ height: "30px" }} 
            inputProps={{MenuProps: {disableScrollLock: true}}}
            onChange={handleChange}
            
            className={`text-sm bg-${dropdownType.backgroundColor}`}
          >
            {map(dropdownType.options, (option, index) => {
              return (
                <MenuItem value={index} key={index} className={`font-semibold font-sans ${dropdownFor == "LABELS" || dropdownFor == "TOKENS" ? 'text-sm' : 'text-xs'}`}>
                  {option}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
  );
}
