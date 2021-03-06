"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.developmentConfig = void 0;
var default_1 = require("./default");
var utils_1 = require("./utils");
exports.developmentConfig = __assign(__assign({}, default_1.defaultEnv), { nodeEnv: utils_1.NodeEnvEnum.development, allowedOrigins: 'http://localhost:4200', mongoDBName: 'deploy-dev', mongoPass: 'or_1234', mongoUser: 'or_1234' });
