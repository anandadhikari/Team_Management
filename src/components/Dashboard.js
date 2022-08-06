import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar';

import TeamTab from '../tabs/TeamTab';
import EmployeeTab from '../tabs/EmployeeTab';

import Team from '../pages/Team';
import Employee from '../pages/Employee';
import TeamForm from '../pages/TeamForm';
import EmployeeForm from '../pages/EmployeeForm';
import EmployeeEdit from '../pages/EmployeeEdit';

const Dashboard = () => {

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Switch>
                <Route exact path="/">
                    <TeamTab all={true}/>
                </Route>
                <Route path='/teams/:id/'>
                    {/* TODO: Add the individual team page here. */}
                    <Team/>
                </Route>
                <Route path="/newTeam">
                    <TeamForm edit={false}/>
                </Route>
                <Route path="/editTeam">
                    <TeamForm edit={true}/>
                </Route>
                <Route exact path="/employees">
                    <EmployeeTab all={true}/>
                </Route>
                <Route path='/employees/:id'>
                    {/* TODO: Add my individual employee page here. */}
                    <Employee />
                </Route>
                <Route path="/newEmployee">
                    <EmployeeForm edit={false}/>
                </Route>
                <Route path="/editEmployee/:id">
                    <EmployeeEdit />
                </Route>
            </Switch>
        </Box>
    );
};

export default Dashboard;