"use strict";

module.exports = ({ strapi }) => ({
  async count(ctx) {
    ctx.body = await strapi.plugin("todo").service("task").count();
  },
});
