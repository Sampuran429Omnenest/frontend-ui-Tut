import { useOrderForm } from "../../hooks/useOrderForm";
import { useOrderStore } from "../../store/useOrderStore";

export const PriceInput=()=>{
    const {price,setPrice}=useOrderStore();
    const {isMarketOrder}=useOrderForm();
    return(
        <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-400">Price</label>
            <input 
            type="number"
            disabled={isMarketOrder}
            value={price}
            onChange={(e)=>setPrice(Number(e.target.value))}
            className="bg-gray-900 border border-gray-700 rounded-md px-3 py-2 text-sm disabled:opacity-50"
            />
        </div>
    )

}