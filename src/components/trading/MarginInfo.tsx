import { useOrderForm } from "../../hooks/useOrderForm";
import { useOrderStore } from "../../store/useOrderStore";

export const MarginInfo = () => {
  const { availableMargin } = useOrderStore();
  const { required, isSufficient } = useOrderForm();

  return (
    <div className="text-sm">
      <p>Required: ₹{required.toFixed(2)}</p>
      <p>Available: ₹{availableMargin}</p>

      {!isSufficient && (
        <p className="text-red-500 mt-1">
          Insufficient margin
        </p>
      )}
    </div>
  );
};