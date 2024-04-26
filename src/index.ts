type DeepReadonly<T> = {
  readonly [K in keyof T]: DeepReadonly<T[K]>;
};

type DeepRequireReadonly<T> = {
  readonly [K in keyof T]-?: DeepRequireReadonly<T[K]>;
};

type UpperCaseKeys<T> = {
  [K in keyof T as Uppercase<K & string>]: T[K];
};

type ObjectToPropertyDescriptor<T extends { [key: string]: any }> = {
  [K in keyof T]: PropertyDescriptor;
};
