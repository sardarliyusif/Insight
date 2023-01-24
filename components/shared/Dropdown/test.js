import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { map } from "lodash";

export default function BasicSelect({ dropdownFor = 'ALL_WALLETS' , sx}) {
  
    const dropdownTypes = [
        {
          type: "TOKEN_PRICES",
          name: "Token Prices",
          color: "black",
          backgroundColor: 'white',
          borderColor: '#D6D6D6',
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
          backgroundColor: 'white',
          borderColor: '#D6D6D6',
          options: ["Example 1", "Example 2", "Example 3"],
        },
        {
          type: "ALL_WALLETS",
          name: "All Wallets",
          color: "black",
          backgroundColor: 'white',
          borderColor: '#D6D6D6',
          options: ["Example 1", "Example 2", "Example 3"],
        },
        {
          type: "LABELS",
          name: "Labels",
          color: "greylish",
          backgroundColor: 'greylish',
          borderColor: 'greylish',
          options: ["Labels","Blockchain", "Wallet", "Token", "Budget"],
        },
        {
          type: "BLOCKCHAIN",
          name: "Blockhain",
          color: "greylish",
          backgroundColor: 'greylish',
          borderColor: 'greylish',
          options: ["Token","Blockchain", "Wallet"],
        },
      ];

  const [dropdownType, setDropdownType] = useState(
    dropdownTypes.find((e) => e.type == dropdownFor)
  );
  const [type, setType] = useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };
  console.log(dropdownType);
  return (
    
      <Box sx={{ minWidth: 120  }}>
      <FormControl className="w-full" >
        <InputLabel id="demo-simple-select-label" className="text-sm">{dropdownType.name}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={type}
          label={dropdownType.name}
          sx={sx}
          onChange={handleChange}
          className='text-sm'
        >
            {map(dropdownType.options , (option, index) => {
                return(
                    <MenuItem value={index} className='text-sm'>{option}</MenuItem>
                )
            })}
        </Select>
      </FormControl>
    </Box>
    
  );
}
