import { Icon } from "@iconify/react";

const DisasterButtons = ({
  name,
  id,
  iconType,
  handleSelectClick,
  iconClass,
}) => {
  return (
    <button className="disaster-button" onClick={handleSelectClick} value={id}>
      <h4>{name}</h4>

      <Icon icon={iconType} className={iconClass} />
    </button>
  );
};

export default DisasterButtons;
