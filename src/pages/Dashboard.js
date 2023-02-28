import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import { Helmet } from 'react-helmet-async';

import DashboardHeader from '../components/DashboardHeader';
import CoinMarkets from '../components/tables/CoinMarkets';
import BarChart from '../components/charts/BarChart';

import DoughnutChart from '../components/charts/DoughnutChart';
import Spacer from '../components/Spacer';


const Dashboard = () => {
    const theme = useTheme();
    
    return (
        <React.Fragment>
            <Helmet>
                <title>Crypto Coins Dashboard</title>
            </Helmet>
            <Box 
                sx={{ 
                    backgroundColor: theme.palette.background.default, 
                    minHeight: '100%', 
                    py: 8
                }}
            >
                <Container maxWidth={false}>
                    <Grid container spacing={3}>

                        <DashboardHeader />

                     

                        

                       

                        

                        <Grid item xs={12}>
                            <CoinMarkets />
                        </Grid>

                        <Grid item xs={12}>
                            <BarChart />
                        </Grid>
                        
                        
                       

                        <Grid item md={4} xs={12}>
                            <DoughnutChart />
                        </Grid>
                      

                       
                        
                    </Grid>
                </Container>
            </Box>
            <Spacer sx={{ pt: 7 }} />
        </React.Fragment>
    );
};

export default Dashboard;