export function keyMirror<T extends object>(obj: T, prefix: string): Record<keyof T, string> {
  const result = {} as Record<keyof T, string>;

  for (const key in obj) {
    result[key] = `${prefix}_${key}`;
  }

  return result;
}
