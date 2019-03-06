/**
 * 自增 ID 计数器
 */
export declare class AutoIncreasingCounter {
    private val;
    constructor(initilaVal?: number);
    /**
     * Gets the next value
     */
    next(): number;
}
