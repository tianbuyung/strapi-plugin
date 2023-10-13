import axios from "axios";

const BASE_URL = process.env.STRAPI_BASE_URL || "http://localhost:1337";

const taskRequests = {
  getTaskCount: async () => {
    const data = await axios.get(`${BASE_URL}/todo/count`);
    return data;
  },
};

export default taskRequests;
