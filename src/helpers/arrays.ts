// Эта функция создана по причине того что
// typescript интерпретирует что результат этого выражения
// ['string', false].filter(i => !!i)
// является string | boolean, хотя хотелось бы string
export function skipFalsy<T>(...value: (T | false | "" | null | undefined | 0)[]): T[] {
    return value.filter(Boolean) as T[];
}

export function arrayToRecord<T, U extends keyof T>(array: T[], key: U): Record<string, T> {
    return Object.fromEntries((array ?? []).map(i => [i[key], i]));
}

// Delete duplicates from array
export function uniq<T, K extends keyof T>(array: T[], by?: K): T[] {
    if (!by) {
        return Array.from(new Set(array));
    }

    const map: Record<string, T> = {};
    while (array.length) {
        let el = array.pop()!;
        let uniqValue = el[by];
        // @ts-ignore
        map[uniqValue] = el;
    }
    return Object.values(map);
}
