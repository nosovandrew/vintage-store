import { createContext, useState, useEffect, useContext } from 'react';

import { CartProduct, CartContextType } from '@/types/cart';

// create context for cart with default state obj
const CartContext = createContext<CartContextType | undefined>(undefined);
// context consumer hook
const useCartContext = () => {
    // get the context
    const context = useContext(CartContext);

    // if `undefined`, throw an error
    if (context === undefined) {
        throw new Error('useCartContext was used outside of its Provider');
    }

    return context;
};

// context provider props
type CartContextProviderProps = {
    children: React.ReactNode | React.ReactNode[];
};

// cart context provider
const CartContextProvider = ({ children }: CartContextProviderProps) => {
    // cart products state
    const [products, setProducts] = useState<CartProduct[]>([]);

    // <<< PERSISTENT CART VIA LOCALSTORAGE started >>>
    // all persistant functionality placed in this file and *cart.js*
    // initial getting data from local storage
    useEffect(() => {
        // get cart from LS
        const persistentCart = JSON.parse(localStorage.getItem('cart') || '[]');
        if (persistentCart.products) {
            console.log(persistentCart);
            // checking if user change price in localStorage
            // have to check in making order!!!
            setProducts(persistentCart.products); // add cart to app state (if it exists)
        }
    }, []); // [] means that code runs only 1 time for initial stage

    // up to date local storage (updating LS when cart is changed)
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify({ products })); // add cart to localStorage
    }, [products]); // [cart] means that code runs when cart is changed
    // <<< PERSISTENT CART ended >>>

    // helper func: gets product in cart by id
    const getProductById = (productId: number): CartProduct | undefined => {
        return products.find((p) => p.id === productId);
    };

    // increase quantity of product in cart
    const increaseQuantity = (productId: number): void => {
        // args: productId (id of product in cart)
        // create new array with increased product
        const updatedProducts: CartProduct[] = products.map(
            (p): CartProduct => {
                if (p.id === productId) {
                    return {
                        ...p,
                        quantity: p.quantity + 1,
                    };
                }
                return p;
            }
        );
        setProducts(updatedProducts);
    };

    // decrease quantity of product in cart
    const decreaseQuantity = (productId: number): void => {
        // args: productId (id of product in cart)
        // create new array with decreased product
        const updatedProducts: CartProduct[] = products.map(
            (p): CartProduct => {
                if (p.id === productId) {
                    return {
                        ...p,
                        quantity: p.quantity - 1,
                    };
                }
                return p;
            }
        );
        setProducts(updatedProducts);
    };

    // add new product to card or increase quantity if product already exist
    const addProductToCart = (product: CartProduct): void => {
        // args: product (new product with minimal quantity)
        const existingProduct = getProductById(product.id); // try to find product in cart
        // check if product already exist
        if (existingProduct) {
            // product already exist -> increase quantity
            increaseQuantity(existingProduct.id);
        } else {
            // product is new -> just add new product
            setProducts([...products, product]);
        }
    };

    // remove product from cart
    const removeProductFromCart = (productId: number): void => {
        // args: productId (id of product in cart)
        const updatedProducts = products.filter((p) => p.id !== productId); // remove product
        setProducts(updatedProducts); // update state
    };

    // build context value
    const contextValue: CartContextType = {
        products,
        addProductToCart,
        increaseQuantity,
        decreaseQuantity,
        removeProductFromCart,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

export { useCartContext, CartContextProvider };
