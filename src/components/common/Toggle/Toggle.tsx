interface ToggleProps{
    value:"BUY"|"SELL"
    onChange: (val: "BUY" | "SELL") => void;
}
export const BuySellToggle=({
    value,
    onChange,
}:ToggleProps)=>{
    return(
        <div className="flex rounded-md overflow-hidden border border-gray-700">
            <button
            className={`flex-1 py-2 text-sm ${
                value==="BUY" ? "bg-green-600 text-white" : "bg-gray-900 text-gray-400"
            }`}
            onClick={()=>onChange("BUY")}>
            BUY
            </button>
            <button
            className={`flex-1 py-2 text-sm ${
                value==="SELL" ? "bg-red-600 text-white" : "bg-gray-900 text-gray-400"
            }`}
            onClick={()=>onChange("SELL")}>
            SELL
            </button>
        </div>
    )

}