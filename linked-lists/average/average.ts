import { LLStr } from "../common/ll";

/** return average (mean) of list values.
 *
 * Returns 0 for empty list.
 **/

function average(lst: LLStr): number {
  let current = lst.head;
  let sum = 0;

  if (lst.length === 0) return 0;

  while(current !== null) {
    sum += Number(current.val);
    current = current.next;
  }
  let average = sum/lst.length;

  return average;
}

export { average };