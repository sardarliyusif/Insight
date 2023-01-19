import React from "react";

const MyButton = ({ type }) => {
  return (
    <div className="xl:w-28 lg:w-20 py-2 px-4 ml-4 cursor-pointer border border-[#d6d6d6] bg-white hover:bg-gray-50 hover:bg-opacity-5 font-bold rounded-md flex items-center justify-center space-x-2">
      
        <img src={type == 'refresh' ? '/icons/refresh_primary.svg' : '/icons/export-icon.svg'} alt="refresh" className="w-3 h-3" />
      

      <div className="tracking-wider xl:text-xs lg:text-xxs self-center leading-none">{type == 'refresh' ? 'Refresh' : 'Export'}</div>
    </div>
  );
};

export default MyButton;
