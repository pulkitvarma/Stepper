"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./Stepper.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Step =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Step, _React$Component);

  function Step() {
    _classCallCheck(this, Step);

    return _possibleConstructorReturn(this, _getPrototypeOf(Step).apply(this, arguments));
  }

  _createClass(Step, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          steps = _this$props.steps,
          showNumber = _this$props.showNumber,
          activeStep = _this$props.activeStep,
          onSelect = _this$props.onSelect;
      var lastIndexOfSteps = steps.length - 1;
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
        className: "stepper-container"
      }, steps.map(function (step, index) {
        return _react.default.createElement(_react.default.Fragment, {
          key: index
        }, _react.default.createElement("div", {
          className: "stepper-item"
        }, _react.default.createElement("div", {
          id: index,
          className: "stepper-item-outer ".concat(activeStep === index + 1 ? 'stepper-item-outer-active' : null),
          onClick: onSelect.bind(null, index + 1)
        }, _react.default.createElement("div", {
          className: "stepper-item-inner ".concat(activeStep === index + 1 ? 'stepper-item-inner-active' : index + 1 < activeStep ? 'stepper-item-inner-completed' : 'stepper-item-inner-future')
        }, "  ", showNumber && index + 1, " ", index + 1, ".\xA0 ", step.title, " "))), lastIndexOfSteps === index ? '' : _react.default.createElement("div", {
          className: "stepper-item-outer ".concat(index + 1)
        }, " "));
      })));
    }
  }]);

  return Step;
}(_react.default.Component);

exports.default = Step;
Step.defaultProps = {
  steps: [{
    title: 'Step 1'
  }, {
    title: 'Step 2'
  }, {
    title: 'Step 3'
  }, {
    title: 'Step 4'
  }],
  showNumber: false,
  activeStep: 2
};
Step.propTypes = {
  steps: _propTypes.default.arrayOf(_propTypes.default.shape({
    title: _propTypes.default.string
  })),
  showNumber: _propTypes.default.bool,
  activeStep: _propTypes.default.number
};