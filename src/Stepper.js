import React, { useEffect, useState } from "react";
import $ from 'jquery';
import Stepper from "./Stepper";

function Test(props) {

  const [state, setState] = useState({
    activeStep: 1,
    completed: 0
  })

  const handleOnClickStepper = (step) => {
    setState({
      ...state,
      activeStep: step,
    });
  }

  const handleOnNextClick = () => {
    let nextStep = state.activeStep + 1;
    if (nextStep === props.steps.length) {
      setState({
        activeStep: nextStep,
        completed: props.steps.length
      })
    }
    else if (state.activeStep <= state.completed) {
      setState({
        ...state,
        activeStep: nextStep
      })
    }
    else {
      setState({
        activeStep: nextStep,
        completed: nextStep - 1
      })
    }
  }

  const handleFinish = () => {
    console.log('Finished');
  }

  const handleOnClickBack = () => {
    let prevStep = state.activeStep - 1;
    setState({
      ...state,
      activeStep: prevStep,
    })
  }

  useEffect(() => {
    $('.stepper-item-inner-active').parent().addClass('sizeparent');
    $('.stepper-item-inner-active').parent().css('pointer-events', 'auto');
    for (let i = 1; i < state.activeStep; i++) {
      $(`.${i}`).addClass('completed');
    }
    for (let i = 0; i < state.completed; i++) {
      $('.stepper-item-inner').eq(i).addClass('step-completed');
      $('.step-completed').parent().css('pointer-events', 'auto');
    }
  })

  return (
          <div className="stepper">
            <Stepper
              steps={props.steps}
              activeStep={state.activeStep}
              onSelect={handleOnClickStepper}
              showNumber={false} />
            <div className="stepper-body">
              {props.stepContent(state.activeStep - 1)}
              <div className="buttons" style={{ marginTop: '40px' }}>
                {state.activeStep === 1 ? <input type="button" disabled className="previous-button" value="Back" onClick={handleOnClickBack} /> : <input type="button" className="previous-button" value="Back" onClick={handleOnClickBack} />}
                <input type="button" className={state.activeStep === props.steps.length ? "finish-button" : "next-button"} value={state.activeStep === props.steps.length ? 'Finish' : 'Next'}
                  onClick={state.activeStep === props.steps.length ? handleFinish : handleOnNextClick} />
              </div>
            </div>
          </div>
  );
}

export default Test;
