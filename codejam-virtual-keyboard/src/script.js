class Keyboard {
  constructor() {
    this.layoutEng = {
      keyBoardEngSigns: [
        '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
        'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'backslash',
        'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter',
        'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'shift',
        'ctrl', 'win', 'alt', 'space', 'alt', '◄', '▼', '►', 'ctrl',
      ],
      keys: {
        AltLeft: 'Alt',
        AltRight: 'Alt',
        ArrowDown: 'ArrowDown',
        ArrowLeft: 'ArrowLeft',
        ArrowRight: 'ArrowRight',
        ArrowUp: 'ArrowUp',
        Backquote: '`',
        Backslash: '\\',
        Backspace: 'Backspace',
        BracketLeft: '[',
        BracketRight: ']',
        CapsLock: 'CapsLock',
        Comma: ',',
        ControlLeft: 'Control',
        ControlRight: 'Control',
        Digit0: '0',
        Digit1: '1',
        Digit2: '2',
        Digit3: '3',
        Digit4: '4',
        Digit5: '5',
        Digit6: '6',
        Digit7: '7',
        Digit8: '8',
        Digit9: '9',
        Enter: 'Enter',
        Equal: '=',
        KeyA: 'a',
        KeyB: 'b',
        KeyC: 'c',
        KeyD: 'd',
        KeyE: 'e',
        KeyF: 'f',
        KeyG: 'g',
        KeyH: 'h',
        KeyI: 'i',
        KeyJ: 'j',
        KeyK: 'k',
        KeyL: 'l',
        KeyM: 'm',
        KeyN: 'n',
        KeyO: 'o',
        KeyP: 'p',
        KeyQ: 'q',
        KeyR: 'r',
        KeyS: 's',
        KeyT: 't',
        KeyU: 'u',
        KeyV: 'v',
        KeyW: 'w',
        KeyX: 'ч',
        KeyY: 'y',
        KeyZ: 'z',
        Minus: '-',
        Period: '.',
        Quote: '\'',
        Semicolon: ';',
        ShiftLeft: 'Shift',
        ShiftRight: 'Shift',
        Slash: '/',
        Space: ' ',
        Tab: 'Tab',
      },
    };
    this.layoutRus = {
      keyBoardRusSigns: [
        'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
        'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'backslash',
        'capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',
        'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'shift',
        'ctrl', 'win', 'alt', 'space', 'alt', '◄', '▼', '►', 'ctrl',
      ],
      keys: {
        AltLeft: 'Alt',
        AltRight: 'Alt',
        ArrowDown: 'ArrowDown',
        ArrowLeft: 'ArrowLeft',
        ArrowRight: 'ArrowRight',
        ArrowUp: 'ArrowUp',
        Backquote: 'ё',
        Backslash: '\\',
        Backspace: 'Backspace',
        BracketLeft: 'х',
        BracketRight: 'ъ',
        CapsLock: 'CapsLock',
        Comma: 'б',
        ControlLeft: 'Control',
        ControlRight: 'Control',
        Digit0: '0',
        Digit1: '1',
        Digit2: '2',
        Digit3: '3',
        Digit4: '4',
        Digit5: '5',
        Digit6: '6',
        Digit7: '7',
        Digit8: '8',
        Digit9: '9',
        Enter: 'Enter',
        Equal: '=',
        KeyA: 'ф',
        KeyB: 'и',
        KeyC: 'с',
        KeyD: 'в',
        KeyE: 'у',
        KeyF: 'а',
        KeyG: 'п',
        KeyH: 'р',
        KeyI: 'ш',
        KeyJ: 'о',
        KeyK: 'л',
        KeyL: 'д',
        KeyM: 'ь',
        KeyN: 'т',
        KeyO: 'щ',
        KeyP: 'з',
        KeyQ: 'й',
        KeyR: 'к',
        KeyS: 'ы',
        KeyT: 'е',
        KeyU: 'г',
        KeyV: 'м',
        KeyW: 'ц',
        KeyX: 'ч',
        KeyY: 'н',
        KeyZ: 'я',
        Minus: '-',
        Period: 'ю',
        Quote: 'э',
        Semicolon: 'ж',
        ShiftLeft: 'Shift',
        ShiftRight: 'Shift',
        Slash: '.',
        Space: ' ',
        Tab: 'Tab',
      },
    };

    this.mode = this.layoutEng;
    this.signs = this.mode.keyBoardEngSigns;
    this.keys = this.mode.keys;
    console.log(this.keys);
  }

  render(parent, addClass) {
    const serviceKeys = ['backspace', 'tab', 'backslash', 'space', 'capslock', 'enter', 'shift'];
    for (let i = 0; i < this.signs.length; i += 1) {
      const button = document.createElement('button');
      button.classList.add(addClass);
      button.textContent = this.signs[i];
      if (serviceKeys.some((elem) => button.textContent === elem)) {
        button.className += ` ${addClass}--${button.textContent}`;
      }
      parent.append(button);
    }
  }
}
const inputField = document.createElement('textarea');
inputField.classList.add('input-field');
document.body.append(inputField);
const keyBoardBox = document.createElement('div');
keyBoardBox.classList.add('keyboard-container');
document.body.append(keyBoardBox);
const myKeyboard = new Keyboard();
myKeyboard.render(keyBoardBox, 'keyboard-item');
const buttonsCollection = keyBoardBox.getElementsByClassName('keyboard-item');
const buttonsArr = Array.from(buttonsCollection);
const enterSigns = (evt) => {
  evt.preventDefault();
  const target = buttonsArr.find((button) => button.textContent === myKeyboard.keys[evt.code]);
  console.log(myKeyboard.keys[evt.code]);
  target.classList.add('keyboard-item--active');
  inputField.value += target.textContent;
};
document.addEventListener('keydown', enterSigns);
document.addEventListener('keyup', (evt) => {
  const target = buttonsArr.find((button) => button.textContent === myKeyboard.keys[evt.code]);
  target.classList.remove('keyboard-item--active');
});
document.addEventListener('mousedown', (evt) => {
  if (evt.target.tagName === 'BUTTON') {
    evt.target.classList.add('keyboard-item--active');
    inputField.value += evt.target.textContent;
  }
});
document.addEventListener('mouseup', (evt) => {
  if (evt.target.tagName === 'BUTTON') {
    evt.target.classList.remove('keyboard-item--active');
  }
});
