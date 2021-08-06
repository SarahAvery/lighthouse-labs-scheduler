import { useState } from "react";

function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (mode, replace = false) => {
    if (replace === true) {
      const newHistory = [...history];
      newHistory.pop();
      newHistory.push(mode);

      setHistory([...newHistory]);

      setMode(mode);
    } else {
      setHistory([...history, mode]);
      setMode(mode);
    }
  };

  const back = () => {
    if (history.length) {
      const newHistory = [...history];
      newHistory.pop();
      const prev = newHistory.slice(-1)[0];

      setMode(prev);
      setHistory(newHistory);
    }
  };

  return { mode, transition, back };
}

export default useVisualMode;
