export default function createBaseClassName(arr: any[]) {
  return arr.filter(Boolean).join(" ");
}
