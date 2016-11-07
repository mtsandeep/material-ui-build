'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

var _SvgIcon = require('../../SvgIcon');

var _SvgIcon2 = _interopRequireDefault(_SvgIcon);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var NavigationCancelSquare = function NavigationCancelSquare(props) {
  return _react2.default.createElement(_SvgIcon2.default, props, _react2.default.createElement('path', { d: 'M2,0 C0.9,0 0,0.9 0,2 L0,16 C0,17.1 0.9,18 2,18 L16,18 C17.1,18 18,17.1 18,16 L18,2 C18,0.9 17.1,0 16,0 L2,0 Z M9,10.4 L5.4,14 L4,12.6 L7.6,9 L4,5.4 L5.4,4 L9,7.6 L12.6,4 L14,5.4 L10.4,9 L14,12.6 L12.6,14 L9,10.4 Z' }));
};
NavigationCancelSquare = (0, _pure2.default)(NavigationCancelSquare);
NavigationCancelSquare.displayName = 'NavigationCancelSquare';
NavigationCancelSquare.muiName = 'SvgIcon';

exports.default = NavigationCancelSquare;