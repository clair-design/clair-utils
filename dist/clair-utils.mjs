var cached;
/**
 * 计算滚动条宽度。本段代码来源于：
 * https://github.com/react-component/util/blob/master/src/getScrollBarSize.js
 *
 * @param {Boolean} fresh 是否使用缓存
 * @returns
 */
function getScrollBarSize(fresh) {
    if (fresh || typeof cached === 'undefined') {
        var inner = document.createElement('div');
        inner.style.width = '100%';
        inner.style.height = '200px';
        var outer = document.createElement('div');
        var outerStyle = outer.style;
        outerStyle.position = 'absolute';
        outerStyle.top = '0';
        outerStyle.left = '0';
        outerStyle.pointerEvents = 'none';
        outerStyle.visibility = 'hidden';
        outerStyle.width = '200px';
        outerStyle.height = '150px';
        outerStyle.overflow = 'hidden';
        outer.appendChild(inner);
        document.body.appendChild(outer);
        var widthContained = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        var widthScroll = inner.offsetWidth;
        if (widthContained === widthScroll) {
            widthScroll = outer.clientWidth;
        }
        document.body.removeChild(outer);
        cached = widthContained - widthScroll;
    }
    return cached;
}

/** 用于模态框组件中管理 body 的 overflow */
var OverflowController = /** @class */ (function () {
    function OverflowController() {
        /** 记录状态 */
        this.stack = [];
        this.oldOverflowVal = '';
        this.oldPaddingRightVal = '';
    }
    /** @param uid 每个模态框的唯一标识符 */
    OverflowController.prototype.enter = function (uid) {
        // 已进入
        if (this.stack.indexOf(uid) > -1) {
            return;
        }
        this.stack.push(uid);
        // 说明还有其他模态框
        if (this.stack.length !== 1) {
            return;
        }
        var style = document.body.style;
        this.oldOverflowVal = style.overflow;
        this.oldPaddingRightVal = style.paddingRight;
        // has scrollbar
        if (document.documentElement.clientWidth < window.innerWidth) {
            style.paddingRight = getScrollBarSize() + "px";
        }
        // always make `body` hidden when modal shown
        style.overflow = 'hidden';
    };
    /** @param uid 每个模态框的唯一标识符 */
    OverflowController.prototype.exit = function (uid) {
        // 已出栈
        var pos = this.stack.indexOf(uid);
        if (pos < 0) {
            return;
        }
        // 出栈
        this.stack.splice(pos, 1);
        // 还有其他模态框
        if (this.stack.length !== 0) {
            return;
        }
        var style = document.body.style;
        style.overflow = this.oldOverflowVal;
        style.paddingRight = this.oldPaddingRightVal;
    };
    return OverflowController;
}());
/** 用于模态框组件中管理 body 的 overflow */
var overflowController = new OverflowController();

/**
 * 自增 ID 计数器
 */
var AutoIncreasingCounter = /** @class */ (function () {
    function AutoIncreasingCounter(initilaVal) {
        if (initilaVal === void 0) { initilaVal = 0; }
        this.val = initilaVal;
    }
    /**
     * Gets the next value
     */
    AutoIncreasingCounter.prototype.next = function () {
        this.val += 1;
        return this.val;
    };
    return AutoIncreasingCounter;
}());

function isNil(arg) {
    // eslint-disable-next-line
    return arg == null;
}

/**
 * this method is much too simple.
 */
function isNumber(num) {
    return typeof num === 'number';
}

export { overflowController, AutoIncreasingCounter, isNil, isNumber };
