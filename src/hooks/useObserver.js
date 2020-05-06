import React from 'react';
import { useLocalStore, useObserver, Observer } from 'mobx-react'

import store from '../store/store'
/**
 *  不使用 inject, observer 方法注入 store
 */
// 方法1
function DemoStore1() {
  const localStore = useLocalStore(() => store)
  return useObserver(
    () =>
      <div onClick={localStore.addCount}>{localStore.count}</div>

  )
}
// 方法2

function DemoStore2() {
  const localStore = useLocalStore(() => store);
  return <Observer>{() => <span>{localStore.count}</span>}</Observer>
}

export { DemoStore1, DemoStore2 }