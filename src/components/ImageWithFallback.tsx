import { useState } from 'react';
import Image from 'next/image';
import fallbackImage from '../assets/keg.png';

export type FallbackImage = {
  src: string,
  fallbackSrc: string,
};

const ImageWithFallback = (props:FallbackImage) => {
  const { src, fallbackSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...rest}
      src={imgSrc || fallbackImage}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
      alt="beer"
    />
  );
};

export default ImageWithFallback;
