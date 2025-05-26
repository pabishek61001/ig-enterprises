import React from 'react';
import {
    Box,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { ArrowForward, ArrowRight, ArrowRightAlt, } from '@mui/icons-material';


import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import CampaignIcon from '@mui/icons-material/Campaign'; // Digital Marketing
import CloudIcon from '@mui/icons-material/Cloud'; // Cloud Solutions
import SecurityIcon from '@mui/icons-material/Security'; // Cybersecurity
import SpeedIcon from '@mui/icons-material/Speed'; // Performance Optimization
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions'; // API Integration
import SmartToyIcon from '@mui/icons-material/SmartToy'; // AI/Chatbot
import InsightsIcon from '@mui/icons-material/Insights'; // Analytics & SEO


const services = [
    { id: 1, title: 'UI/UX Design', icon: <DesignServicesIcon fontSize="medium" color="primary" /> },
    { id: 2, title: 'Web Development', icon: <CodeIcon fontSize="medium" color="primary" /> },
    { id: 3, title: 'Mobile Apps', icon: <PhoneIphoneIcon fontSize="medium" color="primary" /> },
    { id: 4, title: 'Digital Marketing', icon: <CampaignIcon fontSize="medium" color="primary" /> },
    { id: 5, title: 'Cloud Solutions', icon: <CloudIcon fontSize="medium" color="primary" /> },
    { id: 6, title: 'Cybersecurity', icon: <SecurityIcon fontSize="medium" color="primary" /> },
    { id: 7, title: 'Performance Optimization', icon: <SpeedIcon fontSize="medium" color="primary" /> },
    { id: 8, title: 'API Integrations', icon: <IntegrationInstructionsIcon fontSize="medium" color="primary" /> },
    { id: 9, title: 'AI Chatbots', icon: <SmartToyIcon fontSize="medium" color="primary" /> },
    { id: 10, title: 'SEO & Analytics', icon: <InsightsIcon fontSize="medium" color="primary" /> },
];

// Styled ListItem with hover effect
const StyledListItem = styled(ListItem)(({ theme }) => ({
    borderRadius: theme.shape.borderRadius,
    transition: 'background-color 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    position: 'relative',
    paddingRight: theme.spacing(8),
    overflow: 'hidden', // 👈 Add this line
    '&:hover': {
        // backgroundColor: theme.palette.action.hover,
        borderBottom: '1px solid #000',
        borderRadius: 0,
        '& .hover-content': {
            opacity: 1,
            right: theme.spacing(2),
        },
    },
}));

const HoverContent = styled(Stack)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    right: theme.spacing(-10),
    transform: 'translateY(-50%)',
    opacity: 0,
    overflowX: "hidden",
    transition: 'opacity 0.3s, right 0.3s',
    color: theme.palette.primary.main,
    fontWeight: 600,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(0.5),
    pointerEvents: 'none',
}));

export default function ServiceSection() {
    return (
        <Box sx={{ py: 10, px: { xs: 3, md: 10 }, backgroundColor: '#fff', color: 'black' }}>
            <Typography variant="h5" gutterBottom textAlign="left" color='primary' sx={{ mb: 6 }}>
                Select your industry. Discover our impact.
            </Typography>

            <Grid
                container
                spacing={{ xs: 2, md: 2 }}
                columns={{ xs: 12, sm: 12, md: 12 }}
                alignItems="center"
                justifyContent="center"
            >
                {services.map(({ id, title, icon }) => (
                    <Grid key={id} size={{ xs: 12, sm: 6 }}>
                        <List disablePadding sx={{ borderBottom: "2px solid #eee" }}>
                            <StyledListItem>
                                <ListItemIcon sx={{ minWidth: 48 }}>{icon}</ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography sx={{ fontWeight: 600, fontSize: '1rem' }}>
                                            {title}
                                        </Typography>
                                    }
                                />
                                <HoverContent className="hover-content" direction="row">

                                    <ArrowForward />
                                </HoverContent>
                            </StyledListItem>
                        </List>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
