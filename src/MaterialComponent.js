import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function MaterialComponent() {
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
    ];
    return (
        <Autocomplete
            disablePortal // Controls whether the dropdown menu is rendered inside a portal (outside of the DOM hierarchy)
            options={top100Films} // List of options to display in the dropdown
            sx={{ width: 300, marginTop: '10px' }} // Style extension for applying CSS directly to the component
            renderInput={(params) => <TextField {...params} label="Movie" />} // Renders the input field with the provided parameters
        />
    );
}