import "./App.css";
import Api from "./api/Api";
import { useEffect, useState } from "react";
import Meetings from "./components/meetings/Meetings";

const App = () => {
  const [facilitators, setFacilitators] = useState();
  const [meetingList, setMeetingList] = useState();

  useEffect(() => {
    Api.getMeetings().then(setMeetingList);
  }, []);

  return meetingList !== undefined ? (
    <div>
      <Meetings meetingList={meetingList} />
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default App;
