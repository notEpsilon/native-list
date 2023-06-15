import { useState } from "react";

const useToggle = (initialState: boolean): [boolean, () => void] => {
  const [isEnabled, setIsEnabled] = useState<boolean>(initialState);

  const toggle = () => {
    setIsEnabled((prev) => !prev);
  };

  return [isEnabled, toggle];
};

export { useToggle };
