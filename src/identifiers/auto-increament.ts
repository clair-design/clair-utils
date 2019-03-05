/**
 * 自增 ID 计数器
 */
export class AutoIncreasingCounter {
  private val: number

  constructor(initilaVal: number = 0) {
    this.val = initilaVal
  }

  /**
   * Gets the next value
   */
  next() {
    this.val += 1
    return this.val
  }
}

const counter = new AutoIncreasingCounter(0)

/**
 * 从 1 开始自增 ID
 */
export function autoIncreamentId() {
  return counter.next()
}
