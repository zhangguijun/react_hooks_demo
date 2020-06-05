 #### setState 认知
 1. setState 不会立即改变React组件中的state
 2. setState 通过触发一次组件更新来引发重绘
 3. 多次state 函数调用产生的效果会引起合并

 ---
 #### react 为了解决 渲染性能问题
 * 会将setState效果放在队列， 积攒着一次引发更新，为的就是将虚拟dom 和dom 的操作最小， 用于提高性能

 #### setState 什么时候会同步更新？
 * 在react 中如果由react 引发的事件处理（如 onClick）,调用setState 不会同步更新state, 除此之外，所有调用setState 都会同步执行this.state
  1. 除此之外指的是指的是绕过React通过 addEventListener 直接添加的事件处理函数，还有通过setTimeout || setInterval 产生的异步调用。
* 简单一点说， 就是经过React 处理的事件是不会同步更新 this.state的. 通过 addEventListener || setTimeout/setInterval 的方式处理的则会同步更新。

!['图片'](/img/a.png)