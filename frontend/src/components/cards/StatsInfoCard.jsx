import React from "react";

const StatsInfoCard = ({ icon, label, value, color }) => {
  return (
    <div className=" flex gap-6 bg-white p-4 rounded-xl shadow-md shadow-purple-400/10 border border-gray-200/50 z-10">
      <div className={`w-12 h-12 flex items-center justify-center text-[26px] text-white ${color} rounded-full drop-shadow-xl `}>
        {icon}
      </div>
      <div>
        <h6 className=" text-xs text-gray-500 mb-1"> {label}</h6>
        <span className="text-[20px]">${value}</span>
      </div>
    </div>
  );
};

export default StatsInfoCard;
