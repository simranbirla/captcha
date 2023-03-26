import React, { useState } from "react";
import { generateCaptcha } from "../utils/generateCapatch";

const Captcha = () => {
  const [captcha, setCaptcha] = useState<string>(generateCaptcha());
  const [input, setInput] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInput(e.target.value);
    setIsCorrect(e.target.value === captcha);
  };

  const handleRefresh = () => {
    setCaptcha(generateCaptcha());
    setInput("");
    setIsCorrect(false);
  };

  return (
    <div className="form-group captcha">
      <div className="captcha-text">{captcha}</div>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        placeholder="enter captcha"
      />
      <button onClick={handleRefresh}>Refresh</button>
      {isCorrect && <div className="captcha-correct">Correct!</div>}
    </div>
  );
};

export default Captcha;
