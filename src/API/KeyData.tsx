const minWidth = 10;
const smallWidth = minWidth * 2;
const mediumWidth = smallWidth * 2;
const largeWidth = mediumWidth + mediumWidth / 2;
const doubleWidth = mediumWidth * 2;
const veryLargeWidth = doubleWidth + smallWidth - minWidth;
const mediumSmallWidth = mediumWidth + minWidth;
const mediumLargeWidth = mediumWidth + smallWidth + minWidth;
const maxWidth = mediumWidth * 3 - minWidth;

const baseKeyColorHSL = {
  hue: 0,
  saturation: 0,
  light: 35
};

const keyData = [
  {
    id: 0,
    keys: [
      {
        id: 0,
        color: baseKeyColorHSL,
        text: "esc",
        width: mediumWidth,
        visible: true
      },
      {
        id: 1,
        color: baseKeyColorHSL,
        text: "",
        width: mediumWidth,
        visible: false
      },
      {
        id: 2,
        color: baseKeyColorHSL,
        text: "F1",
        width: mediumWidth,
        visible: true
      },
      {
        id: 3,
        color: baseKeyColorHSL,
        text: "F2",
        width: mediumWidth,
        visible: true
      },
      {
        id: 4,
        color: baseKeyColorHSL,
        text: "F3",
        width: mediumWidth,
        visible: true
      },
      {
        id: 5,
        color: baseKeyColorHSL,
        text: "F4",
        width: mediumWidth,
        visible: true
      },
      {
        id: 6,
        color: baseKeyColorHSL,
        text: "",
        width: smallWidth,
        visible: false
      },
      {
        id: 7,
        color: baseKeyColorHSL,
        text: "F5",
        width: mediumWidth,
        visible: true
      },
      {
        id: 8,
        color: baseKeyColorHSL,
        text: "F6",
        width: mediumWidth,
        visible: true
      },
      {
        id: 9,
        color: baseKeyColorHSL,
        text: "F7",
        width: mediumWidth,
        visible: true
      },
      {
        id: 10,
        color: baseKeyColorHSL,
        text: "F8",
        width: mediumWidth,
        visible: true
      },
      {
        id: 11,
        color: baseKeyColorHSL,
        text: "",
        width: smallWidth,
        visible: false
      },
      {
        id: 12,
        color: baseKeyColorHSL,
        text: "F9",
        width: mediumWidth,
        visible: true
      },
      {
        id: 13,
        color: baseKeyColorHSL,
        text: "F10",
        width: mediumWidth,
        visible: true
      },
      {
        id: 14,
        color: baseKeyColorHSL,
        text: "F11",
        width: mediumWidth,
        visible: true
      },
      {
        id: 15,
        color: baseKeyColorHSL,
        text: "F12",
        width: mediumWidth,
        visible: true
      },
      {
        id: 16,
        color: baseKeyColorHSL,
        text: "",
        width: minWidth,
        visible: false
      },
      {
        id: 17,
        color: baseKeyColorHSL,
        text: "impr",
        width: mediumWidth,
        visible: true
      },
      {
        id: 18,
        color: baseKeyColorHSL,
        text: "scr lk",
        width: mediumWidth,
        visible: true
      },
      {
        id: 19,
        color: baseKeyColorHSL,
        text: "sleep",
        width: mediumWidth,
        visible: true
      }
    ]
  },
  {
    id: 1,
    keys: [
      {
        id: 20,
        color: baseKeyColorHSL,
        text: "° `",
        width: mediumWidth,

        visible: true
      },
      {
        id: 21,
        color: baseKeyColorHSL,
        text: "1 |",
        width: mediumWidth,

        visible: true
      },
      {
        id: 22,
        color: baseKeyColorHSL,
        text: "2 @",
        width: mediumWidth,

        visible: true
      },
      {
        id: 23,
        color: baseKeyColorHSL,
        text: "3 #",
        width: mediumWidth,

        visible: true
      },
      {
        id: 24,
        color: baseKeyColorHSL,
        text: "4 $",
        width: mediumWidth,

        visible: true
      },
      {
        id: 25,
        color: baseKeyColorHSL,
        text: "5 %",
        width: mediumWidth,

        visible: true
      },
      {
        id: 26,
        color: baseKeyColorHSL,
        text: "6 &",
        width: mediumWidth,

        visible: true
      },
      {
        id: 27,
        color: baseKeyColorHSL,
        text: "7 /",
        width: mediumWidth,

        visible: true
      },
      {
        id: 28,
        color: baseKeyColorHSL,
        text: "8 (",
        width: mediumWidth,

        visible: true
      },
      {
        id: 29,
        color: baseKeyColorHSL,
        text: "9 )",
        width: mediumWidth,

        visible: true
      },
      {
        id: 30,
        color: baseKeyColorHSL,
        text: "0 =",
        width: mediumWidth,
        visible: true
      },
      {
        id: 31,
        color: baseKeyColorHSL,
        text: "' ?",
        width: mediumWidth,
        visible: true
      },
      {
        id: 32,
        color: baseKeyColorHSL,
        text: "¿ ¡",
        width: mediumWidth,
        visible: true
      },
      {
        id: 33,
        color: baseKeyColorHSL,
        text: "←",
        width: doubleWidth + 8,
        visible: true
      },
      {
        id: 34,
        color: baseKeyColorHSL,
        text: "",
        width: minWidth,
        visible: false
      },
      {
        id: 35,
        color: baseKeyColorHSL,
        text: "ins",
        width: mediumWidth,
        visible: true
      },
      {
        id: 36,
        color: baseKeyColorHSL,
        text: "home",
        width: mediumWidth,
        visible: true
      },
      {
        id: 37,
        color: baseKeyColorHSL,
        text: "re\npag",
        width: mediumWidth,
        visible: true
      }
    ]
  },
  {
    id: 2,
    keys: [
      {
        id: 38,
        color: baseKeyColorHSL,
        text: "tab",
        width: largeWidth,
        visible: true
      },
      {
        id: 39,
        color: baseKeyColorHSL,
        text: "Q",
        width: mediumWidth,
        visible: true
      },
      {
        id: 40,
        color: baseKeyColorHSL,
        text: "W",
        width: mediumWidth,
        visible: true
      },
      {
        id: 41,
        color: baseKeyColorHSL,
        text: "E",
        width: mediumWidth,
        visible: true
      },
      {
        id: 42,
        color: baseKeyColorHSL,
        text: "R",
        width: mediumWidth,
        visible: true
      },
      {
        id: 43,
        color: baseKeyColorHSL,
        text: "T",
        width: mediumWidth,
        visible: true
      },
      {
        id: 44,
        color: baseKeyColorHSL,
        text: "Y",
        width: mediumWidth,
        visible: true
      },
      {
        id: 45,
        color: baseKeyColorHSL,
        text: "U",
        width: mediumWidth,
        visible: true
      },
      {
        id: 46,
        color: baseKeyColorHSL,
        text: "I",
        width: mediumWidth,
        visible: true
      },
      {
        id: 47,
        color: baseKeyColorHSL,
        text: "O",
        width: mediumWidth,
        visible: true
      },
      {
        id: 48,
        color: baseKeyColorHSL,
        text: "P",
        width: mediumWidth,
        visible: true
      },
      {
        id: 49,
        color: baseKeyColorHSL,
        text: "´ ¨",
        width: mediumWidth,
        visible: true
      },
      {
        id: 50,
        color: baseKeyColorHSL,
        text: "+ *",
        width: mediumWidth,
        visible: true
      },
      {
        id: 51,
        color: baseKeyColorHSL,
        text: "\\ |",
        width: largeWidth + 8,
        visible: true
      },
      {
        id: 52,
        color: baseKeyColorHSL,
        text: "",
        width: minWidth,
        visible: false
      },
      {
        id: 53,
        color: baseKeyColorHSL,
        text: "del",
        width: mediumWidth,
        visible: true
      },
      {
        id: 54,
        color: baseKeyColorHSL,
        text: "end",
        width: mediumWidth,
        visible: true
      },
      {
        id: 55,
        color: baseKeyColorHSL,
        text: "av\npag",
        width: mediumWidth,
        visible: true
      }
    ]
  },
  {
    id: 3,
    keys: [
      {
        id: 56,
        color: baseKeyColorHSL,
        text: "caps lock",
        width: mediumLargeWidth,
        visible: true
      },
      {
        id: 57,
        color: baseKeyColorHSL,
        text: "A",
        width: mediumWidth,
        visible: true
      },
      {
        id: 58,
        color: baseKeyColorHSL,
        text: "S",
        width: mediumWidth,
        visible: true
      },
      {
        id: 59,
        color: baseKeyColorHSL,
        text: "D",
        width: mediumWidth,
        visible: true
      },
      {
        id: 60,
        color: baseKeyColorHSL,
        text: "F",
        width: mediumWidth,
        visible: true
      },
      {
        id: 61,
        color: baseKeyColorHSL,
        text: "G",
        width: mediumWidth,
        visible: true
      },
      {
        id: 62,
        color: baseKeyColorHSL,
        text: "H",
        width: mediumWidth,
        visible: true
      },
      {
        id: 63,
        color: baseKeyColorHSL,
        text: "J",
        width: mediumWidth,
        visible: true
      },
      {
        id: 64,
        color: baseKeyColorHSL,
        text: "K",
        width: mediumWidth,
        visible: true
      },
      {
        id: 65,
        color: baseKeyColorHSL,
        text: "L",
        width: mediumWidth,
        visible: true
      },
      {
        id: 66,
        color: baseKeyColorHSL,
        text: "{ [",
        width: mediumWidth,
        visible: true
      },
      {
        id: 67,
        color: baseKeyColorHSL,
        text: "} ]",
        width: mediumWidth,
        visible: true
      },
      {
        id: 68,
        color: baseKeyColorHSL,
        text: "↩",
        width: veryLargeWidth + minWidth + 2,
        visible: true
      },
      {
        id: 69,
        color: baseKeyColorHSL,
        text: "",
        width: minWidth,
        visible: false
      },
      {
        id: 70,
        color: baseKeyColorHSL,
        text: "",
        width: mediumWidth,
        visible: false
      },
      {
        id: 71,
        color: baseKeyColorHSL,
        text: "",
        width: mediumWidth,
        visible: false
      },
      {
        id: 72,
        color: baseKeyColorHSL,
        text: "",
        width: mediumWidth,
        visible: false
      }
    ]
  },
  {
    id: 4,
    keys: [
      {
        id: 73,
        color: baseKeyColorHSL,
        text: "shift",
        width: veryLargeWidth,
        visible: true
      },
      {
        id: 74,
        color: baseKeyColorHSL,
        text: "< >",
        width: mediumWidth,
        visible: true
      },
      {
        id: 75,
        color: baseKeyColorHSL,
        text: "Z",
        width: mediumWidth,
        visible: true
      },
      {
        id: 76,
        color: baseKeyColorHSL,
        text: "X",
        width: mediumWidth,
        visible: true
      },
      {
        id: 77,
        color: baseKeyColorHSL,
        text: "C",
        width: mediumWidth,
        visible: true
      },
      {
        id: 78,
        color: baseKeyColorHSL,
        text: "V",
        width: mediumWidth,
        visible: true
      },
      {
        id: 79,
        color: baseKeyColorHSL,
        text: "B",
        width: mediumWidth,
        visible: true
      },
      {
        id: 80,
        color: baseKeyColorHSL,
        text: "N",
        width: mediumWidth,
        visible: true
      },
      {
        id: 81,
        color: baseKeyColorHSL,
        text: "M",
        width: mediumWidth,
        visible: true
      },
      {
        id: 82,
        color: baseKeyColorHSL,
        text: ", ;",
        width: mediumWidth,
        visible: true
      },
      {
        id: 83,
        color: baseKeyColorHSL,
        text: ". :",
        width: mediumWidth,
        visible: true
      },
      {
        id: 85,
        color: baseKeyColorHSL,
        text: "shift",
        width: maxWidth + smallWidth - 4,
        visible: true
      },
      {
        id: 86,
        color: baseKeyColorHSL,
        text: "",
        width: minWidth,
        visible: false
      },
      {
        id: 87,
        color: baseKeyColorHSL,
        text: "",
        width: mediumWidth,
        visible: false
      },
      {
        id: 88,
        color: baseKeyColorHSL,
        text: "⬆",
        width: mediumWidth,
        visible: true
      },
      {
        id: 89,
        color: baseKeyColorHSL,
        text: "",
        width: mediumWidth,
        visible: false
      }
    ]
  },
  {
    id: 5,
    keys: [
      {
        id: 90,
        color: baseKeyColorHSL,
        text: "ctrl",
        width: mediumSmallWidth,
        visible: true
      },
      {
        id: 91,
        color: baseKeyColorHSL,
        text: "option",
        width: mediumSmallWidth,
        visible: true
      },
      {
        id: 92,
        color: baseKeyColorHSL,
        text: "⌘",
        width: mediumSmallWidth,
        visible: true
      },
      {
        id: 93,
        color: baseKeyColorHSL,
        text: "--",
        width: mediumSmallWidth * 5.6 + 2,
        visible: true
      },
      {
        id: 94,
        color: baseKeyColorHSL,
        text: "⌘",
        width: mediumSmallWidth,
        visible: true
      },
      {
        id: 95,
        color: baseKeyColorHSL,
        text: "option",
        width: mediumSmallWidth,
        visible: true
      },
      {
        id: 96,
        color: baseKeyColorHSL,
        text: "fn",
        width: mediumSmallWidth,
        visible: true
      },
      {
        id: 97,
        color: baseKeyColorHSL,
        text: "ctrl",
        width: mediumSmallWidth,
        visible: true
      },
      {
        id: 98,
        color: baseKeyColorHSL,
        text: "",
        width: minWidth,
        visible: false
      },
      {
        id: 99,
        color: baseKeyColorHSL,
        text: "⬅",
        width: mediumWidth,
        visible: true
      },
      {
        id: 100,
        color: baseKeyColorHSL,
        text: "⬇",
        width: mediumWidth,
        visible: true
      },
      {
        id: 101,
        color: baseKeyColorHSL,
        text: "➡",
        width: mediumWidth,
        visible: true
      }
    ]
  }
];

export default keyData;
