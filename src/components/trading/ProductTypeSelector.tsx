import { useOrderStore } from "../../store/useOrderStore";
import type { ProductType } from "../../types/order.types";
import { Dropdown } from "../common/Dropdown/DropDown";

const OPTIONS:{label:string,value:ProductType}[] = [
  { label: "NRML", value: "NRML" },
  { label: "CNC", value: "CNC" },
  { label: "MIS", value: "MIS" },
];

export const ProductTypeSelector = () => {
  const { productType, setProductType } = useOrderStore();

  return (
    <Dropdown
      label="Product"
      options={OPTIONS}
      value={productType}
      onChange={setProductType}
    />
  );
};