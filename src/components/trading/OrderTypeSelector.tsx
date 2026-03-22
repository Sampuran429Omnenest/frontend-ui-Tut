import { useOrderStore } from "../../store/useOrderStore";
import type { OrderType } from "../../types/order.types";
import { Dropdown } from "../common/Dropdown/DropDown";

const OPTIONS: { label: string; value: OrderType }[] = [
  { label: "Market", value: "MARKET" },
  { label: "Limit", value: "LIMIT" },
  { label: "SL", value: "SL" },
  { label: "SL-M", value: "SLM" },
];

export const OrderTypeSelector = () => {
  const { orderType, setOrderType } = useOrderStore();

  return (
    <Dropdown
      label="Order Type"
      options={OPTIONS}
      value={orderType}
      onChange={setOrderType}
    />
  );
};