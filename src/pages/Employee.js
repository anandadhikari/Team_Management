import { Paper, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';

import ApiServices from '../services/ApiServices';

const Employee = () => {

    const params = useParams();
    const history = useHistory();

    const { reigster, handleSubmit, control } = useForm();

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        completeName: "",
        jobPosition: "",
        location: "",
        nativeLanguage: "",
        teamPosition: "",
        teamId: "",
        phoneNumber: "",
        email: ""
    });

    const onSubmit = (data) => {
        history.push(`/editEmployee/${employee.id}`);
    }

    useEffect(() => {
        ApiServices.getMemberById(params.id).then((response) => {
            console.log(response.data);
            setEmployee(response.data);
        });
    }, []);

    const getLanguage = (id) => {
        switch (id) {
            case 1:
                return 'English';

            case 2:
                return 'Spanish';
            case 3:
                return 'Portuguese (Brazilian)';
            case 4:
                return 'Portuguese (European)';
        }
    }

    return (
        <div className="page employee">
            <Paper>
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
                >
                    <Typography component="h1" variant="h5" sx={{ mt: 3 }}>
                        {employee.firstName} {employee.lastName}
                    </Typography>
                    {/* onSubmit={handleSubmit} */}
                    <Box component="form" noValidate p={3}>
                        <Grid container spacing={2} >
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"firstName"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField disabled fullWidth onChange={onChange} value={employee.firstName} label={"First Name"} />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"lastName"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField disabled fullWidth onChange={onChange} value={employee.lastName} label={"Last Name"} />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"completeName"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField disabled fullWidth onChange={onChange} value={employee.completeName} label={"Complete Name"} />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"address"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField disabled fullWidth onChange={onChange} value={employee.address} label={"Address"} />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"jobPosition"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField disabled fullWidth onChange={onChange} value={employee.jobPosition} label={"Job Position"} />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"isRemote"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <FormControlLabel disabled fullwidth control={<Checkbox onChange={onChange} checked={employee.isRemote ? true : false} />} label="Remote" />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"location"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField disabled fullWidth onChange={onChange} value={employee.location} label={"Location"} />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"nativeLanguage"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField disabled fullWidth onChange={onChange} value={getLanguage(employee.nativeLanguage)} label={"Native Language"} />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"teamPosition"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField disabled fullWidth onChange={onChange} value={employee.teamPosition} label={"Team Position"} />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"teamId"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField disabled fullWidth onChange={onChange} value={employee.teamId} label={"Team"} />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"phoneNumber"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField disabled fullWidth onChange={onChange} value={employee.phoneNumber} label={"Phone Number"} />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"email"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField disabled fullWidth onChange={onChange} value={employee.email} label={"Email"} />
                                    )}
                                />
                            </Grid>
                        </Grid>
                        {/* <Button fullWidth onClick={handleSubmit(onSubmit)} variant="contained" sx={{ mt: 2, mb: 2 }}>Edit</Button> */}
                    </Box>
                </Box>
            </Paper>
        </div>
    );
};

export default Employee;