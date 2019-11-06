class Keyboard {
  constructor(containerClass, elClass, spanClass, fieldClass) {
    this.layoutEng = {
      keyBoardSigns: [
        '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
        'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Backslash',
        'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
        'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift',
        'Ctrl', 'win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl',
      ],
      onShift: [
        '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
        'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'Backslash',
        'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
        'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '▲', 'Shift',
        'Ctrl', 'win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl',
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
        'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
        'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Backslash',
        'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
        'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '▲', 'Shift',
        'Ctrl', 'win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl',
      ],
      onShift: [
        'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
        'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Backslash',
        'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
        'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '▲', 'Shift',
        'Ctrl', 'win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl',
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
    this.serviceKeys = ['Backspace', 'Tab', 'Backslash', 'Space', 'CapsLock', 'Enter', 'Shift'];
    this.containerClass = containerClass;
    this.elClass = elClass;
    this.spanClass = spanClass;
    this.fieldClass = fieldClass;
    this.field = this.createInput();
    this.parent = this.createParent();
    this.mode = JSON.parse(localStorage.getItem('mode')) ? JSON.parse(localStorage.getItem('mode')) : this.layoutEng;
    this.render();
    this.buttonsCollection = this.parent.getElementsByClassName(this.elClass);
    this.buttonsArr = Array.from(this.buttonsCollection);
    this.spansCollection = this.parent.getElementsByClassName(this.spanClass);
    this.spansArr = Array.from(this.spansCollection);
    this.changeMode = this.changeMode.bind(this);
    document.addEventListener('keydown', this.enterSignsKeyDown.bind(this));
    document.addEventListener('keyup', this.removeActiveKey.bind(this));
    document.addEventListener('mousedown', this.enterSignsMouseDown.bind(this));
    document.addEventListener('mouseup', this.removeActiveKey1.bind(this));
  }

  changeMode() {
    if (this.mode === this.layoutRus) {
      this.mode = this.layoutEng;
      localStorage.setItem('mode', JSON.stringify(this.layoutEng));
    } else {
      this.mode = this.layoutRus;
      localStorage.setItem('mode', JSON.stringify(this.layoutRus));
    }
    this.render();
  }

  removeActiveKey(evt) {
    evt.preventDefault();
    const targetKey = this.buttonsArr.find((el) => el.innerText === this.mode.keys[evt.code]);
    targetKey.classList.remove(`${this.elClass}--active`);
  }

  removeActiveKey1(evt) {
    evt.preventDefault();
    evt.target.classList.remove(`${this.elClass}--active`);
  }

  switchLang(evt) {
    if (evt.shiftKey && evt.ctrlKey) {
      this.changeMode();
    }
  }

  onShiftKey(evt) {
    if (evt.shiftKey || evt.code === 'CapsLock') {
      this.spansArr.map((item) => item.classList.add(`${this.spanClass}--active`));
    }
  }

  /* onCapsLockKey(evt) {
    if (evt.code === 'CapsLock') {
      this.field.value += targetKey.innerText.toUpperCase();
  }
} */

  onEnterKey(evt) {
    if (evt.key === 'Enter' || evt.target.innerText === 'Enter') {
      this.field.value += '\n';
    }
  }

  onSpaceKey(evt) {
    if (evt.code === 'Space' || evt.target.innerText === 'Space') {
      this.field.value += ' ';
    }
  }

  onTabKey(evt) {
    if (evt.code === 'Tab' || evt.target.innerText === 'Tab') {
      this.field.value += '\t';
    }
  }

  onBackspaceKey(evt) {
    if (evt.code === 'Backspace' || evt.target.innerText === 'Backspace') {
      this.field.value = this.field.value.substring(0, this.field.value.length - 1);
    }
  }

  options(evt) {
    this.onEnterKey(evt);
    this.onSpaceKey(evt);
    this.onBackspaceKey(evt);
    this.onTabKey(evt);
  }

  enterSignsKeyDown(evt) {
    evt.preventDefault();
    const targetKey = this.buttonsArr.find((el) => el.innerText === this.mode.keys[evt.code]);
    this.switchLang(evt);
    /* if (evt.shiftKey) {
      let isShift = true;
      this.onShiftKey(evt);
      if (isShift) {
        this.field.value += targetKey.firstChild.innerText;
      }
    } */
    if (this.serviceKeys.some((elem) => evt.code === elem)) {
      this.options(evt);
    } else {
      this.field.value += targetKey.innerText;
    }
    targetKey.classList.add(`${this.elClass}--active`);
  }

  enterSignsMouseDown(evt) {
    evt.preventDefault();
    if (evt.target.tagName === 'BUTTON') {
      if (this.serviceKeys.some((elem) => evt.target.innerText === elem)) {
        this.options(evt);
      } else {
        this.field.value += evt.target.innerText;
      }
      evt.target.classList.add(`${this.elClass}--active`);
    }
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
    for (let i = 0; i < this.mode.keyBoardSigns.length; i += 1) {
      const button = document.createElement('button');
      button.classList.add(this.elClass);
      button.textContent = this.mode.keyBoardSigns[i];
      if (this.serviceKeys.some((elem) => button.textContent === elem)) {
        button.className += ` ${this.elClass}--${button.textContent}`;
      }
      const span = document.createElement('span');
      span.classList.add(this.spanClass);
      span.textContent = this.mode.onShift[i];
      button.append(span);
      this.parent.append(button);
    }
  }
}
const myKeyboard = new Keyboard('keyboard-container', 'keyboard-item', 'keyboard-item__span', 'input-field');
