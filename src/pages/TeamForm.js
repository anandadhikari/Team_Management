import { Button, Paper, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';

import ApiServices from '../services/ApiServices';

const TeamForm = () => {

    const defaultValues = {
        teamName: "",
        teamDescription: "",
        teamType: "",
        teamLeader: ""
    }

    const { handleSubmit, control } = useForm({ defaultValues });

    const history = useHistory();
    const [members, setMembers] = useState([]);

    const onSubmit = (data) => {
        data.orgId = 1;
        ApiServices.createTeam(data).then((response) => {
            history.push("/")
        });
    }

    useEffect(() => {
        ApiServices.getMembers().then((response) => {
            setMembers(response.data)
        });
    }, []);

    const teamTypes = [1, 2, 4, 3, 5];
    const teamTypesNames = ["Software Engineer", "UI Design", "Backend Developers", "Human Resoures", "Directors"];

    return (
        <div className="page teamForm">
            <Paper>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                >
                    <Typography component="h1" variant="h5" sx={{ mt: 3 }}>
                        New Team
                    </Typography>
                    {/* onSubmit={handleSubmit} */}
                    <Box component="form" noValidate p={3}>
                        <Grid container spacing={2} >
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"teamName"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField required fullWidth onChange={onChange} value={value} label={"Team Name"} />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"teamLeader"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField select fullWidth onChange={onChange} value={value} label={"Team Leader"} >
                                            {
                                                members.map((member, index) => (
                                                    <MenuItem key={index} value={member.id}>
                                                        {`${member.firstName} ${member.lastName}`}
                                                    </MenuItem>
                                                ))
                                            }
                                        </TextField>
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"teamDescription"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField fullWidth onChange={onChange} value={value} label={"Team Description"} />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"teamType"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField select fullWidth onChange={onChange} value={value} label={"Team Type"} >
                                            {
                                                teamTypes.map((type, index) => (
                                                    <MenuItem key={index} value={type}>
                                                        {`${teamTypesNames[index]}`}
                                                    </MenuItem>
                                                ))
                                            }
                                        </TextField>
                                    )}
                                />
                            </Grid>
                        </Grid>
                        <Button fullWidth onClick={handleSubmit(onSubmit)} variant="contained" sx={{ mt: 2, mb: 2 }}>Submit</Button>
                    </Box>
                </Box>
            </Paper>
        </div>
    );
};

export default TeamForm;