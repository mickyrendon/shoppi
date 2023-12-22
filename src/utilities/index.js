/**
 * The function calculates the total price of products for shoppingcart
 * @param {Array} products cart products: array of objects
 * @returns {number} total price of products
 */
export const totalPrice = (products) => {
    return products.reduce( (sum, product ) => sum + product.price, 0)
}
// export const totalPrice = (products) => {
//     let base = 0
//     products.forEach( product => base += product.price)
//     return base
// }