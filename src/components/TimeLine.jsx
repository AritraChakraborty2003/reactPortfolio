/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
const TimeLine = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://codemap.co.in/experienceAPI.php")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(data);
  return (
    <div className="mt-5 pt-3 pl-3">
      <VerticalTimeline lineColor="#fff">
        {data.map((val) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work "
            contentStyle={{ background: "#FFBF00", color: "#000000" }}
            icon={<FaBriefcase />}
            iconStyle={{
              background: "#1E90FF",
              color: "#fff",
              marginTop: "4px",
            }}
          >
            <>
              <h3 className="vertical-timeline-element-title font-bold text-2xl">
                {val.ename}
              </h3>
              <h4 className="vertical-timeline-element-subtitle font-normal font-poppins">
                {val.etype} || {val.etime}
              </h4>
              <p className="vertical-timeline-element-subtitle font-normal">
                {val.ecategory}
              </p>
            </>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};
export default TimeLine;
