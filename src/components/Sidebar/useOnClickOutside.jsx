import { useCallback, useEffect } from "react";

export function useOnClickOutside(ref, handler) {
  const optimizedHandler = useCallback(handler, []);
  useEffect(() => {
    const listener = (event) => {
      // .contains() checks for descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      optimizedHandler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, optimizedHandler]);
}
