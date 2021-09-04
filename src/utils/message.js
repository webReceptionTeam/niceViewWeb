
import { ElMessage as message } from 'element-plus';
const showMessage = Symbol('showMessage');
let messageItem = null;

class ResetMessage {
  [showMessage](type, options, only) {
    if (messageItem && only) {
      messageItem.close()
    }
    messageItem = message[type](options)
  }

  success(options, only = true) {
    this[showMessage]('success', options, only)
  }

  error(options, only = true) {
    this[showMessage]('error', options, only)
  }

  warning(options, only = true) {
    this[showMessage]('warning', options, only)
  }

  info(options, only = true) {
    this[showMessage]('info', options, only)
  }
}

// 实例化单例
let MyMessage = new ResetMessage()


const ElMessageFn = (options) => {
  if (typeof options === 'string') {
    MyMessage.info(options || '', true)
  } else {
    messageItem = message(options)
  }
}

['success', 'warning', 'info', 'error'].forEach(type => {
  ElMessageFn[type] = (options, only = true) => {
    if (typeof options === 'string') {
      options = {
        message: options,
        type,
      }
    } else {
      options.type = type
    }
    MyMessage[showMessage](type, options, only)
  }
})

// 全局兼容
export const Message = (app) => {
  app.config.globalProperties.$message = ElMessageFn
};

// 引入兼容
export const ElMessage = ElMessageFn;