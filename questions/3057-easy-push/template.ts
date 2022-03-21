type Push<T extends any[], U> = UnionHas<MyTupleToUnion<T>, U> extends true ? T : [...T, U];
