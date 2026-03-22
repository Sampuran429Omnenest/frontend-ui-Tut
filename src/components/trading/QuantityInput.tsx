import { useOrderStore } from "../../store/useOrderStore"
import { StepperInput } from "../common/StepperInput/StepperInput";

export const QuantityInput=()=>{
    const {quantity,setQuantity}=useOrderStore();
    return(
        <StepperInput value={quantity} onChange={setQuantity}/>
    )
}