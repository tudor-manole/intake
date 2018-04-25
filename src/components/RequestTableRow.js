import React from 'react';
import { Table } from 'semantic-ui-react';
// import { inject, observer } from 'mobx-react';

const RequestTableRow = inject("root")(observer(({ root }) => {
    console.log(root.ui.availableColumns);
    return (
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Project Name</Table.HeaderCell>
                    <Table.HeaderCell>Mgmt Only</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                <Table.Row>
                    {/* {root.ui.} */}
                </Table.Row>
            </Table.Body>

        </Table>
    );
}));

export default RequestTableRow;
