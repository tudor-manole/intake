import { observable, computed } from 'mobx';
import uuidv4 from 'uuid/v4';

class Request {
    id = null;
    @observable projectName = "";
    @observable mgmtOnlyColumn = "";

    constructor(name, mgmtOnly) {
        this.id = uuidv4();
        this.projectName = name;
        this.mgmtOnlyColumn = mgmtOnly;
    }
}

class RequestStore {
    @observable requests = [];

    constructor(rootStore) {
        this.root = rootStore
        this.createRequest("Project1", "MgmtOnly1")
        this.createRequest("Project2", "MgmtOnly2")
    }

    createRequest(name, mgmtOnly) {
        const r = new Request(name, mgmtOnly);
        this.requests.push(r);
    }
}

export default RequestStore