type LengthOfString<S extends string, U extends any[] = []> = S extends `${infer C}${infer R}`
    ? LengthOfString<R, [...U, C]>
    : U extends { length: infer L }
    ? L
    : never;
