import React from 'react';
import TopBar from './TopBar';
import RequestTable from './RequestTable';
import { Container } from 'semantic-ui-react';
import { Provider } from 'mobx-react';
import RootStore from '../store/root';

const App = () => (
    <Provider root={new RootStore()}>
        <Container fluid>
            <TopBar />
            <RequestTable />
        </Container>
    </Provider>
);

export default App;
