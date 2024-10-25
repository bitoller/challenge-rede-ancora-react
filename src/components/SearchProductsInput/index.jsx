import { useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { StyledSearchProductsInput, StyledKeyboardContainer } from "./style";

export function SearchProductsInput({ input, setInput }) {
  const [keyboard, setKeyboard] = useState(null);
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [layoutName, setLayoutName] = useState("default");

  const handleChange = (event) => {
    const inputValue = event.target.value;
    setInput(inputValue);
    if (keyboard) {
      keyboard.setInput(inputValue);
    }
  };

  const onChangeKeyboard = (inputValue) => {
    setInput(inputValue);
  };

  const handleFocus = () => {
    setIsKeyboardVisible(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      if (!document.activeElement.classList.contains("hg-button")) {
        setIsKeyboardVisible(false);
      }
    }, 100);
  };

  const handleKeyPress = (button) => {
    if (button === "{bksp}") {
      setInput(input.slice(0, -1));
      if (keyboard) {
        keyboard.setInput(input.slice(0, -1));
      }
    } else if (button === "{symbols}") {
      setLayoutName("symbols");
    } else if (button === "{default}") {
      setLayoutName("default");
    }
  };

  const keyboardLayout = {
    default: [
      "1 2 3 4 5 6 7 8 9 0",
      "q w e r t y u i o p",
      "a s d f g h j k l",
      "z x c v b n m {bksp}",
      "{symbols} {space} @ .",
    ],
    symbols: [
      "~ ` | \\ _ ^ { } [ ]",
      "! @ # $ % & * ( )",
      "< > + = / ? : ; {bksp}",
      "{default} , . ' \"",
      "{space}",
    ],
  };

  return (
    <div>
      <StyledSearchProductsInput
        type="text"
        value={input}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Digite o nome ou código do produto"
      />

      {isKeyboardVisible && (
        <StyledKeyboardContainer onMouseDown={(e) => e.preventDefault()}>
          <Keyboard
            onChange={onChangeKeyboard}
            onKeyPress={handleKeyPress}
            theme={"hg-theme-default hg-layout-default"}
            keyboardRef={(r) => setKeyboard(r)}
            layout={keyboardLayout}
            display={{
              "{space}": "Espaço",
              "{bksp}": "⌫",
              "{symbols}": "?123",
              "{default}": "ABC",
            }}
            layoutName={layoutName}
          />
        </StyledKeyboardContainer>
      )}
    </div>
  );
}
