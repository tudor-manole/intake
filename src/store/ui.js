import { observable, computed } from 'mobx';

class UiStore {
    @observable inMgmtMode = false;
    userColumns = ["projectName"];
    mgmtColumns = ["mgmtOnlyColumn"];

    @computed get availableColumns() {
        return (this.inMgmtMode ? this.userColumns.concat(this.mgmtColumns)
            : this.userColumns);
    }

    @observable visibleTableColumns = []
    constructor(rootStore) {
        this.root = rootStore
    }
}

export default UiStore