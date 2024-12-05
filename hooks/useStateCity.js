import { useState } from "react";

const useStateCity = () => {
  const [city, setCity] = useState('Dnipro');
  return { city, setCity };
}

export default useStateCity;
