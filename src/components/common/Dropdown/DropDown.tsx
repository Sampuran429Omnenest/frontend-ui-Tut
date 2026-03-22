interface Option<T>{
    label:string
    value:T
}
interface DropDownProps<T>{
    label?:string
    options:Option<T>[]
    value:T
    onChange:(value:T)=>void
}
export const Dropdown=<T,>({
    label,
    options,
    value,
    onChange,
}:DropDownProps<T>)=>{
    return(
        <div className="flex flex-col gap-1">
            {label && (
                <label className="text-xs text-gray-400">
                    {label}
                </label>
            )}
            <select 
            className="bg-gray-800 border border-gray-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={value as string}
            onChange={(e)=>onChange(e.target.value as T)}
            >
                {options.map((opt)=>(
                    <option key={opt.value as string} value={opt.value as string}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    );
}