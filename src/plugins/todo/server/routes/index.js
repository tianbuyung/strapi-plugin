module.exports = [
  {
    method: "GET",
    path: "/count",
    handler: "task.count",
    config: {
      policies: [],
      auth: false,
    },
  },
];
