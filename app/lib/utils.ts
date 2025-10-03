// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function logThis(name: string, thing: any){
  console.log(`${name}:\n${thing}`);
}

export function escapeRegex(str: string) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
