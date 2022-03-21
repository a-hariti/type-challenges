type Trim<S extends string> = S extends ` ${infer R}`
    ? Trim<R>
    : S extends `${infer R} `
    ? Trim<R>
    : S extends `\n${infer R}`
    ? Trim<R>
    : S extends `${infer R}\n`
    ? Trim<R>
    : S extends `\t${infer R}`
    ? Trim<R>
    : S extends `${infer R}\t`
    ? Trim<R>
    : S;
