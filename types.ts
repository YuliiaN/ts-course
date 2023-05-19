// классические типы данных

let age: number;
age = 50;

let alias: string;
alias = "Alex";

let toggle: boolean;
toggle = true;

let empty: null;
empty = null;

let notInitialize: undefined;
notInitialize = undefined;

let callback: (a: number) => number;
callback = (a) => {
  return 100 + a;
};

// any для любого значения

let anything: any;
anything = -20;
anything = "Text";
anything = {};

// unknown

let some: unknown;
some = "Text";

let str: string;

if (typeof some === "string") {
  str = some;
}

// неизменяемый массив

let person: [string, number];
person = ["Max", 21];

// enum

enum Status {
  LOADING,
  READY,
}

const page = {
  load: Status.LOADING,
};

if (page.load === Status.LOADING) {
  console.log("Сторінка завантажується");
}
if (page.load === Status.READY) {
  console.log("Сторінка завантажена");
}

let example: string | number;
let state: "enable" | "disable";

// functions

function showMessage(message: number): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

type CustomType = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: Date;
    updateAt: Date;
  };
};

const page1: CustomType = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: CustomType = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
