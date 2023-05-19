class Key {
  private signature: number;

  constructor() {
    this.signature = Math.floor(Math.random() * 100 + 1);
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door = false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {}

  comeIn(person: Person): void {
    if (!this.door) {
      throw new Error("Door is closed");
    }

    this.tenants.push(person);
    console.log("Person inside");
  }

  abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  openDoor(key: Key) {
    if (key.getSignature() !== this.key.getSignature()) {
      throw new Error("Key to another door");
    }

    return (this.door = true);
  }
}

const key = new Key();

const house = new MyHouse(key);
const tenant = new Person(key);

house.openDoor(tenant.getKey());

house.comeIn(tenant);

class Animal {
  public makeSound(): void {}
}

class Dog extends Animal {
  public override makeSound(): void {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.makeSound();

// Напишите функцию filterNumbers, которая принимает массив чисел и возвращает новый массив, содержащий только положительные числа. Укажите типы для аргумента и результата функции.

function filterNumbers(arr: number[]): number[] {
  return arr.filter((number) => number > 0);
}

enum Color {
  Red,
  Green,
  Blue,
}

function getColorCode(arg: Color): string {
  if (arg === Color.Red) {
    return "rgb(255, 0, 0)";
  }
  if (arg === Color.Blue) {
    return "rgb(0, 0, 255)";
  }
  if (arg === Color.Green) {
    return "rgb(0, 255, 0)";
  }

  throw new Error("Invalid color");
}

// Создайте интерфейс Shape, который имеет метод getArea без реализации. Создайте класс Rectangle, который реализует интерфейс Shape и имеет свойства width (тип number) и height (тип number). Реализуйте метод getArea для вычисления площади прямоугольника.

interface Shape {
  getArea(): number;
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

// Напишите обобщенную функцию reverse, которая принимает массив элементов и возвращает массив с элементами в обратном порядке. Укажите типы для аргумента и результата функции.

function reverse(arr: any[]): any[] {
  return arr.reverse();
}

// Создайте класс Person с защищенным свойством name (тип string) и публичным методом greet, который выводит приветствие с использованием значения name. Создайте класс Student, который наследуется от Person и добавляет свойство studentId (тип number). Создайте экземпляр класса Student и вызовите метод greet.

class Person2 {
  constructor(protected name: string) {}

  greet(): void {
    console.log(`Hello, ${this.name}`);
  }
}

class Student extends Person2 {
  studentId: number;

  constructor(name: string, studentId: number) {
    super(name);
    this.studentId = studentId;
  }
}

const student = new Student("Alex", 5);
student.greet();
