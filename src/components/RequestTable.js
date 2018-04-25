import React from 'react';
import { Table, Header } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';

const RequestTable = inject("root")(observer(({ root }) => {
    console.log(root.ui.availableColumns);
    return (
        <Table celled singleline>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Project Name</Table.HeaderCell>
                    {root.ui.inMgmtMode ? <Table.HeaderCell>Mgmt Only</Table.HeaderCell> : null}
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {root.requests.requests.map((request) => {
                    return (
                        <Table.Row key={request.id}>
                            {Object.keys(request).map((property) => {
                                if (root.ui.inMgmtMode && root.ui.mgmtColumns.includes(property)) {
                                    return (
                                        <Table.Cell>
                                            {request[property]}
                                        </Table.Cell>
                                    )
                                } else if (!root.ui.mgmtColumns.includes(property) && root.ui.userColumns.includes(property)) {
                                    return (
                                        <Table.Cell>
                                            {request[property]}
                                        </Table.Cell>
                                    )
                                }
                            })}
                        </Table.Row>
                    )
                })}
            </Table.Body>
        </Table>
    );
}));

export default RequestTable;
