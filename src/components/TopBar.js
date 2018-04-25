import React from 'react';
import { Menu, Header } from 'semantic-ui-react';
import { inject, observer } from 'mobx-react';
import ToggleButton from 'react-toggle-button'

const TopBar = inject("root")(observer(({ root }) => {
    return (
        <Menu fluid>
            <Menu.Header as='h1'>Net-Eng Intake</Menu.Header>
            <Menu.Item position='right'>
                <ToggleButton
                    inactiveLabel={'User'}
                    activeLabel={'Mgmt'}
                    value={root.ui.inMgmtMode}
                    onToggle={(value) => {
                        root.ui.inMgmtMode = !root.ui.inMgmtMode;
                    }} />
            </Menu.Item>
        </Menu>
    );
}));

export default TopBar;

// style={{ color: 'white' }}