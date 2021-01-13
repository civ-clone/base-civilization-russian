"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatherineTheGreat = void 0;
const Leader_1 = require("@civ-clone/core-civilization/Leader");
const Russian_1 = require("../Russian");
class CatherineTheGreat extends Leader_1.default {
    static civilization() {
        return Russian_1.default;
    }
    name() {
        return 'Catherine the Great';
    }
}
exports.CatherineTheGreat = CatherineTheGreat;
exports.default = CatherineTheGreat;
//# sourceMappingURL=CatherineTheGreat.js.map