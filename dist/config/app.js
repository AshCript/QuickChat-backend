"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TZ = exports.DB_PASSWORD = exports.DB_USERNAME = exports.DB_NAME = exports.DB_PORT = exports.DB_HOSTNAME = exports.APP_PORT = exports.NODE_ENV = exports.isProduction = void 0;
exports.isProduction = process.env.NODE_ENV === 'production';
_a = process.env, exports.NODE_ENV = _a.NODE_ENV, exports.APP_PORT = _a.APP_PORT, exports.DB_HOSTNAME = _a.DB_HOSTNAME, exports.DB_PORT = _a.DB_PORT, exports.DB_NAME = _a.DB_NAME, exports.DB_USERNAME = _a.DB_USERNAME, exports.DB_PASSWORD = _a.DB_PASSWORD, exports.TZ = _a.TZ;
//# sourceMappingURL=app.js.map