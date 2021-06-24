import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Api from "../../api/Api";
import "./Meetings.scss";

const Meetings = () => {
  const [meetingList, setMeetingList] = useState();
  const history = useHistory();

  useEffect(() => {
    Api.getMeetings().then(setMeetingList);
  }, []);

  return meetingList !== undefined ? (
    <div>
      <div className="meeting-container">
        {meetingList.map((meeting) => (
          <div
            className="meeting"
            onClick={() => history.push(`/${meeting.name}/facilitators`)}
          >
            {meeting.name}
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Meetings;
