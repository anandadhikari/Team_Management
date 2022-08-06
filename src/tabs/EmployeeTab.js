import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'

import Grid from "@mui/material/Grid";
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import CardHeader from '@mui/material/CardHeader';
import { red } from '@mui/material/colors';

import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { CardActionArea } from '@mui/material';

import Heading from '../components/Heading';

import ApiServices from '../services/ApiServices';

const EmployeeTab = () => {

    const history = useHistory();

    const [members, setMembers] = useState([]);
    //const [tableData, setTableData] = useState([]);

    useEffect(() => {
        ApiServices.getMembers().then((response) => {
            console.log(response.data);
            setMembers(response.data);
        });
    }, []);

    return (
        <div className="page employee">
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
                                        <Avatar sx={{ bgcolor: red[500] }} aria-label="teamMemberIcon">
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

export default EmployeeTab;