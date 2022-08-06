import { Button, Paper, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Grid";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import Slide from '@mui/material/Slide';

import ApiServices from '../services/ApiServices';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const EmployeeEdit = () => {

    const params = useParams();
    const history = useHistory();

    const defaultValues = {
        firstName: "",
        lastName: "",
        completeName: "",
        address: "",
        jobPosition: "",
        location: "",
        nativeLanguage: "",
        teamPosition: "",
        teamId: "",
        isRemote: false,
        phoneNumber: "",
        email: ""
    }


    const { reigster, handleSubmit, control } = useForm({ defaultValues });

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        completeName: "",
        address: "",
        jobPosition: "",
        location: "",
        nativeLanguage: "",
        teamPosition: "",
        teamId: "",
        phoneNumber: "",
        email: ""
    });

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [completeName, setCompleteName] = useState("");
    const [address, setAddress] = useState("");
    const [jobPosition, setJobPosition] = useState("");
    const [remote, setRemote] = useState(false);
    const [location, setLocation] = useState("");
    const [nativeLanguage, setNativeLanguage] = useState(1);
    const [teamPosition, setTeamPosition] = useState("");
    const [teamId, setTeamId] = useState(1);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (data) => {
        data.firstName = firstName;
        data.lastName = lastName;
        data.completeName = completeName;
        data.address = address;
        data.jobPosition = jobPosition;
        data.isRemote = true; // FIXME: Fix this later
        data.location = location;
        data.nativeLanguage = nativeLanguage;
        data.teamPosition = teamPosition;
        data.teamId = teamId;
        data.phoneNumber = phoneNumber;
        data.email = email;
        data.startDate = employee.startDate;
        data.profileImg = employee.profileImg;
        console.log(data);
        ApiServices.updateMember(employee.id, data).then(() => {
            history.push(`/employees/${employee.id}`)
        })
    }

    useEffect(() => {
        ApiServices.getMemberById(params.id).then((response) => {
            setEmployee(response.data);
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setCompleteName(response.data.completeName);
            setAddress(response.data.address);
            setJobPosition(response.data.jobPosition);
            setRemote(response.data.remote);
            setLocation(response.data.location);
            setNativeLanguage(response.data.nativeLanguage);
            setTeamPosition(response.data.teamPosition);
            setTeamId(response.data.teamId);
            setPhoneNumber(response.data.phoneNumber);
            setEmail(response.data.email);
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

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastName = (event) => {
        setLastName(event.target.value);
    }

    const handleCompleteName = (event) => {
        setCompleteName(event.target.value);
    }

    const handleAddress = (event) => {
        setAddress(event.target.value);
    }

    const handleJobPosition = (event) => {
        setJobPosition(event.target.value);
    }

    const handleLocation = (event) => {
        setLocation(event.target.value);
    }

    const handleRemote = (event) => {
        setRemote(event.target.checked);
    }

    const handleNativeLanguage = (event) => {
        setNativeLanguage(event.target.value);
    }

    const handleTeamPosition = (event) => {
        setTeamPosition(event.target.value);
    }

    const handleTeamId = (event) => {
        setTeamId(event.target.value);
    }

    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    }

    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleDelete = () => {
        handleClose();
        ApiServices.deleteMember(employee.id).then((response) => {
            history.push("/employees");
        });
    }

    const teams = [1, 2, 3, 4, 5];

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
                                        <TextField required fullWidth onChange={handleFirstName} value={firstName} label={"First Name"} />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"lastName"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField required fullWidth onChange={handleLastName} defaultValue={lastName} value={lastName} label={"Last Name"} />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"completeName"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField fullWidth onChange={handleCompleteName} defaultValue={completeName} value={completeName} label={"Complete Name"} />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"address"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField fullWidth onChange={handleAddress} defaultValue={address} value={address} label={"Address"} />
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
                                                value={jobPosition}
                                                defaultValue={jobPosition}
                                                label="Job Position"
                                                onChange={handleJobPosition}
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
                                        // FIXME: The checkbox is not working correctly
                                        <FormControlLabel fullwidth control={<Checkbox onChange={handleRemote} checked={remote} />} label="Remote" />
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
                                                value={location}
                                                defaultValue={location}
                                                label="Location"
                                                onChange={handleLocation}
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
                                                value={nativeLanguage}
                                                defaultValue={nativeLanguage}
                                                label="Native Language"
                                                onChange={handleNativeLanguage}
                                            >
                                                <MenuItem value={1}>English</MenuItem>
                                                <MenuItem value={2}>Spanish</MenuItem>
                                                <MenuItem value={3}>Portuguese (Brazilian)</MenuItem>
                                                <MenuItem value={4}>Portuguese (European)</MenuItem>
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
                                                value={teamPosition}
                                                defaultValue={teamPosition}
                                                label="Team Position"
                                                onChange={handleTeamPosition}
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
                                        <TextField select fullWidth onChange={onChange} defaultValue={teamId} value={value} label={"Team"} >
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
                                        <TextField fullWidth onChange={handlePhoneNumber} defaultValue={phoneNumber} value={phoneNumber} label={"Phone Number"} />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name={"email"}
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <TextField fullWidth onChange={handleEmail} defaultValue={email} value={email} label={"Email"} />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button fullWidth onClick={handleSubmit(onSubmit)} variant="contained" sx={{ mt: 2, mb: 2 }}>Done</Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button fullWidth color="error" onClick={handleClickOpen} variant="contained" sx={{ mt: 2, mb: 2 }}>Delete</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Paper>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{"Delete this employee?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Are you sure you would like to delete this employee?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={handleDelete}>Yes</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default EmployeeEdit;