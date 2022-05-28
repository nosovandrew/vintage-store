import styled from 'styled-components';

import { LoadingDots } from '@/components/atoms/loading';

// common (default) button UI
const Default = styled.button`
    /* width: fit-content; */
    min-width: 10em;
    min-height: 2.5em;
    margin: var(--basic-spacing) 0;
    padding: .5rem 1rem;
    border: 2px solid var(--btn-default-color);
    box-shadow: 2px 2px 0 0 var(--btn-default-color);
    background-color: var(--btn-bg-color);
    color: var(--btn-default-color);
    font-size: inherit;
    font-family: inherit;
    text-align: center;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:focus {
        outline: 0;
    }

    &:active {
        box-shadow: 1px 1px 0 0 var(--btn-default-color);
    }

    &:disabled {
        box-shadow: 2px 2px 0 0 var(--btn-disabled-color);
        border-color: var(--btn-disabled-color);
        color: var(--btn-disabled-color);
    }
`;

type StyledButtonProps = {
    children: React.ReactNode | React.ReactNode[];
    onClickHandler: () => void; // onClick function
    disabled?: boolean;
    loading?: boolean;
};

// button component (can be modified by other styled-components)
const StyledButton = ({
    children,
    onClickHandler,
    disabled = false,
    loading = false,
}: StyledButtonProps) => {
    return (
        // default styles component (using only for default button, not to use for other components)
        <Default onClick={onClickHandler} disabled={disabled}>
            {loading ? <LoadingDots /> : children}
        </Default>
    );
};

// inc/dec/del buttons in cart (small size)
export const CartItemButton = styled(StyledButton)`
    && {
        min-width: fit-content;
        min-height: fit-content;
        margin-left: var(--basic-spacing);
        padding: 2px 8px;
    }
`;

export default StyledButton;
