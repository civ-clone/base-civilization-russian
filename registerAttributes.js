"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Russian_1 = require("./Russian");
const Attribute_1 = require("@civ-clone/core-civilization/Attribute");
const AttributeRegistry_1 = require("@civ-clone/core-civilization/AttributeRegistry");
Object.entries({
    people: 'Russian',
    nation: 'Russia',
    colors: ['#eee', '#aaa', '#222'],
}).forEach(([name, value]) => AttributeRegistry_1.instance.register(new Attribute_1.default(Russian_1.default, name, value)));
//# sourceMappingURL=registerAttributes.js.map