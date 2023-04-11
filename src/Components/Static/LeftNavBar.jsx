import React from "react";
import LeftNavLink from "../Dynamic/LeftNavLink";
import { trToEng } from "../../Utils/trToEng";

const LeftNavBar = () => {
  const itemsRef = React.useRef([]);

  const links = [
    {
      linkName: "Ziyaretçiler",
      icon: <i className="fa-solid fa-users"></i>,
    },
    {
      linkName: "Raporlar",
      icon: <i className="fa-solid fa-chart-simple"></i>,
    },
  ];

  const handleLeftNavLink = (key) => {
    window.location.href = trToEng(
      itemsRef.current[key].innerText.trim().toLowerCase()
    );
  };
  return (
    <>
      <div className="leftNavbar">
        <ul className="list-group">
          <li
            style={{
              height: "4rem",
              display: "flex",
              justifyContent: "left",
              alignItems: "Center",
              letterSpacing: ".3rem",
            }}
            className="list-group-item"
          >
            DashBoard
          </li>
          {Array.isArray(links) &&
            links.map((comp, key) => {
              return (
                <LeftNavLink
                  onClick={() => {
                    handleLeftNavLink(key);
                  }}
                  key={key}
                  reference={(el) => (itemsRef.current[key] = el)}
                  icon={comp.icon}
                  linkName={comp.linkName}
                />
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default LeftNavBar;
