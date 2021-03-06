import "./styles.css";
import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";

export default function App() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickDisplay = () => setOpen(!open);
  const onClickClose = useCallback(() => setOpen(false), []);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickDisplay}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
