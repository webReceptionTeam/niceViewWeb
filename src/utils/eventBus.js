/**
 * 注意:
 *     onMounted之前的实例调用emit传值方法 on方法不会接收到
 * 
 *  使用方法
 * on(event, callback[, context])
 *  Subscribe to an event
 *      event - the name of the event to subscribe to
 *      callback - the function to call when event is emitted
 *      context - (OPTIONAL) - the context to bind the event callback to
 * 
 * once(event, callback[, context])
 *  Subscribe to an event only once
 *      event - the name of the event to subscribe to
 *      callback - the function to call when event is emitted
 *      context - (OPTIONAL) - the context to bind the event callback to
 * 
 * off(event[, callback])
 *  Unsubscribe from an event or all events. If no callback is provided, it unsubscribes you from all events.
 *      event - the name of the event to unsubscribe from
 *      callback - the function used when binding to the event
 * 
 * emit(event[, arguments...])
 *  Trigger a named event
 *      event - the event name to emit
 *      arguments... - any number of arguments to pass to the event subscribers
 */
const emitter = require('tiny-emitter/instance');
export default emitter;