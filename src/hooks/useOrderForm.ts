import { useOrderStore } from "../store/useOrderStore";

export const useOrderForm=()=>{
    const {productType,quantity,price,availableMargin,orderType}=useOrderStore()
    const marginPercent =
    productType === "MIS" ? 20 : 100;
    const required = quantity * price * (marginPercent / 100);
    const isSufficient = availableMargin >= required;
    const isMarketOrder = orderType === "MARKET";
    return {
        marginPercent,
        required,
        isSufficient,
        isMarketOrder
    }
}