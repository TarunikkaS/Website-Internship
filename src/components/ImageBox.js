import React from 'react';

const ImageBox = ({ src, alt, orientation = "auto" }) => {
  const aspect =
    orientation === "vertical" ? "aspect-[4/5]" :
    orientation === "square" ? "aspect-[1/1]" :
    "aspect-[16/9]";

  return (
    <div 
      className={`w-full ${aspect} overflow-hidden rounded-2xl bg-white/60 shadow-sm border border-white/40`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover object-center"
        loading="lazy"
        style={{ maxHeight: '100%' }}
      />
    </div>
  );
};

export default ImageBox;
