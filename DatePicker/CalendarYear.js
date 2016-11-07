'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _YearButton = require('./YearButton');

var _YearButton2 = _interopRequireDefault(_YearButton);

var _dateUtils = require('./dateUtils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CalendarYear = function (_Component) {
  _inherits(CalendarYear, _Component);

  function CalendarYear() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CalendarYear);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CalendarYear.__proto__ || Object.getPrototypeOf(CalendarYear)).call.apply(_ref, [this].concat(args))), _this), _this.handleTouchTapYear = function (event, year) {
      if (_this.props.onTouchTapYear) {
        _this.props.onTouchTapYear(event, year);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CalendarYear, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scrollToSelectedYear();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.scrollToSelectedYear();
    }
  }, {
    key: 'getYears',
    value: function getYears() {
      var _props = this.props,
          DateTimeFormat = _props.DateTimeFormat,
          locale = _props.locale,
          minDate = _props.minDate,
          maxDate = _props.maxDate,
          selectedDate = _props.selectedDate;


      var minYear = minDate.getFullYear();
      var maxYear = maxDate.getFullYear();
      var years = [];
      var dateCheck = (0, _dateUtils.cloneDate)(selectedDate);

      for (var year = minYear; year <= maxYear; year++) {
        dateCheck.setFullYear(year);
        var selected = selectedDate.getFullYear() === year;
        var selectedProps = {};
        if (selected) {
          selectedProps.ref = 'selectedYearButton';
        }

        var yearFormated = new DateTimeFormat(locale, {
          year: 'numeric'
        }).format(dateCheck);

        var yearButton = _react2.default.createElement(
          _YearButton2.default,
          _extends({
            key: 'yb' + year,
            onTouchTap: this.handleTouchTapYear,
            selected: selected,
            year: year
          }, selectedProps),
          yearFormated
        );

        years.push(yearButton);
      }

      return years;
    }
  }, {
    key: 'scrollToSelectedYear',
    value: function scrollToSelectedYear() {
      if (this.refs.selectedYearButton === undefined) {
        return;
      }

      var container = _reactDom2.default.findDOMNode(this);
      var yearButtonNode = _reactDom2.default.findDOMNode(this.refs.selectedYearButton);

      var containerHeight = container.clientHeight;
      var yearButtonNodeHeight = yearButtonNode.clientHeight || 32;

      var scrollYOffset = yearButtonNode.offsetTop + yearButtonNodeHeight / 2 - containerHeight / 2;
      container.scrollTop = scrollYOffset;
    }
  }, {
    key: 'render',
    value: function render() {
      var _context$muiTheme = this.context.muiTheme,
          prepareStyles = _context$muiTheme.prepareStyles,
          calendarYearBackgroundColor = _context$muiTheme.datePicker.calendarYearBackgroundColor;


      var styles = {
        root: {
          backgroundColor: calendarYearBackgroundColor,
          height: 'inherit',
          lineHeight: '35px',
          overflowX: 'hidden',
          overflowY: 'scroll',
          position: 'relative'
        },
        child: {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '100%'
        }
      };

      return _react2.default.createElement(
        'div',
        { style: prepareStyles(styles.root) },
        _react2.default.createElement(
          'div',
          { style: prepareStyles(styles.child) },
          this.getYears()
        )
      );
    }
  }]);

  return CalendarYear;
}(_react.Component);

CalendarYear.propTypes = {
  DateTimeFormat: _react.PropTypes.func.isRequired,
  locale: _react.PropTypes.string.isRequired,
  maxDate: _react.PropTypes.object.isRequired,
  minDate: _react.PropTypes.object.isRequired,
  onTouchTapYear: _react.PropTypes.func,
  selectedDate: _react.PropTypes.object.isRequired,
  wordings: _react.PropTypes.object
};
CalendarYear.contextTypes = {
  muiTheme: _react.PropTypes.object.isRequired
};
exports.default = CalendarYear;