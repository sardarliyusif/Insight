import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function TotalDropdown({ dropdownFor }) {
  const dropdownTypes = [
    {
      type: "TOKEN_PRICES",
      name: "Token Prices",
      color: "black",
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
      type: "EXPORT",
      name: "Export",
      color: "black",
      options: ["Example 1", "Example 2", "Example 3"],
    },
    {
      type: "ALL_NETWORKS",
      name: "All Networks",
      color: "black",
      options: ["Example 1", "Example 2", "Example 3"],
    },
    {
      type: "ALL_WALLETS",
      name: "All Wallets",
      color: "black",
      options: ["Example 1", "Example 2", "Example 3"],
    },
    {
      type: "LABELS",
      name: "Labels",
      color: "greylish",
      options: ["Blockchain", "Wallet", "Token", "Budget"],
    },
    {
      type: "TOKEN",
      name: "Token",
      color: "greylish",
      options: ["Blockchain", "Wallet"],
    },
  ];

  const [dropdownType, setDropdownType] = useState(
    dropdownTypes.find((e) => e.type == dropdownFor)
  );
  console.log(dropdownType.options);
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={`inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-2 py-2 text-xs font-semibold text-${dropdownType.color} shadow-sm hover:bg-gray-50  `}
        >
          {dropdownType.name}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10  w-40 origin-top-right rounded-md bg-transparent focus:outline-none">
          <div className="py-1">
            {/* Creating Dropdown Values */}
            {dropdownType.options.map((option, index) => {
              return (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <p
                      className={classNames(
                        active
                          ? "bg-transparent text-yellow-800"
                          : "text-black",
                        "block text-sm"
                      )}
                      onClick={() =>
                        setDropdownType((prevState) => ({
                          // For update dropdown selected
                          name: option,
                          type: prevState.type,
                          color: prevState.color,
                          options: [...prevState.options],
                        }))
                      }
                    >
                      {option}
                    </p>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}