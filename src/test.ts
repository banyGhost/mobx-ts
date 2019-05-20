export function sum(x: number, y: number): number {
  return x + y;
}

//函数名后添加了 <T>，其中 T 用来指代任意输入的类型，在后面的输入 value: T 和输出 Array<T> 中即可使用了
function createArray<T>(length: number, value: T): Array<T> {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

//多个范型
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

interface lengthWise {
  length: number
}

//泛型约束
function loggingLength<T extends lengthWise>(arg: T): T {
  console.log(arg.length);
  return arg;
}


//多个类型参数之间相互约束
//??? why (<T>source) 类型强转
function copyFile<T extends U, U>(target: T, source: U): T {
  for (let key in source) {
    target[key] = (<T>source)[key]
  }
  return target
}

//泛型接口 泛型声明函数

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string): boolean {
  return source.search(subString) !== -1;
};

// interface CreateArrayFunc {
//   <T>(length: number, value: T): Array<T>;
// }

interface CreateArrayFunc<T> {
  (length: number, value: T): Array<T>;
}

//泛型类
class GenericNumber<T> {
  zeroValue?: T;
  add?: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x: number, y: number): number {
  return x + y;
};


//enum

const enum Days {
  Sun,
  Mon,
  Tue,
  Wed,
  Thu,
  Fri,
  Sat
}
