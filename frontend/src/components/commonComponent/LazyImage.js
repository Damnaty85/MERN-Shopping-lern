import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const placeHolder =
    'https://assets.materialup.com/uploads/301a83ce-31fd-4cf5-8c9d-b88d4c44bab7/preview.gif';

const Image = styled.img`
  display: block;
  height: 510px;
  width: 380px;
  @keyframes loaded {
    0% {
      opacity: 0.1;
    }
    100% {
      opacity: 1;
    }
  }
  &.loaded:not(.has-error) {
    animation: loaded 300ms ease-in-out;
  }
  &.has-error {
    content: url(${placeHolder});
  }
`;

const LazyImage = ({src, alt, onMouseEnter}) => {
    const [imageSrc, setImageSrc] = useState(placeHolder);
    const [imageRef, setImageRef] = useState();

    const onLoad = event => {
        event.target.classList.add('loaded')
    };

    const onError = event => {
        event.target.classList.add('has-error')
    };

    useEffect(() => {
        let observer;
        let didCancel = false;

        if (imageRef && imageSrc !== src) {
            if (IntersectionObserver) {
                observer = new IntersectionObserver(
                    entries => {
                        entries.forEach(entry => {
                            if (
                                !didCancel &&
                                (entry.intersectionRatio > 0 || entry.isIntersecting)
                            ) {
                                setImageSrc(src);
                                observer.unobserve(imageRef)
                            }
                        })
                    },
                    {
                        threshold: 0.01,
                        rootMargin: '75%',
                    }
                );
                observer.observe(imageRef)
            } else {
                setImageSrc(src)
            }
        }
        return () => {
            didCancel = true;
            if (observer && observer.unobserve) {
                observer.unobserve(imageRef)
            }
        }
    }, [src, imageSrc, imageRef]);
    return (
        <Image
            ref={setImageRef}
            src={imageSrc}
            alt={alt}
            onMouseEnter={onMouseEnter}
            onLoad={onLoad}
            onError={onError}
        />
    )
};

export default LazyImage;
