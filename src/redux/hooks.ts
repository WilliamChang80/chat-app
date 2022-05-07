import { useSelector } from "react-redux";

export const useAppSelector = useSelector;

export function withPayloadType<T>() {
  return (t: T) => ({ payload: t });
}
