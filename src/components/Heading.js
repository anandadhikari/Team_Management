import React from 'react';
import Typography from '@mui/material/Typography';

const Heading = (props) => {
    return (
        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
            {props.name}
        </Typography>
    );
};

export default Heading;