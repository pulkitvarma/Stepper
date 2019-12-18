"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _jquery = _interopRequireDefault(require("jquery"));

var _Stepper = _interopRequireDefault(require("./Step"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  var_this;

  _classCallCheck(this, CountdownTimer);

  _this = _possibleConstructorReturn(this, _getPrototypeOf(CountdownTimer).call(this, props));

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
    this.setState({ 
      ...this.state,
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
      this.setState({ 
        ...this.state,
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
    this.setState({ 
      ...this.state,
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