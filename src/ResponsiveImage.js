import React from 'react';

const ResponsiveImage = ({ src, alt, className }) => {
  return (
    <picture>
      <source
        //media="(min-width: 1200px)"
        srcSet={src}
      />
      <source
        //media="(min-width: 992px)"
        srcSet={src}
      />
      <source
        //media="(min-width: 768px)"
        srcSet={src}
      />
      <source
        //media="(min-width: 576px)"
        srcSet={src}
      />
      <img
        src={src}
        alt={alt}
        className={className}
      />
    </picture>
  );
};

export default ResponsiveImage;
