import { useState } from 'react';
import styled from 'styled-components';
import Image, { ImageProps } from 'next/image';

import Placeholder from './placeholder';

const StyledImage = styled(Image)`
    border-radius: var(--basic-rounded);
`;

type ImageRendererProps = {
    url: string;
    alt?: string;
    layout: ImageProps['layout'];
    objFit: ImageProps['objectFit'];
    width?: number;
    height?: number;
};

const ImageRenderer = ({
    url,
    alt,
    layout,
    objFit,
    width,
    height,
}: ImageRendererProps) => {
    const [isImageLoaded, setIsImageLoaded] = useState(false); // loading state

    return (
        <>
            {!isImageLoaded && <Placeholder />}
            <StyledImage
                src={url}
                alt={alt}
                layout={layout}
                width={width}
                height={height}
                objectFit={objFit}
                onLoadingComplete={() => setIsImageLoaded(true)} // runs when next.js Image is loaded
            />
        </>
    );
};

export default ImageRenderer;
