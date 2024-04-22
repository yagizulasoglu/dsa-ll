/** IndexError: raised when index not found. */

class IndexError extends Error {
}

/**
 * NodeStr: node for a singly-linked list of string.
 *
 * - val
 * - next: next NodeStr or null
 */

class NodeStr {
  val: string;
  next: NodeStr | null;

  constructor(val: string) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Linked list of numbers.
 */

class LLStr {
  head: NodeStr | null;
  tail: NodeStr | null;
  length: number;

  constructor(vals: string[] = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (const val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val: string): void {
    const newNode = new NodeStr(val);

    if(this.head === null) this.head = newNode;

    if(this.tail !== null) this.tail.next= newNode;

    this.tail = newNode;

    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val: string): void {
    const newNode = new NodeStr(val);
    if (this.length === 0) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
  }

  /** pop(): return & remove last item.
   *
   * Throws IndexError on empty list.
   **/

  pop(): string {
    if(this.length === 0) {
      throw new IndexError;
    }

    let current = this.head;

    const lastElement = this.tail!;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      while(current !== null) {
        if(current.next === this.tail) {
          this.tail = current;
          this.tail.next = null;
        }
        current = current.next;
      }
      this.length--;
    }


    return lastElement.val;
  }

  /** shift(): return & remove first item.
   *
   * Throws IndexError on empty list.
   **/

  shift(): string {
    if(this.length === 0) {
      throw new IndexError;
    }
    let current = this.head!;
    this.head = current.next!;

    this.length--;
    return current.val;
  }

  /** getAt(idx): get val at idx.
   *
   * Throws IndexError if not found.
   **/

  getAt(idx: number): string {
    if(idx >= this.length || idx < 0) {
      throw new IndexError;
    }
    let count = 0;
    let current = this.head;
    let value = current!;
    while(current !== null) {
      if(count === idx) {
        value = current!;
      }
      count++;
      current = current.next;
    }
    return value.val;
  }

  /** setAt(idx, val): set val at idx to val.
   *
   * Throws IndexError if not found.
   **/

  setAt(idx: number, val: string): void {
    if(idx >= this.length || idx < 0) {
      throw new IndexError;
    }
    let count = 0;
    let current = this.head;
    while(current !== null) {
      if(count === idx) {
        current.val = val;
        break;
      }
      count++;
      current = current.next;
    }
  }

  /** insertAt(idx, val): add node w/val before idx.
   *
   * Throws IndexError if not found.
   **/

  insertAt(idx: number, val: string): void {
    if(idx >= this.length || idx < 0) {
      throw new IndexError;
    }
    if(idx === 0) {
      return this.unshift(val);
    }
    const newNode = new NodeStr(val);
    let count = 0;
    let current = this.head;
    while(current !== null) {
      if(count + 1 === idx) {
        newNode.next = current.next;
        current.next = newNode;
      }
      count++;
      current = current.next;
    }
  }

  /** removeAt(idx): return & remove item at idx,
   *
   * Throws IndexError if not found.
   **/

  removeAt(idx: number): string {
    if(idx >= this.length || idx < 0) {
      throw new IndexError;
    }
    let count = 0;
    let current = this.head;
    let value = current!;
    if (idx === 0) {
      let value = this.head!;
      this.head === this.head?.next;
      return value.val;
    }
    while(current !== null) {
      if(count + 1 === idx) {
        let next = current.next!;
        if (next === this.tail) {
          this.tail === current;
        }
        value = next;
        current.next = next.next;
      }
      count++;
      current = current.next;
    }
    return value.val;
  }

  /** toArray (useful for tests!) */

  toArray(): string[] {
    const out = [];
    let current = this.head;

    while (current) {
      out.push(current.val);
      current = current.next;
    }

    return out;
  }
}


export {
  IndexError,
  LLStr,
  NodeStr,
};