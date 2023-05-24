console.log('importing Cart');

const shippingCharge = 10;
export const cart = [];

//how to export.1 원하는 오브젝트 옆에 export를 붙일 때 블록문{}안에 있으면 안됨
export const addToCart = function(prod,quant){
    cart.push({prod,quant});
    console.log(`${quant} of ${prod}(es) is added in cart`)
}

const exportText = 'exportText';
const exportContent = 'exportContent';

export{ exportText,exportContent as ec}