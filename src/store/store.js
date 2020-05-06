import {
  decorate,
  observable,
  action
} from 'mobx'

class Store {
  count = 1;
  addCount(){
    this.count ++
  }
}

decorate(Store,{
  count: observable,
  addCount: action.bound,
})

const store = new Store()

export default store