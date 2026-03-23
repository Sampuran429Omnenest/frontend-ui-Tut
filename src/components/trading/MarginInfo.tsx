import { useOrderForm } from "../../hooks/useOrderForm";
import { useOrderStore } from "../../store/useOrderStore";

export const MarginInfo = () => {
  const { availableMargin } = useOrderStore();
  const { required, isSufficient } = useOrderForm();

  return (
    <div className="flex flex-row gap-6">
      <div className="flex flex-col">
        <span className="text-[10px] font-medium text-[#555555]">Required</span>
        <span className={`text-[12px] font-medium ${!isSufficient ? "text-red-500" : "text-[#161616]"}`}>
          ₹{required.toFixed(2)}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] font-medium text-[#555555]">Avail. Margin</span>
        <span className="text-[12px] font-medium text-[#161616]">
          ₹{availableMargin.toFixed(2)}
        </span>
      </div>
    </div>
  );
};