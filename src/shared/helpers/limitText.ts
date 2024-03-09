export function limitText(text: string = '', limit: number = 9): string {
  if (text.length >= limit) {
    return `${text?.slice(0, limit).trim()}...`;
  }
  return text;
}
