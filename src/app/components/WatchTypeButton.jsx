const WatchTypeButton = ({ onSelect, color, label, isActive }) => {
  return (
    <button
      onClick={onSelect}
      aria-label={label}
      className={`h-[25px] w-[25px] cursor-pointer rounded-full ${color} ${
        isActive ? "border-3 border-white" : ""
      }`}
    />
  );
};

export default WatchTypeButton;
