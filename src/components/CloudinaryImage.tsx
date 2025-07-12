interface CloudinaryImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  quality?: number;
}

export default function CloudinaryImage({ 
  src, 
  alt, 
  className = "", 
  width = 800, 
  height = 600, 
  quality = 85 
}: CloudinaryImageProps) {
  const cloudinaryUrl = `https://res.cloudinary.com/ddhfjoo0u/image/upload/c_limit,w_${width},q_${quality || "auto"}/v1752315391/${src}`;

  return (
    <img
      src={cloudinaryUrl}
      alt={alt}
      className={className}
      loading="lazy"
      width={width}
      height={height}
    />
  );
}