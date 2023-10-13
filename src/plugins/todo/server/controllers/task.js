"use strict";

/**
 *  controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("plugin::todo.task", {
  async count(ctx) {
    ctx.body = await strapi.plugin("todo").service("task").count();
  },

  async getSettings(ctx) {
    try {
      ctx.body = await strapi.plugin("todo").service("task").getSettings();
    } catch (err) {
      ctx.throw(500, err);
    }
  },

  async setSettings(ctx) {
    const { body } = ctx.request;
    try {
      await strapi.plugin("todo").service("task").setSettings(body);
      ctx.body = await strapi.plugin("todo").service("task").getSettings();
    } catch (err) {
      ctx.throw(500, err);
    }
  },
});
