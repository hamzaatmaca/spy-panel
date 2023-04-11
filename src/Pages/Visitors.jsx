import React, { useEffect, useState } from "react";
import fetchService from "../Hooks/useFetch";
import moment from "moment";
import Card from "../Components/Dynamic/Card";

const Visitors = () => {
  const [visitors, setVisitors] = useState("");
  const [cities, setCities] = useState([]);
  const [maxCities, setMaxCities] = useState("");

  React.useEffect(() => {
    fetchService("getvisitors", "GET")
      .then((res) => {
        setVisitors(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const result =
      Array.isArray(visitors) &&
      visitors.map((val) => {
        return {
          date: moment(val.date).format("MM DD YYYY, h:mm:ss a"),
          location: val.location.split(",")[0],
        };
      });
    setCities(result);
  }, [visitors]);

  useEffect(() => {
    const count = {};
    Array.isArray(cities) &&
      cities.forEach((el) => {
        if (count[el.location]) {
          count[el.location] += 1;
        } else {
          count[el.location] = 1;
        }
      });

    let max_count;
    let max_count_numb = 0;

    for (const el in count) {
      if (count[el] > max_count_numb) {
        max_count_numb = count[el];
        max_count = el;
      }
    }
    setMaxCities(max_count);
  }, [cities]);

  return (
    <>
      <div className="row mt-5 ">
        <div className="col-sm-5 visitorsTable">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th
                  style={{
                    width: "10rem",
                  }}
                  scope="col"
                >
                  <h5
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <i
                      style={{ color: "#569595" }}
                      className="fa-solid fa-file-excel"
                    ></i>
                  </h5>
                </th>
                <th style={{ color: "#569595" }} scope="col">
                  Şehir
                </th>
                <th style={{ color: "#569595" }} scope="col">
                  Tarih
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(cities) === false ? (
                <div
                  className="spinner-border text-warning visitorsSpinner"
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              ) : (
                cities.map((comp, key) => {
                  return (
                    <tr key={key}>
                      <th scope="row">{key + 1}</th>
                      <td>{comp.location}</td>
                      <td>{comp.date}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
        <div className="col-sm-1"></div>
        <div className="col-sm-5">
          <div className="row mt-5">
            <div className="col-sm-6">
              <Card
                title={
                  <span
                    style={{
                      textAlign: "center!important",
                      marginTop: "1rem",
                      color: "#569595",
                    }}
                  >
                    <i className="fa-solid fa-user"></i> &nbsp;Ziyaretçi Sayısı
                  </span>
                }
                content={
                  <h4
                    style={{
                      marginTop: "1rem",
                    }}
                  >
                    {String(cities.length ? cities.length : "0")}
                  </h4>
                }
                link1={""}
                link2={""}
              />
            </div>
            <div className="col-sm-6">
              <Card
                title={
                  <span
                    style={{
                      color: "#569595",
                      textAlign: "center",
                      marginTop: "1rem",
                    }}
                  >
                    <i className="fa-solid fa-city"></i> &nbsp; En Fazla Şehir
                  </span>
                }
                content={
                  <h4
                    style={{
                      marginTop: "1rem",
                    }}
                  >
                    {maxCities ? maxCities : "Aranıyor..."}
                  </h4>
                }
                link1={""}
                link2={""}
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-sm-6"></div>
            <div className="col-sm-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Visitors;
