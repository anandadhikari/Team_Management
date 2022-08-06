import { Button, Paper, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import { Box } from '@mui/system';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';

import ApiServices from '../services/ApiServices';


const EmployeeForm = () => {

    const defaultValues = {
        firstName: "",
        jobPosition: "",
        location: "",
        nativeLanguage: "",
        teamPosition: "",
        teamId: "",
        phoneNumber: "", 
        email: ""
    }

    const { reigster, handleSubmit, control } = useForm({defaultValues});

    const history = useHistory();

    const onSubmit = (data) => {
        console.log(data);
        data.startDate = new Date().getTime();
        data.profileImg = null;
        ApiServices.createMember(data).then((response) => {
            history.push("/employees")
        });
    }

    const teams = [1, 2, 3, 4, 5];

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
                        New Employee
                    </Typography>
                    {/* onSubmit={handleSubmit} */}
                    <Box component="form" noValidate p={3}>
                        <Grid container spacing={2} >
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"firstName"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField required fullWidth onChange={onChange} value={value} label={"First Name"} />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"lastName"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField required fullWidth onChange={onChange} value={value} label={"Last Name"} />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"completeName"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField fullWidth onChange={onChange} value={value} label={"Complete Name"} />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"address"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField fullWidth onChange={onChange} value={value} label={"Address"} />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"jobPosition"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <FormControl fullWidth required>
                                            <InputLabel id="job-position-label">Job Position</InputLabel>
                                            <Select
                                                value={value}
                                                label="Job Position"
                                                onChange={onChange}
                                            >
                                                <MenuItem value={"Software Engineer"}>Software Engineer</MenuItem>
                                                <MenuItem value={"Backend Developer"}>Backend Developer</MenuItem>
                                                <MenuItem value={"Frontend Developer"}>Frontend Developer</MenuItem>
                                                <MenuItem value={"Human Resources"}>Human Resources</MenuItem>
                                                <MenuItem value={"Director"}>Director</MenuItem>
                                                <MenuItem value={"UI Designer"}>UI Designer</MenuItem>
                                                <MenuItem value={"UX Designer"}>UX Designer</MenuItem>
                                                <MenuItem value={"Tech Lead"}>Tech Lead</MenuItem>
                                                <MenuItem value={"Senior Developer (Java)"}>Senior Developer (Java)</MenuItem>
                                                <MenuItem value={"Junior Developer (Java)"}>Junior Developer (Java)</MenuItem>
                                            </Select>
                                        </FormControl>
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"isRemote"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <FormControlLabel fullwidth control={<Checkbox onChange={onChange} />} label="Remote" />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"location"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <FormControl fullWidth required>
                                            <InputLabel id="location-label">Location</InputLabel>
                                            <Select
                                                value={value}
                                                label="Location"
                                                onChange={onChange}
                                            >
                                                <MenuItem value={"Banglore"}>Banglore</MenuItem>
                                                <MenuItem value={"Delhi"}>Delhi</MenuItem>
                                                <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                                                <MenuItem value={"Pune"}>Pune</MenuItem>
                                                <MenuItem value={"Chennai"}>Chennai</MenuItem>
                                            </Select>
                                        </FormControl>
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"nativeLanguage"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <FormControl fullWidth required>
                                            <InputLabel id="native-language-label">Native Language</InputLabel>
                                            <Select
                                                value={value}
                                                label="Native Language"
                                                onChange={onChange}
                                            >
                                                <MenuItem value={1}>English</MenuItem>
                                                <MenuItem value={2}>Hindi</MenuItem>
                                                <MenuItem value={3}>Telgu</MenuItem>
                                                <MenuItem value={4}>Tamil</MenuItem>
                                            </Select>
                                        </FormControl>
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"teamPosition"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <FormControl fullWidth required>
                                            <InputLabel id="team-position-label">Team Position</InputLabel>
                                            <Select
                                                value={value}
                                                label="Team Position"
                                                onChange={onChange}
                                            >
                                                <MenuItem value={"Team Leader"}>Team Leader</MenuItem>
                                                <MenuItem value={"Member"}>Member</MenuItem>
                                            </Select>
                                        </FormControl>
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"teamId"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField select fullWidth onChange={onChange} value={value} label={"Team"} >
                                            {
                                                teams.map((team, index) => (
                                                    <MenuItem key={index} value={team}>
                                                        {`Team ${team}`}
                                                    </MenuItem>
                                                ))
                                            }
                                        </TextField>
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"phoneNumber"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField fullWidth onChange={onChange} value={value} label={"Phone Number"} />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"email"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField fullWidth onChange={onChange} value={value} label={"Email"} />
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

export default EmployeeForm;