import { ReactTestInstance, ReactTestRenderer } from "react-test-renderer";

export const findByTestId = (
  instance: ReactTestRenderer,
  testId: string
): string | ReactTestInstance =>
  instance.root.findByProps({ "data-testid": testId }).children[0];
