import { useOrderStore } from "../../store/useOrderStore";
import { Button } from "../common/Button/Button";
import { BuySellToggle } from "../common/Toggle/Toggle"
import { MarginInfo } from "./MarginInfo";
import { OrderTypeSelector } from "./OrderTypeSelector";
import { PriceInput } from "./PriceInput";
import { ProductTypeSelector } from "./ProductTypeSelector";
import { QuantityInput } from "./QuantityInput";

export const OrderForm=()=>{
    const {transactionType,setTransactionType,reset}=useOrderStore();
    return(
        <div className="bg-gray-950 p-4 rounded-lg w-full max-w-md space-y-4">
            <BuySellToggle value={transactionType} onChange={setTransactionType}/>
            <div className="grid grid-cols-2 gap-3">
                <QuantityInput />

                <PriceInput />

                <OrderTypeSelector />

                <ProductTypeSelector />
            </div>
            <MarginInfo/>
            <div className="flex gap-2">
                <Button variant="secondary" onClick={reset}>
                    Cancel
                </Button>
                <Button variant={transactionType==="BUY" ? "buy" : "sell"}>
                {transactionType}
                </Button>
            </div>
        </div>
    )
}