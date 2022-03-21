type TupleToUnion<T extends any[]> = T extends [head: infer Head, ...tail: infer Tail]
    ? Head | MyTupleToUnion<Tail>
    : never;
