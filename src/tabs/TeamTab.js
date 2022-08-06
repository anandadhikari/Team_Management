import { useEffect, useState } from 'react';
import Grid from "@mui/material/Grid";

import TeamCard from '../components/TeamCard';
import Heading from '../components/Heading';
import ApiServices from '../services/ApiServices';

const TeamTab = (props) => {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        ApiServices.getTeams().then((response) => {
            setTeams(response.data)
        });
    }, []);

    return (
        <div className="page team">
            <Heading name="Teams" />
            <Grid container spacing={3}>
                {teams.map((team) => (
                    <Grid item xs={12} md={6} lg ={4}>
                        <TeamCard team={team} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default TeamTab;