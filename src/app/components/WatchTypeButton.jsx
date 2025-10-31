const WatchTypeButton = ({ onSelect, color, label, isActive }) => {
  return <button onClick={onSelect} aria-label={label} className={`circle ${color} ${isActive ? "active" : ""}`} />;
};

export default WatchTypeButton;
