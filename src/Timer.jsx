import { useEffect, useState } from "react";


function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return <h1>{count} kez render edildi</h1>;
}

export default Timer