"use strict";

module.exports = ({ strapi }) => ({
  async count() {
    return await strapi.query("plugin::todo.task").count();
  },
});
