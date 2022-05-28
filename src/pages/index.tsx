import { GetStaticProps } from 'next';

import { products } from '@/data/products';
import { Product } from '@/types/product';
import { useCartContext } from '@/contexts/cart';
import StyledButton from '@/components/atoms/buttons';

export const getStaticProps: GetStaticProps = () => {
    return {
        props: {
            products,
        },
    };
};

type HomeProps = {
    products: Product[];
};

const Home = ({ products }: HomeProps) => {
    const { addProductToCart } = useCartContext();

    return (
        <>
            <h1>Kuku</h1>
            <ul>
                {products.map((p) => (
                    <li key={p.id}>
                        <p>{p.title}</p>
                        <StyledButton
                            onClickHandler={() =>
                                addProductToCart({
                                    ...p,
                                    quantity: 1,
                                })
                            }
                        >
                            Add to cart
                        </StyledButton>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Home;
