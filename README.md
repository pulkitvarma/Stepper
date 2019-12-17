# timer-countdown

timer-countdown is a simple count down timer component using react, which takes time as an input in milliseconds with an optional input of which function to be invoked when the timer completes.

## Installation

`yarn add timer-countdown`

## Demo

https://stackblitz.com/edit/react-tjdsbw?file=CountdownTimer.css

## Usage

```jsx
import CountdownTimer from 'timer-countdown';
import ReactDOM from 'react-dom';
import React from 'react';

const tick =(leftTime) => {
    console.log(leftTime);
  }

const completed = () => {
  console.log('Timer has completed')
}

const props = {
 timeLeft : 56000, // time in milliseconds
 completeCallback: completed() //function to be invoked when the countdown timer finishes
 tickCallback: tick()
}

const Example = () => (
  <div>
    <CountdownTimer {...this.props} />
  </div>
)

ReactDOM.render(<Example />, document.getElementById('root'))
```

## Development
    yarn
    yarn dev

## Test
    yarn test

## Build
    yarn
    yarn build

## Publish
    npm login
    npm version patch
    git add -A
    git push origin master
    npm publish
