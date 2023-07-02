import * as React from "react";
import axios from "axios";
import Chart from "react-apexcharts";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import dayjs from "dayjs";
import { Navigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DashboardAdmin = () => {
  if (document.cookie === "") return <Navigate to={"/admin"} />;
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  if (role !== "Admin") {
    return <Navigate to="/admin" />;
  }

  const chartData = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
      },
    },
    series: [
      {
        name: "series-1",
        data: [0, 40, 45, 50, 49, 60, 70, 91],
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

  const getAmount = async () => {
    const day = [];
    const amount = [];
    const requestOptions = {
      headers: {
        "Content-Type": "application/json",
        access_token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY4ODI5MDA3M30.zx0VnDfW-Y5t1Qd9M3gQHl25KKuYKTXDRq3G6LhohDU",
      },
    };
    const getData = await axios.get(
      `${process.env.REACT_APP_BASEURL}/admin/order/reports?from=${dayjs(
        range.from
      ).format("YYYY-MM-DD")}&until=${dayjs(range.to).format("YYYY-MM-DD")}`,
      requestOptions
    );
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

  //   const getOrder = async () => {
  //     const requestOptions = {
  //       headers: {
  //         "Content-Type": "application/json",
  //         access_token:
  //           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY4ODI5MDA3M30.zx0VnDfW-Y5t1Qd9M3gQHl25KKuYKTXDRq3G6LhohDU",
  //       },
  //     };
  //     const getData = await axios.get(
  //       `${process.env.REACT_APP_BASEURL}/admin/v2/order?page=1&pageSize=10`,
  //       requestOptions
  //     );
  //     // console.log(getData.data);
  //   };
  return (
    <>
      <h1>Admin Page</h1>
      <Button
        onClick={() => {
          document.cookie = `uidTokenBinarApp=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
          localStorage.removeItem("role");
          return navigate("/admin");
        }}
        className="btn btn-primary btn-block w-100"
      >
        Log Out
      </Button>
      <DayPicker
        defaultMonth={new Date(Date.now())}
        mode="range"
        selected={range}
        onSelect={setRange}
        footer={footer}
        format={"YYYY-DD-MM"}
      />
      <button onClick={showChart}>Go</button>
      <Chart
        options={chart.options}
        series={chart.series}
        type="bar"
        width={500}
        height={320}
      />
      {}
    </>
  );
};

export default DashboardAdmin;
