import * as React from 'react';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red, green, blue, orange, deepPurple } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { CardActionArea } from '@mui/material';

import { useHistory } from 'react-router';
import ApiServices from '../services/ApiServices';
function TeamCard(props) {
    

    const history = useHistory();

    const [teamMembers, setTeamMembers] = useState([]);
    console.log(teamMembers)
    useEffect(() => {
        ApiServices.getMembersByTeamId(props.team.id).then((response) => {
            setTeamMembers(response.data)
        });
    }, []);

    const firstTwo = (name) => {
        return name.split(' ').map((x, idx) => {
            if(idx < 2) {
                return x[0].toUpperCase();
            }
        }
        ).join("");
    }

    const getColor = (teamType) => {
        switch(teamType) {
            case 1:
                return blue[500];

            case 3:
                return orange[500];

            case 4:
                return deepPurple[500];

            case 10:
                return green[500];

            default: 
                return red[500];
        }
    }

    return (
        <CardActionArea
            onClick={() => history.push(`/teams/${props.team.id}`)}
            >
        {/* Add a height of 240. NOTE: For demo purposes */}
        <Card sx={{ height: 240 }}> 
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: getColor(props.team.teamType) }} aria-label="teamLeaderIcon">
                        {firstTwo(props.team.teamDescription)}
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
                title={props.team.teamDescription}
                subheader={props.team.teamName}
            />
            <CardContent>
            <Typography variant="body2">
                    Total Team Members: {teamMembers.length}
                </Typography>
                <Typography variant="body2">
                    Team Leader Id: {props.team.teamLeader}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => history.push(`/teams/${props.team.id}`)}>More</Button>
            </CardActions>
        </Card>
        </CardActionArea>
    );
}

export default TeamCard;
