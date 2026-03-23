interface ToggleProps{
    value:"BUY"|"SELL"
    onChange: (val: "BUY" | "SELL") => void;
}
export const BuySellToggle = ({ value, onChange }: ToggleProps) => {
  return (
   
    <div className="flex p-1 bg-gray-100 rounded-md w-[100px] h-[40px] relative border border-[#E3E4E5]">
      
      
      <button
        onClick={() => onChange("BUY")}
        className={`relative z-10 flex-1 flex items-center justify-center rounded transition-all duration-200 text-[12px] font-semibold
          ${value === "BUY" ? "bg-[#0F62FE] text-white shadow-sm" : "text-[#555555]"}`}
      >
        Buy
      </button>

      <button
        onClick={() => onChange("SELL")}
        className={`relative z-10 flex-1 flex items-center justify-center rounded transition-all duration-200 text-[12px] font-semibold
          ${value === "SELL" ? "bg-[#198055] text-white shadow-sm" : "text-[#555555]"}`}
      >
        Sell
      </button>
    </div>
  );
};