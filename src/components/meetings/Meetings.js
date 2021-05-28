import React from "react";
import "./Meetings.scss";

const Meetings = ({ meetingList }) => (
  <div className="meeting-container">
    {meetingList.map((meeting) => (
      <div className="meeting">{meeting.name}</div>
    ))}
  </div>
);

export default Meetings;
