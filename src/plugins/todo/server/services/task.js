"use strict";

/**
 *  service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("plugin::todo.task", {
  async count() {
    return await strapi.query("plugin::todo.task").count(); // This
  },
});
