// loading skeleton for media content
import styled, { keyframes } from 'styled-components';

const blinker = keyframes`
    0% {
        background-color: var(--gray-96);
    }
    50% {
        background-color: var(--gray-93);
    }
    100% {
        background-color: var(--gray-96);
    }
`;

const Placeholder = styled.div`
    position: absolute; // place above media content (get rid content jumping)
    width: 100%;
    height: 100%;
    border-radius: var(--basic-rounded);

    // blinking effect (loop color changing)
    animation: ${blinker} 1.25s infinite;
`;

export default Placeholder;