import Image from "next/image";

const WatchTypes = ({ src, alt, onClick }) => {
  return <Image src={src} alt={alt} onClick={onClick} className="watch-type-img" />;
};

export default WatchTypes;
