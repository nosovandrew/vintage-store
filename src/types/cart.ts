import { Product } from './product';

// product in cart list
export type CartProduct = Product & {
    // quantity of certain product in cart
    quantity: number;
};

// main object which used in cart context (cart data + funcs)
export type CartContextType = {
    // cart
    products: CartProduct[];
    // adds products to cart
    addProductToCart: (product: CartProduct) => void;
    // inc quantity of product in cart
    increaseQuantity: (productId: number) => void;
    // dec quantity of product in cart
    decreaseQuantity: (productId: number) => void;
    // removes products from cart
    removeProductFromCart: (productId: number) => void;
};
