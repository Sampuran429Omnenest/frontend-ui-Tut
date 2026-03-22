interface StepperProps{
    value:number
    min?:number
    onChange:(value:number)=>void
}
export const StepperInput=({
    value,
    min=1,
    onChange,
}:StepperProps)=>{
    return(
        <div className="flex  items-center border border-gray-700 rounded-md overflow-hidden">
            <button className="px-3 py-2 bg-gray-800 hover:bg-gray-700" onClick={()=>value>min && onChange(value-1)}>
            -
            </button>
            <input type="number" className="w-full text-center bg-gray-900 outline-none" value={value} onChange={(e)=>onChange(Number(e.target.value))}/>
            <button className="px-3 py-2 bg-gray-800 hover:bg-gray-700" onClick={()=>onChange(value+1)}>
            +
            </button>
        </div>
    );
}