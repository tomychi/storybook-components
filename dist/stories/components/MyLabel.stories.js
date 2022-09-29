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
exports.CustomBackgoundColor = exports.CustomColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    argTypes: {
        size: {
            control: {
                type: 'select',
            }
        },
        color: {
            control: {
                type: 'select',
            }
        },
        fontColor: {
            control: {
                type: 'color',
            }
        }
    }
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args)); };
// las paginas
// creamos una copia del template
exports.Basic = Template.bind({});
exports.Basic.args = {
    size: 'normal',
    allCaps: false // capitalizar todas las letras
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    size: 'normal',
    allCaps: true
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    size: 'normal',
    allCaps: false,
    color: 'secondary' // primary | secondary | tertiary
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
};
// Custom fontColor
// fontcolor: #5517ac
exports.CustomColor = Template.bind({});
exports.CustomColor.args = {
    size: 'h1',
    fontColor: '#5517ac'
};
exports.CustomBackgoundColor = Template.bind({});
exports.CustomBackgoundColor.args = {
    size: 'h1',
    fontColor: '#eee',
    backgroundColor: '#000'
};
