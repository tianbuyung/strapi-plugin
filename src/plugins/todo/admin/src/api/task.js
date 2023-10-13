import axios from "axios";

const BASE_URL = process.env.STRAPI_BASE_URL || "http://localhost:1337";

const taskRequests = {
  getTaskCount: async () => {
    const data = await axios.get(`${BASE_URL}/todo/count`);
    return data;
  },

  getSettings: async () => {
    const data = await axios.get(`${BASE_URL}/todo/settings`);
    return data;
  },

  setSettings: async (data) => {
    return await axios.post(`${BASE_URL}/todo/settings`, {
      body: data,
    });
  },
};

export default taskRequests;
