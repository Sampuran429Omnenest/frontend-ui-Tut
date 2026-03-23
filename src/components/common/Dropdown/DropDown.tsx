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
export const Dropdown = <T,>({
  label,
  options,
  value,
  onChange,
}: DropDownProps<T>) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-[12px] font-medium text-[#555555]">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className="w-full bg-white border border-[#E3E4E5] rounded-[4px] px-3 py-2 text-sm text-[#2A2A2B] appearance-none focus:outline-none focus:border-[#0F62FE]"
          value={value as string}
          onChange={(e) => onChange(e.target.value as T)}
        >
          {options.map((opt) => (
            <option key={opt.value as string} value={opt.value as string}>
              {opt.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <span className="border-b-2 border-r-2 border-[#555555] w-2 h-2 rotate-45 -translate-y-1"></span>
        </div>
      </div>
    </div>
  );
};