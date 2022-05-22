import styled from 'styled-components';

import { media } from '@/styles/media';

// global container for all app
const Container = styled.div`
    padding: var(--layout-padding);
    margin: 0 auto;
    width: 100%;
`;

const StyledMain = styled.div`
    /* margin-top: var(--content-spacing); // get rid header on mobile

    ${media.md} {
        margin: 0;
    } */
`;

type LayoutProps = {
    children: React.ReactNode | React.ReactNode[];
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <Container>
            {/* place for nav */}
            {/* each page/component inside <main> has own container with flex */}
            <StyledMain>{children}</StyledMain>
        </Container>
    );
};

export default Layout;
