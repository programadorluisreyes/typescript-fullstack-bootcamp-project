export const currencyFormat = (param:number) : string => {
    return Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'})
    .format(param);
}