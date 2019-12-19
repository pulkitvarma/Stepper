import React, { Component } from "react";
import $ from 'jquery';
import Stepper from "./Stepper";

class Test extends Component {
  
  constructor(props) {
    super(props);
    this.state = ({
      activeStep: 1,
      completed: 0
    })
  }

  handleOnClickStepper = (step) => {
    const completed = this.state.completed;
    this.setState({
      completed: completed,
      activeStep: step,
    });
  }

  handleOnNextClick = () => {
    let nextStep = this.state.activeStep + 1;
    if (nextStep === this.props.steps.length) {
      this.setState({
        activeStep: nextStep,
        completed: this.props.steps.length
      })
    }
    else if (this.state.activeStep <= this.state.completed) {
      const completed = this.state.completed;
      this.setState({
        completed: completed,
        activeStep: nextStep
      })
    }
    else {
      this.setState({
        activeStep: nextStep,
        completed: nextStep - 1
      })
    }
  }

  handleFinish = () => {
    console.log('Finished');
  }

  handleOnClickBack = () => {
    let prevStep = this.state.activeStep - 1;
    const completed = this.state.completed;
    this.setState({
      completed: completed,
      activeStep: prevStep,
    })
  }

  componentDidMount = () => {
    $('.stepper-item-inner-active').parent().addClass('sizeparent');
    $('.stepper-item-inner-active').parent().css('pointer-events', 'auto');
    for (let i = 1; i < this.state.activeStep; i++) {
      $(`.${i}`).addClass('completed');
    }
    for (let i = 0; i < this.state.completed; i++) {
      $('.stepper-item-inner').eq(i).addClass('step-completed');
      $('.step-completed').parent().css('pointer-events', 'auto');
    }
  }

  render() {
  return (
          <div className="stepper">
            <Stepper
              steps={this.props.steps}
              activeStep={this.state.activeStep}
              onSelect={this.handleOnClickStepper}
              showNumber={false} />
            <div className="stepper-body">
              {props.stepContent(this.state.activeStep - 1)}
              <div className="buttons" style={{ marginTop: '40px' }}>
                {this.state.activeStep === 1 ? <input type="button" disabled className="previous-button" value="Back" onClick={this.handleOnClickBack} /> : <input type="button" className="previous-button" value="Back" onClick={this.handleOnClickBack} />}
                <input type="button" className={this.state.activeStep === this.props.steps.length ? "finish-button" : "next-button"} value={this.state.activeStep === this.props.steps.length ? 'Finish' : 'Next'}
                  onClick={this.state.activeStep === this.props.steps.length ? handleFinish : handleOnNextClick} />
              </div>
            </div>
          </div>
  );
  }
}

export default Test;
