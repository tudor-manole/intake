// import {observable} from 'mobx';
import UiStore from './ui'
import RequestStore from './request'

class RootStore {
    constructor() {
        this.ui = new UiStore(this)
        this.requests = new RequestStore(this)
    }
}

export default RootStore