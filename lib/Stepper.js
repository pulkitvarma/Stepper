"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _jquery = _interopRequireDefault(require("jquery"));

var _Stepper = _interopRequireDefault(require("./Step"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Stepper =
/*#__PURE__*/
function (_Component) {
  _inherits(Stepper, _Component);

  _createClass(Stepper, null, [{
    key: "propTypes",
    get: function get() {
      return {
        steps: _propTypes.default.array
      };
    }
  }]);

function Stepper(props) {
  var _this;

  _classCallCheck(this, Stepper);

  _this = _possibleConstructorReturn(this, _getPrototypeOf(Stepper).call(this, props));

  _this.state=({
    activeStep: 1,
    completed: 0
  })
  return _this;
}

_createClass(Stepper, [{
  key: "componentDidMount",
  value: function componentDidMount() {
    (0, _jquery.default)('.stepper-item-inner-active').parent().addClass('sizeparent');
    (0, _jquery.default)('.stepper-item-inner-active').parent().css('pointer-events', 'auto');

    for (var i = 1; i < this.state.activeStep; i++) {
      (0, _jquery.default)(".".concat(i)).addClass('completed');
    }

    for (var _i2 = 0; _i2 < this.state.completed; _i2++) {
      (0, _jquery.default)('.stepper-item-inner').eq(_i2).addClass('step-completed');
      (0, _jquery.default)('.step-completed').parent().css('pointer-events', 'auto');
    }
  }
},{
  key: "handleOnClickStepper",
  value: function handleOnClickStepper(step) {
    const completed = this.state.completed;
    this.setState({ 
      completed: completed,
      activeStep: step
    });
  }
},
  {
    key: "handleOnNextClick",
    value: function handleOnNextClick() {
    var nextStep = this.state.activeStep + 1;

    if (nextStep === props.steps.length) {
      this.setState({
        activeStep: nextStep,
        completed: props.steps.length
      });
    } else if (this.state.activeStep <= this.state.completed) {
      const completed = this.state.completed;
      this.setState({ 
        completed: completed,
        activeStep: nextStep
      });
    } else {
      this.setState({
        activeStep: nextStep,
        completed: nextStep - 1
      });
    }
  }
},{
  key: "handleFinish",
  value: function handleFinish() {
    console.log('Finished');
  }
},{
  key: "handleOnClickBack",
  value: function handleOnClickBack() {
    var prevStep = this.state.activeStep - 1;
    const completed = this.state.completed;
    this.setState({ 
      completed: completed,
      activeStep: prevStep
    });
  }
},
{
  key: "render",
  value: function render() {
  return _react.default.createElement("div", {
    className: "stepper"
  }, _react.default.createElement(_Stepper.default, {
    steps: props.steps,
    activeStep: this.state.activeStep,
    onSelect: handleOnClickStepper,
    showNumber: false
  }), _react.default.createElement("div", {
    className: "stepper-body"
  }, props.stepContent(this.state.activeStep - 1), _react.default.createElement("div", {
    className: "buttons",
    style: {
      marginTop: '40px'
    }
  }, this.state.activeStep === 1 ? _react.default.createElement("input", {
    type: "button",
    disabled: true,
    className: "previous-button",
    value: "Back",
    onClick: handleOnClickBack
  }) : _react.default.createElement("input", {
    type: "button",
    className: "previous-button",
    value: "Back",
    onClick: handleOnClickBack
  }), _react.default.createElement("input", {
    type: "button",
    className: this.state.activeStep === props.steps.length ? "finish-button" : "next-button",
    value: this.state.activeStep === props.steps.length ? 'Finish' : 'Next',
    onClick: this.state.activeStep === props.steps.length ? handleFinish : handleOnNextClick
  }))));
}
}]);

return Stepper;
}(_react.Component);

exports.default = Stepper;