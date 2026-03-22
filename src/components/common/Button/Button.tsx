interface ButtonProps {
  children: React.ReactNode;
  variant?: "buy" | "sell" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  children,
  variant = "secondary",
  disabled,
  onClick,
}: ButtonProps) => {
  const base = "w-full py-2 rounded-md text-sm font-medium";

  const styles = {
    buy: "bg-green-600 hover:bg-green-700 text-white",
    sell: "bg-red-600 hover:bg-red-700 text-white",
    secondary: "bg-gray-800 hover:bg-gray-700 text-white",
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${base} ${styles[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {children}
    </button>
  );
};