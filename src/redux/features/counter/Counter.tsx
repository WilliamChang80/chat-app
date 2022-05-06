import { RootState } from 'redux/store'
import { connect } from 'react-redux'
import * as counterActions from './slices'
import { AnyAction, Dispatch } from 'redux'

interface CounterDispatchProps {
  increment: VoidFunction,
  decrement: VoidFunction,
  incrementByNumber: (count: number) => void,
}

interface CounterStateProps {
  counter: counterActions.CounterState
}

type CounterProps = CounterDispatchProps&CounterStateProps

const Counter = ({increment, decrement, incrementByNumber, counter}: CounterProps) => {
  return (
    <div>
      <div>
        <button
          aria-label="Decrement value"
          onClick={() => decrement()}
        >
          Decrement
        </button>
        <span>{counter.count}</span>
        <button
          aria-label="Increment value"
          onClick={() => increment()}
        >
          Increment
        </button>
        <button
          aria-label="+10"
          onClick={() => incrementByNumber(10)}
        >
          +10
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = ({counter}: RootState)  => {
  return {
    counter
  }
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>): CounterDispatchProps => {
  return {
    increment: () => dispatch(counterActions.increment()),
    decrement: () => dispatch(counterActions.decrement()),
    incrementByNumber: (count: number) => dispatch(counterActions.incrementByNumber(count))
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);