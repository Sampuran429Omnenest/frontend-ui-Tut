interface StepperProps{
    value:number
    min?:number
    onChange:(value:number)=>void
}
export const StepperInput = ({ value, min = 1, onChange }: StepperProps) => {
  return (
    <div className="flex items-center border border-[#E3E4E5] rounded-[4px] overflow-hidden h-[36px] bg-white">
      <button
        className="px-3 text-[#555555] hover:bg-gray-50 text-xl font-light"
        onClick={() => value > min && onChange(value - 1)}
      >
        −
      </button>
      <input
        type="number"
        className="w-full text-center text-[#2A2A2B] text-sm font-medium outline-none"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <button
        className="px-3 text-[#555555] hover:bg-gray-50 text-xl font-light"
        onClick={() => onChange(value + 1)}
      >
        +
      </button>
    </div>
  );
};