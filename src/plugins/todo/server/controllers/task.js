"use strict";

/**
 *  controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("plugin::todo.task", {
  async count(ctx) {
    ctx.body = await strapi.plugin("todo").service("task").count();
  },
});
