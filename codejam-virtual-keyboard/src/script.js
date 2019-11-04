class Keyboard {
  constructor(containerClass, elClass, fieldClass) {
    this.layoutEng = {
      keyBoardSigns: [
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
      keyBoardSigns: [
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
    this.containerClass = containerClass;
    this.elClass = elClass;
    this.fieldClass = fieldClass;
    this.field = this.createInput();
    this.parent = this.createParent();
    this.mode = this.layoutEng;
    this.render();
    this.buttonsCollection = this.parent.getElementsByClassName(this.elClass);
    this.buttonsArr = Array.from(this.buttonsCollection);
    this.changeMode = this.changeMode.bind(this);
    document.addEventListener('keydown', this.switchLang.bind(this));
  }

  changeMode() {
    if (this.mode === this.layoutRus) {
      this.mode = this.layoutEng;
    } else {
      this.mode = this.layoutRus;
    }
    this.render();
  }

  switchLang(evt) {
    if (evt.shiftKey && evt.ctrlKey) {
      this.changeMode();
    }
  }

  enterSigns(evt) {
    evt.preventDefault();
    this.targetKey = this.buttonsArr.find((el) => el.textContent === this.mode.keys[evt.code]);
    this.targetKey.classList.add(`${this.elClass}--active`);
    this.field.value += this.targetKey.textContent || evt.key;
  }

  removeActiveKey(evt) {
    evt.preventDefault();
    this.targetKey = this.buttonsArr.find((el) => el.textContent === this.mode.keys[evt.code]);
    this.targetKey.classList.remove(`${this.elClass}--active`);
  }

  createParent() {
    const keyBoardBox = document.createElement('div');
    keyBoardBox.classList.add(this.containerClass);
    document.body.append(keyBoardBox);
    return keyBoardBox;
  }

  createInput() {
    const inputField = document.createElement('textarea');
    inputField.classList.add(this.fieldClass);
    inputField.autofocus = true;
    document.body.append(inputField);
    return inputField;
  }

  render() {
    this.parent.innerHTML = '';
    const serviceKeys = ['backspace', 'tab', 'backslash', 'space', 'capslock', 'enter', 'shift'];
    for (let i = 0; i < this.mode.keyBoardSigns.length; i += 1) {
      const button = document.createElement('button');
      button.classList.add(this.elClass);
      button.textContent = this.mode.keyBoardSigns[i];
      if (serviceKeys.some((elem) => button.textContent === elem)) {
        button.className += ` ${this.elClass}--${button.textContent}`;
      }
      this.parent.append(button);
    }
  }
}
const myKeyboard = new Keyboard('keyboard-container', 'keyboard-item', 'input-field');
/* document.addEventListener('keyup', (evt) => {
  const target = buttonsArr.find((button) => button.textContent === myKeyboard.mode.keys[evt.code]);
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
}); */
