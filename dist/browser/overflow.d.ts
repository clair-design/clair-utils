declare type NumberOrString = number | string;
/** 用于模态框组件中管理 body 的 overflow */
declare class OverflowController {
    /** 记录状态 */
    stack: NumberOrString[];
    private oldOverflowVal;
    private oldPaddingRightVal;
    /** @param uid 每个模态框的唯一标识符 */
    enter(uid: NumberOrString): void;
    /** @param uid 每个模态框的唯一标识符 */
    exit(uid: NumberOrString): void;
}
/** 用于模态框组件中管理 body 的 overflow */
export declare const overflowController: OverflowController;
export {};
