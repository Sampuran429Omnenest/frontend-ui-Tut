export type ExchangeType='NSE'|'BSE'
export type TransactionType='BUY'|'SELL'
export type OrderType='MARKET'|'LIMIT'|'SL'|'SLM'
export type ProductType='NRML'|'CNC'|'MIS'

export interface OrderFormState{
    symbol:string
    quantity:number
    price:number
    orderType:OrderType
    productType:ProductType
    transactionType:TransactionType
    exchangeType:ExchangeType
}
