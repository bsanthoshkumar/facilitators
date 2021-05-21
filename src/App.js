import "./App.css";
import Api from "./api/Api";
import { useEffect, useState } from "react";

const App = () => {
  const [facilitators, setFacilitators] = useState();

  useEffect(() => {
    Api.getFacilitatorList().then(setFacilitators);
  }, []);

  return facilitators !== undefined ? (
    <div>
      {facilitators.map((facilitator) => (
        <p>{facilitator.name}</p>
      ))}
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default App;
