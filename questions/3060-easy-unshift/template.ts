type Unshift<T extends any[], U> = UnionHas<MyTupleToUnion<T>, U> extends true ? T : [U, ...T];

type MyTupleToUnion<T extends any[]> = T extends [head: infer Head, ...tail: infer Tail]
    ? Head | MyTupleToUnion<Tail>
    : never;
type UnionHas<U, T> = T extends U ? true : false;
