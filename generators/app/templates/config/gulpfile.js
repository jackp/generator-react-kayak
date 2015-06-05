/**
 * Require all tasks in /tasks folder
 */
var requireDir = require("require-dir");

requireDir("./tasks", { recurse: true });
