import { memo } from "react";
import PropTypes, { oneOfType } from "prop-types";

const ItemStatistics = (props) => {
  const { text, value } = props;
  return (
    <li>
      <p>{`${text}: ${value}`}</p>
    </li>
  );
};

ItemStatistics.propTypes = {
  text: PropTypes.string.isRequired,
  value: oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
};
export default memo(ItemStatistics);
