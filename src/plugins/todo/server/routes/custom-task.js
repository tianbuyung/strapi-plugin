"use strict";

module.exports = {
  type: "admin", // other type available: content-api.
  routes: [
    {
      method: "GET",
      path: "/count",
      handler: "task.count",
      config: {
        policies: [],
        auth: false,
      },
    },
  ],
};
