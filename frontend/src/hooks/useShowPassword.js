import { useState } from "react";

export const useShowPassword = () => {
  const [visibility, setVisibility] = useState(false);

  const setPasswordVisibility = () => {
    setVisibility(!visibility);
  };
  
  return {
    visibility,
    setPasswordVisibility
  }
};
