const sumTotalProduct = (num1:number, num2:number) => {
    return num1 + num2
}

const incrementArticle = (num:number) => {
    return num + 1
}

const decrementArticle = (num:number) => {
    return num - 1
}

// hacerle testing a la funcion de moneda
// fecha actual en formato dd/mm/yyyy

function dateGTFormat(dateParam:Date):string{
    const day = dateParam.getDate().toString().padStart(2,'0')
    const month = (dateParam.getMonth() + 1 ).toString().padStart(2,'0')
    const year = dateParam.getFullYear()
    return `${day}/${month}/${year}`
}

export {
    dateGTFormat,
    decrementArticle,
    incrementArticle,
    sumTotalProduct,
}