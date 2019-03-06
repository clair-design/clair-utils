import { getScrollBarSize } from './scrollbar'

type NumberOrString = number | string

/** 用于模态框组件中管理 body 的 overflow */
class OverflowController {
  /** 记录状态 */
  stack: NumberOrString[] = []
  private oldOverflowVal: string | null = ''
  private oldPaddingRightVal: string | null = ''

  /** @param uid 每个模态框的唯一标识符 */
  enter(uid: NumberOrString) {
    // 已进入
    if (this.stack.indexOf(uid) > -1) {
      return
    }

    this.stack.push(uid)

    // 说明还有其他模态框
    if (this.stack.length !== 1) {
      return
    }

    const { style } = document.body
    this.oldOverflowVal = style.overflow
    this.oldPaddingRightVal = style.paddingRight

    // has scrollbar
    if (document.documentElement.clientWidth < window.innerWidth) {
      style.paddingRight = `${getScrollBarSize()}px`
    }

    // always make `body` hidden when modal shown
    style.overflow = 'hidden'
  }

  /** @param uid 每个模态框的唯一标识符 */
  exit(uid: NumberOrString) {
    // 已出栈
    const pos = this.stack.indexOf(uid)
    if (pos < 0) {
      return
    }

    // 出栈
    this.stack.splice(pos, 1)

    // 还有其他模态框
    if (this.stack.length !== 0) {
      return
    }

    const { style } = document.body
    style.overflow = this.oldOverflowVal
    style.paddingRight = this.oldPaddingRightVal
  }
}

/** 用于模态框组件中管理 body 的 overflow */
export const overflowController = new OverflowController()
