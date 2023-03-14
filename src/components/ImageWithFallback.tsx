import { useState } from 'react';
import Image from 'next/image';
import fallbackImage from '../assets/keg.png';

const ImageWithFallback = (props:object) => {
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
