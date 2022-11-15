import { Provider } from "react-redux";
import { create, ReactTestRenderer } from "react-test-renderer";
import configureStore from "redux-mock-store";
import { RootState } from "redux/store";
import { findByTestId } from "../../../../utils/test-utils";
import Counter from "../Counter";

describe("test counter", () => {
  const mockStore = configureStore([]);

  it("increase when + button clicked", () => {
    const rootState: RootState = {
      counter: { count: 1 },
    };

    const store = mockStore(rootState);

    const component: ReactTestRenderer = create(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    expect(findByTestId(component, "counter-value")).toEqual("1");
  });
});
