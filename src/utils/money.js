
export const INTERVALS = [1,5,15]

export const LIST_MONEYS = [
    "USD", "EUR" , "CAD", "NZD", "AUD", "JPY", "GBP", "CHF"
]



const LIST_SYMBOLS = LIST_MONEYS.map(mainMoney=>
         LIST_MONEYS.filter(secondMoney => secondMoney!== mainMoney).map(secondMoney=>`${mainMoney}${secondMoney}`)) 


export const LIST_SYMBOLS_OWNER = [
    "FX:USDJPY",
    "FX:USDCHF",
    "FX:USDCAD",
    "FX_IDC:USDEUR",
    "FX_IDC:USDAUD",
    "FX_IDC:USDNZD",
    "FX_IDC:USDINR",



]
        