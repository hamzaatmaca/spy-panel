import React from "react";
import PropTypes from "prop-types";

const LeftNavLink = ({ icon, linkName, reference, onClick }) => {
  return (
    <>
      <li onClick={onClick} ref={reference} className="list-group-item">
        {icon}&nbsp; {linkName}
      </li>
    </>
  );
};

LeftNavLink.propTypes = {
  linkName: PropTypes.string,
  icon: PropTypes.object,
};
export default LeftNavLink;
