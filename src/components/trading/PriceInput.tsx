import { useOrderForm } from "../../hooks/useOrderForm";
import { useOrderStore } from "../../store/useOrderStore";

export const PriceInput = () => {
    const { price, setPrice } = useOrderStore();
    const { isMarketOrder } = useOrderForm();

    return (
        <div className="flex flex-col gap-1 w-full">
            <label className="text-[12px] font-medium text-[#555555]">Price</label>
            <input 
                type="number"
                disabled={isMarketOrder}
                value={isMarketOrder ? 0 : price}
                placeholder={isMarketOrder ? "Market" : "0.00"}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full h-[36px] bg-white border border-[#E3E4E5] rounded-[4px] px-3 text-sm text-[#2A2A2B] font-medium outline-none focus:border-[#0F62FE] disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed transition-colors"
            />
        </div>
    );
};