import { PayloadAction } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { RootState } from "redux/store";
import * as counterActions from "./slices";

interface CounterDispatchProps {
  increment: VoidFunction;
  decrement: VoidFunction;
  incrementByNumber: (count: number) => void;
}

interface CounterStateProps {
  counter: counterActions.CounterState;
}

type CounterProps = CounterDispatchProps & CounterStateProps;

const Counter = ({
  increment,
  decrement,
  incrementByNumber,
  counter,
}: CounterProps) => {
  return (
    <div>
      <div>
        <button aria-label="Decrement value" onClick={() => decrement()}>
          Decrement
        </button>
        <span data-testid="counter-value">{counter.count}</span>
        <button aria-label="Increment value" onClick={() => increment()}>
          Increment
        </button>
        <button aria-label="+10" onClick={() => incrementByNumber(10)}>
          +10
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ counter }: RootState): CounterStateProps => ({
  counter,
});

const mapDispatchToProps = (
  dispatch: Dispatch<PayloadAction<number | void>>
): CounterDispatchProps => ({
  increment: () => dispatch(counterActions.increment({})),
  decrement: () => dispatch(counterActions.decrement({})),
  incrementByNumber: (count: number) =>
    dispatch(counterActions.incrementByNumber(count)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
