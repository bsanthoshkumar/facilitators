import fetch from "node-fetch";

const Api = {
  getMeetings: () => fetch("/api/getMeetings").then((res) => res.json()),
  getFacilitators: (meeting) =>
    fetch(`/api/getFacilitators?meeting=${meeting}`).then((res) => res.json()),
};

export default Api;
