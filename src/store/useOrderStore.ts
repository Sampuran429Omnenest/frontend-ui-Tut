import { create } from "zustand"
import type { ExchangeType, OrderType, ProductType, TransactionType } from "../types/order.types"

const initialState = {
  symbol: "",
  quantity: 1,
  price: 0,
  availableMargin:1000,
  orderType: "MARKET" as OrderType,
  productType: "NRML" as ProductType,
  transactionType: "BUY" as TransactionType,
  exchangeType: "NSE" as ExchangeType,
};

interface OrderState{
    symbol:string|null
    quantity:number
    price:number
    orderType:OrderType
    productType:ProductType
    transactionType:TransactionType
    exchangeType:ExchangeType|null
    availableMargin:number
    setSymbol:(symbol:string)=>void
    setQuantity:(quantity:number)=>void
    setPrice:(price:number)=>void
    setOrderType:(orderType:OrderType)=>void
    setTransactionType:(transactionType:TransactionType)=>void
    setExchangeType:(exchangeType:ExchangeType)=>void
    setAvailableMargin:(availableMargin:number)=>void
    setProductType:(product:ProductType)=>void
    reset:()=>void
}
export const useOrderStore=create<OrderState>((set)=>({
    ...initialState,
    setSymbol:(symbol)=>
        set({symbol}),
    setQuantity:(quantity)=>
        set({quantity}),
    setPrice:(price)=>
        set({price}),
    setOrderType:(orderType)=>
        set({orderType}),
    setTransactionType:(transactionType)=>
        set({transactionType}),
    setExchangeType:(exchangeType)=>
        set({exchangeType}),
    setProductType:(productType)=>
        set({productType}),
    setAvailableMargin:(availableMargin)=>
        set({availableMargin}),
    reset:()=>
        set(initialState)

}))