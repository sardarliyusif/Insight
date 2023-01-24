import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { map } from "lodash";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

export default function Dropdown({ dropdownFor = "ALL_WALLETS", sx }) {
  const theme = createTheme({
    typography: {
      fontFamily: ["Inter", "system-ui"],

    },
  });

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
  const [type, setType] = useState("0");

  const handleChange = (event) => {
    setType(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minWidth: +`${dropdownFor == "LABELS" || dropdownFor == "TOKENS" ? 80 : 110}`, ml: 1  , fontWeight: 600}}>
        <FormControl className="w-full">
          <InputLabel id="demo-simple-select-label" sx={{}} className="text-sm font-semibold">
            {dropdownType.name}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label={dropdownType.name}
            sx={sx}
            onChange={handleChange}
            className={`text-sm bg-${dropdownType.backgroundColor}`}
          >
            {map(dropdownType.options, (option, index) => {
              return (
                <MenuItem value={index} key={index} className="text-sm font-semibold">
                  {option}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
}
