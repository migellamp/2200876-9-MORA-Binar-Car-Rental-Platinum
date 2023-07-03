import * as React from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import dayjs from "dayjs";
import { Navigate } from "react-router-dom";
// import { Button } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";
import { Cookies } from "react-cookie";
import "./style.css";
import Table from "react-bootstrap/Table";
import NavbarAdmin from "../../PageComponent/NavbarAdmin";

const DashboardAdmin = () => {
  const cookies = new Cookies();
  const token = cookies.get("uidTokenBinarApp");
  const [isDisplay, setDisplay] = React.useState(false);
  const [listOrder, setListOrder] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [sort, setSort] = React.useState("");

  if (document.cookie.includes("uidTokenBinarApp") === false)
    return <Navigate to={"/admin"} />;
  // const navigate = useNavigate();

  const chartData = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    },
    series: [
      {
        name: "Penjualan Mobil",
        data: [0, 1, 2, 5, 0, 1, 0, 2],
      },
    ],
  };
  const [range, setRange] = React.useState(undefined);
  const [chart, setChart] = React.useState(chartData);
  //   const [dateRange, setDateRange] = React.useState([]);

  let footer = <p>Please pick the first day.</p>;
  if (range?.from) {
    if (!range.to) {
      footer = <p>{format(range.from, "PPP")}</p>;
    } else if (range.to) {
      footer = (
        <p>
          {format(range.from, "PPP")}–{format(range.to, "PPP")}
        </p>
      );
    }
  }
  const numberFormat = (value) =>
    new Intl.NumberFormat("id", {
      style: "currency",
      currency: "IDR",
    }).format(value);

  const getAmount = async () => {
    const day = [];
    const amount = [];
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },
    };
    const getData = await axios.get(
      `${process.env.REACT_APP_BASEURL}/admin/order/reports?from=${dayjs(
        range.from
      ).format("YYYY-MM-DD")}&until=${dayjs(range.to).format("YYYY-MM-DD")}`,
      requestOptions
    );
    console.log(getData.data);
    getData.data.map((data) => {
      return (
        day.push(dayjs(data.day).format("DD")), amount.push(data.orderCount)
      );
    });
    const chart = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: day,
        },
      },
      series: [
        {
          name: "series-1",
          data: amount,
        },
      ],
    };
    setChart(chart);
    console.log(getData.data);
    console.log(chart);
  };

  const showChart = () => {
    getAmount();
  };

  const getOrder = async () => {
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },
    };
    const getData = await axios.get(
      `${process.env.REACT_APP_BASEURL}/admin/v2/order?page=${page}&pageSize=10`,
      requestOptions
    );
    setListOrder(getData.data.orders);
  };

  const sortOrder = async () => {
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        access_token: token,
      },
    };
    const getData = await axios.get(
      `${process.env.REACT_APP_BASEURL}/admin/v2/order?sort=${sort}%3Aasc&page=${page}&pageSize=10`,
      requestOptions
    );
    setListOrder(getData.data.orders);
    console.log(listOrder);
  };

  const nextPage = () => {
    setPage(page + 1);
  };

  const BeforePage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  React.useEffect(() => {
    sortOrder();
  }, [sort]);

  React.useEffect(() => {
    getOrder();
  }, [page]);

  React.useEffect(() => {
    getOrder();
  }, []);
  return (
    <>
      <NavbarAdmin />
      <div className="container-payment">
        <div className="cover-payment">
          <div className="container-back-button">
            <div className="form-back-button fbb-payment">
              <div className="title-header-admin">
                <h1>Admin Page</h1>
              </div>
              <div className="title-visual mt-5">
                <span className="kotak">s</span>
                <h4 style={{ marginLeft: 10 }}>
                  Rentend Car Data Visualization
                </h4>
              </div>

              <p className="mt-3">Month</p>
              <div className="button-container-month">
                <button
                  className="buttonMonth"
                  onClick={() => setDisplay(!isDisplay)}
                >
                  {footer}
                  {isDisplay ? (
                    <i className="fa fa-chevron-up" aria-hidden="true"></i>
                  ) : (
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                  )}
                </button>
                {isDisplay ? (
                  <div className="open-calender calender-admin mt-5">
                    <DayPicker
                      defaultMonth={new Date(Date.now())}
                      mode="range"
                      selected={range}
                      onSelect={setRange}
                      footer={footer}
                      format={"YYYY-DD-MM"}
                    />
                    <button
                      className="sewa-button confirm-button mt-2"
                      onClick={() => setDisplay(false)}
                      style={{
                        width: "320px",
                        backgroundColor: "#35B0A7",
                        color: "white",
                        fontWeight: "bold",
                        border: "#5CB85F",
                        paddingTop: 8,
                        paddingLeft: 12,
                        paddingRight: 12,
                        paddingBottom: 8,
                        alignItems: "center",
                      }}
                    >
                      Simpan Tanggal
                    </button>
                  </div>
                ) : null}

                <button className="button-go" onClick={showChart}>
                  <h5>Go</h5>
                </button>
              </div>
              <div className="Chart mt-5">
                <div className="chart-title">
                  <Chart
                    options={chart.options}
                    series={chart.series}
                    type="bar"
                    width={1000}
                    height={376}
                  />
                  <h6>Amount of Car Rented</h6>
                </div>
                <h6>Date</h6>
              </div>
              <h4 className="mt-5" style={{ fontWeight: "bold" }}>
                Dashboard
              </h4>
              <div className="title-visual mt-4">
                <span className="kotak">s</span>
                <h4 style={{ marginLeft: 10 }}>List Order</h4>
              </div>
              <Table striped bordered hover className="mt-4">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>
                      User Email{" "}
                      <button
                        className="sort"
                        onClick={() => setSort("user_email")}
                      >
                        <i className="fa fa-sort" aria-hidden="true"></i>
                      </button>
                    </th>
                    <th>
                      Car{" "}
                      <button
                        className="sort"
                        onClick={() => setSort("car_name")}
                      >
                        <i className="fa fa-sort" aria-hidden="true"></i>
                      </button>
                    </th>
                    <th>
                      Start Rent{" "}
                      <button
                        className="sort"
                        onClick={() => setSort("start_rent_at")}
                      >
                        <i className="fa fa-sort" aria-hidden="true"></i>
                      </button>
                    </th>
                    <th>
                      Finish Rent{" "}
                      <button
                        className="sort"
                        onClick={() => setSort("finish_rent_at")}
                      >
                        <i className="fa fa-sort" aria-hidden="true"></i>
                      </button>
                    </th>
                    <th>
                      Price{" "}
                      <button className="sort" onClick={() => setSort("price")}>
                        <i className="fa fa-sort" aria-hidden="true"></i>
                      </button>
                    </th>
                    <th>
                      Category Rent{" "}
                      <button
                        className="sort"
                        onClick={() => setSort("category")}
                      >
                        <i className="fa fa-sort" aria-hidden="true"></i>
                      </button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listOrder.map((data, value) => {
                    return (
                      <tr key={value + 1 + (page - 1) * 10}>
                        <td>{value + 1 + (page - 1) * 10}</td>
                        <td>{data.User.email}</td>
                        <td>{data.CarId}</td>
                        <td>
                          {dayjs(data.start_rent_at).format("DD-MM-YYYY")}
                        </td>
                        <td>
                          {dayjs(data.finish_rent_at).format("DD-MM-YYYY")}
                        </td>
                        <td>{numberFormat(data.total_price)}</td>
                        <td>{data.status ? "Disewakan" : "Kosong"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <div className="paging-admin">
                <button onClick={BeforePage}>
                  <i className="fa fa-chevron-left" aria-hidden="true"></i>
                </button>
                <button disabled style={{ color: "black" }}>
                  {page}
                </button>
                <button onClick={nextPage}>
                  <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardAdmin;
