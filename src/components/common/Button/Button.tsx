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
  const base = "px-4 py-2 rounded-md font-semibold transition-colors duration-200 flex items-center justify-center";

  const styles = {
    buy: "bg-[#198055] hover:bg-[#146945] text-white text-base",
    sell: "bg-[#D12F2F] hover:bg-[#A82525] text-white text-base",
    secondary: "bg-transparent hover:bg-gray-50 text-[#0F62FE] text-xs",
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