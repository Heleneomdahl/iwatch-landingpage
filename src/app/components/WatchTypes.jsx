import Image from "next/image";

const WatchTypes = ({ src, alt, onClick }) => {
  return (
    <Image
      src={src}
      alt={alt}
      onClick={onClick}
      className="watch-type-img hover:-translate-y-1 hover:scale-103"
    />
  );
};

export default WatchTypes;
