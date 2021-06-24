import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Facilitators.scss";
import Api from "../../api/Api";

const Facilitators = () => {
  const [facilitators, setFacilitators] = useState();
  const { meeting } = useParams();

  useEffect(() => {
    Api.getFacilitators(meeting).then(setFacilitators);
  }, []);

  return facilitators !== undefined ? (
    <div className="main-container">
      <div className="facilitators-container">
        {facilitators.map(({ id, name, status }) => (
          <div key={id} className="facilitator">
            <p className="facilitator-name">{name}</p>
            <p className={`facilitator-status facilitator-status-${status}`}>
              {status}
            </p>
          </div>
        ))}
      </div>
      <div>Spin wheel</div>
    </div>
  ) : (
    <p>Facilitators</p>
  );
};

export default Facilitators;
