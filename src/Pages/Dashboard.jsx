import React, { useCallback } from "react";
import PropTypes from "prop-types";
import Navbar from "../Components/Static/Navbar";
import LeftNavBar from "../Components/Static/LeftNavBar";
import Visitors from "./Visitors";
import Reports from "./Reports";

const Dashboard = React.memo(({ route }) => {
  const dashBoardContent = useCallback(
    (val) => {
      switch (val) {
        case "/ziyaretciler":
          return <Visitors />;

        case "/raporlar":
          return <Reports />;

        default:
          break;
      }
    },
    [route]
  );

  return (
    <>
      <Navbar />
      <div className="container-fluid p-0 overflow-hidden">
        <div className="row">
          <div className="col-md-2">
            <LeftNavBar />
          </div>
          <div className="col-md-10">{dashBoardContent(route)}</div>
        </div>
      </div>
    </>
  );
});

Dashboard.propTypes = {
  route: PropTypes.string,
};

export default Dashboard;
