import styled from 'styled-components';

const LoadingWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
`;

const Dot = styled.div<{delay: string}>`
    background-color: var(--text-primary);
    border-radius: 50%;
    width: 0.5em;
    height: 0.5em;
    margin: 0 0.25em;
    animation: appearanceAnimation 1s linear infinite;
    animation-delay: ${(props) => props.delay};

    @keyframes appearanceAnimation {
        0% {
            opacity: 0;
        }

        50% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }
`;

// loading dots
export const LoadingDots = () => (
    <LoadingWrapper>
        <Dot delay="0s" />
        <Dot delay="0.1s" />
        <Dot delay="0.2s" />
    </LoadingWrapper>
);
