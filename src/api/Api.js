import fetch from "node-fetch";

const Api = {
  getFacilitatorList: () =>
    fetch("/api/getFacilitatorList").then((res) => res.json()),
};

export default Api;
