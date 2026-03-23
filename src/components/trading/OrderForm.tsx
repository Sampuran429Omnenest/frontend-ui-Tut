import React, { useEffect, useRef } from "react";
import { useOrderStore } from "../../store/useOrderStore";
import { Button } from "../common/Button/Button";
import { BuySellToggle } from "../common/Toggle/Toggle";
import { MarginInfo } from "./MarginInfo";
import { OrderTypeSelector } from "./OrderTypeSelector";
import { PriceInput } from "./PriceInput";
import { ProductTypeSelector } from "./ProductTypeSelector";
import { QuantityInput } from "./QuantityInput";

const ExchangeOption = ({ 
    label, 
    price, 
    isActive, 
    onClick 
}: { 
    label: string; 
    price: string; 
    isActive: boolean; 
    onClick: () => void 
}) => (
    <div 
        className="flex items-center gap-1.5 cursor-pointer group" 
        onClick={onClick}
    >
        <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-colors ${
            isActive ? "border-[#0F62FE]" : "border-gray-400 group-hover:border-gray-500"
        }`}>
            {isActive && <div className="w-2 h-2 rounded-full bg-[#0F62FE]" />}
        </div>
        <span className="text-[11px] font-medium text-[#2A2A2B]">
            {label}: <span className="text-green-600 font-semibold">{price}</span>
        </span>
    </div>
);

export const OrderForm = () => {
    const { 
        transactionType, 
        setTransactionType, 
        symbol, 
        exchangeType, 
        setExchangeType, 
        reset 
    } = useOrderStore();
    
    const formRef = useRef<HTMLDivElement>(null);

    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (formRef.current && !formRef.current.contains(event.target as Node)) {
                reset(); 
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") reset();
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);
        
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [reset]);

   
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitting Order...");
        
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
            <div 
                ref={formRef} 
                className="flex flex-col items-start bg-white shadow-2xl rounded-lg overflow-hidden w-[384px] relative border border-[#E3E4E5]"
                role="dialog"
                aria-labelledby="order-form-title"
            >
                
                
                <div className={`flex flex-row items-center justify-between w-full p-4 border-b border-[#E3E4E5] transition-colors ${
                    transactionType === "BUY" ? "bg-[#E7EFFF]" : "bg-[#FFEBEE]"
                }`}>
                    <div className="flex flex-col gap-1.5">
                        <h2 id="order-form-title" className="font-bold text-sm text-[#2A2A2B] uppercase tracking-wide">
                            {symbol || "RELIANCE"}
                        </h2>
                        
                        <div className="flex gap-4">
                            <ExchangeOption 
                                label="NSE" 
                                price="1,415.94" 
                                isActive={exchangeType === "NSE"} 
                                onClick={() => setExchangeType("NSE")} 
                            />
                            <ExchangeOption 
                                label="BSE" 
                                price="1,413.63" 
                                isActive={exchangeType === "BSE"} 
                                onClick={() => setExchangeType("BSE")} 
                            />
                        </div>
                    </div>
                    <BuySellToggle value={transactionType} onChange={setTransactionType} />
                </div>                
                
              
                <form onSubmit={handleSubmit} className="flex flex-col p-5 gap-6 w-full bg-white">
                    <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                        <QuantityInput />
                        <PriceInput />
                        <OrderTypeSelector />
                        <ProductTypeSelector />
                    </div>

                    <div className="flex items-center justify-between w-full pt-4 border-t border-gray-100 mt-2">
                        <MarginInfo />
                        
                        <div className="flex items-center gap-3">
                            <Button 
                                
                                variant="secondary" 
                                onClick={reset}
                            >
                                Cancel
                            </Button>
                            
                            <Button 
                               
                                variant={transactionType === "BUY" ? "buy" : "sell"}
                               
                            >
                                {transactionType}
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};