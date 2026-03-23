import { useOrderStore } from "../../store/useOrderStore"
import { StepperInput } from "../common/StepperInput/StepperInput";

export const QuantityInput = () => {
    const { quantity, setQuantity } = useOrderStore();

    return (
        <div className="flex flex-col gap-1 w-full">
            <label className="text-[12px] font-medium text-[#555555]">
                Quantity
            </label>
            <StepperInput 
                value={quantity} 
                onChange={setQuantity} 
                min={1} 
            />
        </div>
    );
};