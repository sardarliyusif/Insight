import React from "react";

const MyButton = ({ type }: { type?: "export" }) => {
  return (
    <div className="xl:w-[90px] lg:w-20 py-[10px] px-3 ml-[10px] cursor-pointer border border-[#d6d6d6] bg-white hover:bg-gray-50 hover:bg-opacity-5 font-bold rounded-md flex items-center justify-center space-x-2">
      <img
        src={
          type == "export"
            ? "/icons/export-icon.svg"
            : "/icons/refresh_primary.svg"
        }
        alt="refresh"
        className="w-3 h-3"
      />

      <div className="tracking-wider xl:text-xs lg:text-xxs self-center leading-none">
        {type == "export" ? "Export" : "Refresh"}
      </div>
    </div>
  );
};

export default MyButton;
