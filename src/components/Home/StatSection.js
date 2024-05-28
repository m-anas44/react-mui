import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import '../../index.css'
const StatSection = () => {
    return (
        <Box py={{ xs: 7, sm: 10, lg: 14 }} bgcolor="grey.100">
            <Container maxWidth="lg">
                <Box textAlign="center" maxWidth="md" mx="auto">
                    <Typography variant="h2" component="h2" fontWeight="" gutterBottom fontFamily={'btBrik'}>
                        Season Updates
                    </Typography>
                    <Typography variant="h6" color="textSecondary" paragraph>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
                    </Typography>
                </Box>
                <Grid container spacing={0} mt={{ xs: 8, lg: 10 }} textAlign="center">
                    <Grid item xs={12} md={4}>
                        <Typography variant="h3" component="h3" fontWeight="bold">
                            <Box component="span" sx={{ background: 'linear-gradient(to right, #D946EF, #3B82F6)', WebkitBackgroundClip: 'text', color: 'transparent' }}>6+</Box>
                        </Typography>
                        <Typography variant="h6" fontWeight="medium" mt={4}>
                            Years in business
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Creating the successful path
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h3" component="h3" fontWeight="bold">
                            <Box component="span" sx={{ background: 'linear-gradient(to right, #D946EF, #3B82F6)', WebkitBackgroundClip: 'text', color: 'transparent' }}>4821</Box>
                        </Typography>
                        <Typography variant="h6" fontWeight="medium" mt={4}>
                            Projects delivered
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            In last 6 years
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h3" component="h3" fontWeight="bold">
                            <Box component="span" sx={{ background: 'linear-gradient(to right, #D946EF, #3B82F6)', WebkitBackgroundClip: 'text', color: 'transparent' }}>37+</Box>
                        </Typography>
                        <Typography variant="h6" fontWeight="medium" mt={4}>
                            Team members
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Working for your success
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default StatSection;
