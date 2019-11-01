/* const keyBoardKeys = {
  backspace: 8,
  tab: 9,
  enter: 13,
  shift: 16,
  ctrl: 17,
  alt: 18,
  capslock: 20,
  escape: 27,
  arrowleft: 37,
  arrowup: 38,
  arrowright: 39,
  arrowdown: 40,
  0: 48,
  1: 49,
  2: 50,
  3: 51,
  4: 52,
  5: 53,
  6: 54,
  7: 55,
  8: 56,
  9: 57,
  a: 65,
  b: 66,
  c: 67,
  d: 68,
  e: 69,
  f: 70,
  g: 71,
  h: 72,
  i: 73,
  j: 74,
  k: 75,
  l: 76,
  m: 77,
  n: 78,
  o: 79,
  p: 80,
  q: 81,
  r: 82,
  s: 83,
  t: 84,
  u: 85,
  v: 86,
  w: 87,
  x: 88,
  y: 89,
  z: 90,
  semicolon: 186,
  equalsign: 187,
  comma: 188,
  minus: 189,
  period: 190,
  slash: 191,
  backquote: 192,
  bracketleft: 219,
  backslash: 220,
  braketright: 221,
  quote: 222,
}; */

const keyBoardSigns = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
  'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
  'capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'enter',
  'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'shift',
  'ctrl', 'win', 'alt', 'space', 'alt', '◄', '▼', '►', 'ctrl',
];
const keyBoardBox = document.createElement('div');
keyBoardBox.classList.add('keyboard-container');
document.body.append(keyBoardBox);
for (let i = 0; i < keyBoardSigns.length; i += 1) {
  const button = document.createElement('button');
  button.classList.add('keyboard-item');
  button.textContent = keyBoardSigns[i];
  switch (button.textContent) {
    case 'backspace':
      button.className += ' keyboard-item--backspace';
      break;
    case 'tab':
      button.className += ' keyboard-item--tab';
      break;
    case '\\':
      button.className += ' keyboard-item--slash';
      break;
    case 'space':
      button.className += ' keyboard-item--space';
      break;
    case 'capslock':
      button.className += ' keyboard-item--capslock';
      break;
    case 'enter':
      button.className += ' keyboard-item--enter';
      break;
    case 'shift':
      button.className += ' keyboard-item--shift';
      break;
    default:
      break;
  }
  keyBoardBox.append(button);
}
