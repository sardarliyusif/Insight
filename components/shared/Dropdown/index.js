// import { Fragment, useState } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import map from "lodash/map";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function TotalDropdown({ dropdownFor = 'ALL_NETWORKS' }) {
//   const dropdownTypes = [
//     {
//       type: "TOKEN_PRICES",
//       name: "Token Prices",
//       color: "black",
//       backgroundColor: 'white',
//       options: [
//         "Current price",
//         "Transaction time price",
//         "End of month",
//         "Beginning of month",
//         "30 days average",
//         "20 days average",
//         "15 days average",
//         "10 days average",
//         "5 days average",
//       ],
//     },
//     {
//       type: "ALL_NETWORKS",
//       name: "All Networks",
//       color: "black",
//       backgroundColor: 'white',
//       options: ["Example 1", "Example 2", "Example 3"],
//     },
//     {
//       type: "ALL_WALLETS",
//       name: "All Wallets",
//       color: "black",
//       backgroundColor: 'white',
//       options: ["Example 1", "Example 2", "Example 3"],
//     },
//     {
//       type: "LABELS",
//       name: "Labels",
//       color: "greylish",
//       backgroundColor: 'greylish',
//       options: ["Labels","Blockchain", "Wallet", "Token", "Budget"],
//     },
//     {
//       type: "BLOCKCHAIN",
//       name: "Blockhain",
//       color: "greylish",
//       backgroundColor: 'greylish',
//       options: ["Token","Blockchain", "Wallet"],
//     },
//   ];

//   const [dropdownType, setDropdownType] = useState(
//     dropdownTypes.find((e) => e.type == dropdownFor)
//   );
//   return (
//     <Menu as="div" className="relative inline-block text-left ml-4">
//       <div>
//         <Menu.Button
//           className={`inline-flex w-full justify-center rounded-md border leading-5 border-gray-300 bg-${dropdownType.backgroundColor} xl:py-1 lg:py-1 xl:px-2 lg:px-3 xl:text-xs lg:text-xxs font-semibold text-${dropdownType.color} shadow-sm hover:bg-gray-50  `}
//         >
//           {dropdownType.name}
//           <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
//         </Menu.Button>
//       </div>

//       <Transition
//         as={Fragment}
//         enter="transition ease-out duration-100"
//         enterFrom="transform opacity-0 scale-95"
//         enterTo="transform opacity-100 scale-100"
//         leave="transition ease-in duration-75"
//         leaveFrom="transform opacity-100 scale-100"
//         leaveTo="transform opacity-0 scale-95"
//       >
//         <Menu.Items className="absolute left-0 z-10  w-40 origin-top-right rounded-md bg-transparent focus:outline-none">
//           <div className="py-1">
//             {map(dropdownType.options , (option, index) => {
//               return (
//                 <Menu.Item key={index}>
//                   {({ active }) => (
//                     <p
//                       className={classNames(
//                         active
//                           ? " text-yellow-800"
//                           : "text-black",
//                         "block text-sm bg-white py-2 px-1 cursor-pointer shadow-chartShadow"
//                       )}
//                       onClick={() =>
//                         setDropdownType((prevState) => ({
//                           name: option,
//                           type: prevState.type,
//                           color: prevState.color,
//                           options: [...prevState.options],
//                         }))
//                       }
//                     >
//                       {option}
                      
//                     </p>
//                   )}
//                 </Menu.Item>
//               );
//             })}
//           </div>
//         </Menu.Items>
//       </Transition>
//     </Menu>
//   );
// }



















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
  const [type, setType] = useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minWidth: +`${dropdownFor == "LABELS" || dropdownFor == "TOKENS" ? 80 : 110}`, ml: 1  , fontWeight: 600}}>
        <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label" className="text-xs font-semibold" >
          {/* translate-x-[12px] translate-y-[7px] focus:translate-y-[-9px] */}
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
                <MenuItem value={index} key={index} className={`font-semibold ${dropdownFor == "LABELS" || dropdownFor == "TOKENS" ? 'text-sm' : 'text-xs'}`}>
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
