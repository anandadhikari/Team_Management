import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

import Heading from '../components/Heading'
import ApiServices from '../services/ApiServices';
import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import { red, green } from '@mui/material/colors';

import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { CardActionArea } from '@mui/material';
import axios from 'axios';

const Team = (props) => {

    const params = useParams();
    const history = useHistory();

    const [team, setTeam] = useState([]);
    const [members, setMembers] = useState([]);
    const [teamLeader, setTeamLeader] = useState({
        id: -1,
        firstName: 'Default',
        lastName: 'Default',
        completeName: 'Default Default',
        jobPosition: 'lol'
    });

    useEffect(() => {
        // All of this is to avoid using async
        axios.all([
            ApiServices.getTeamById(params.id),
            ApiServices.getMembersByTeamId(params.id)
        ])
            .then(axios.spread((response1, response2) => {
                setTeam(response1.data);
                setMembers(response2.data);
                return [response1, response2]
            }))
            .then((arr) => {
                console.log(arr);
                let leaders = arr[1].data.filter((member) => {
                    return member.id === arr[0].data.teamLeader
                })
                // Makes it so that teams without a leader will still load.
                if (leaders.length > 0) {
                    setTeamLeader(leaders[0]);
                }
            });
    }, []);

    const getColor = (id) => {
        if (id === teamLeader.id) {
            return green[500];
        } else {
            return red[500];
        }
    }

    function TeamLeader(props) {
        if (teamLeader.id !== -1) {
            return (
                <div>
                    <Heading name={"Team Leader"} />
                    <Grid container spacing={3} sx={{ mb: "1.25rem" }}>
                        <Grid item xs={12} md={6} lg={4}>
                            <CardActionArea
                                onClick={() => history.push(`/employees/${teamLeader.id}`)}
                            >
                                <Card>
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{ bgcolor: getColor(teamLeader.id) }} aria-label="teamLeaderIcon">
                                                {`${teamLeader.firstName[0].toUpperCase()}${teamLeader.lastName[0].toUpperCase()}`}
                                            </Avatar>
                                        }
                                        action={
                                            <IconButton aria-label="settings"

                                                // Stops the settings icon from causing the 
                                                // card area to trigger
                                                onMouseDown={event => event.stopPropagation()}
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    event.preventDefault();
                                                    console.log("Button clicked");
                                                }}
                                            >
                                                <MoreVertIcon />
                                            </IconButton>
                                        }
                                        title={teamLeader.completeName}
                                        subheader={teamLeader.jobPosition}
                                    />
                                </Card>
                            </CardActionArea>
                        </Grid>
                    </Grid>
                </div>
            )
        } else {
            return null
        }
    }

    return (
        <div>
            <TeamLeader />
            <Heading name={"Members"} />
            <Grid container spacing={3}>
                {members.map((member) => (
                    <Grid item xs={12} md={6} lg={4}>
                        <CardActionArea
                            onClick={() => history.push(`/employees/${member.id}`)}
                        >
                            <Card>
                                <CardHeader
                                    avatar={
                                        <Avatar sx={{ bgcolor: getColor(member.id) }} aria-label="teamMemberIcon">
                                            {`${member.firstName[0].toUpperCase()}${member.lastName[0].toUpperCase()}`}
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton aria-label="settings"

                                            // Stops the settings icon from causing the 
                                            // card area to trigger
                                            onMouseDown={event => event.stopPropagation()}
                                            onClick={(event) => {
                                                event.stopPropagation();
                                                event.preventDefault();
                                                console.log("Button clicked");
                                            }}
                                        >
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title={member.completeName}
                                    subheader={member.jobPosition}
                                />
                            </Card>
                        </CardActionArea>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Team;