import React from 'react';

const ResponsiveImage = ({ src, alt, className }) => {
  return (
    <picture>
      <source
        media="(min-width: 1200px)"
        srcSet={`${src}-xl.jpg`}
      />
      <source
        media="(min-width: 992px)"
        srcSet={`${src}-lg.jpg`}
      />
      <source
        media="(min-width: 768px)"
        srcSet={`${src}-md.jpg`}
      />
      <source
        media="(min-width: 576px)"
        srcSet={`${src}-sm.jpg`}
      />
      <img
        src={`${src}-xs.jpg`}
        alt={alt}
        className={className}
      />
    </picture>
  );
};

export default ResponsiveImage;
