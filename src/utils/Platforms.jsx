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
import { ArrowRight, ArrowRightAlt, } from '@mui/icons-material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const services = [
    {
        id: 1,
        title: 'UI/UX Design',
        description: 'Creating visually appealing and user-friendly interfaces for websites and apps.',
    },
    {
        id: 2,
        title: 'Web Development',
        description: 'Building responsive and functional websites using modern web technologies.',
    },
    {
        id: 3,
        title: 'Mobile Apps',
        description: 'Developing cross-platform mobile applications for iOS and Android devices.',
    },
    {
        id: 4,
        title: 'Digital Marketing',
        description: 'Promoting brands through online channels to increase visibility and engagement.',
    },
    {
        id: 5,
        title: 'Cloud Solutions',
        description: 'Deploying scalable and secure cloud-based infrastructures and services.',
    },
    {
        id: 6,
        title: 'Cybersecurity',
        description: 'Protecting digital assets through threat detection, prevention, and response.',
    },
    {
        id: 7,
        title: 'Performance Optimization',
        description: 'Enhancing website and app speed, responsiveness, and overall performance.',
    },
    {
        id: 8,
        title: 'API Integrations',
        description: 'Connecting third-party services and systems via secure APIs.',
    },
    {
        id: 9,
        title: 'AI Chatbots',
        description: 'Creating intelligent virtual assistants for automated customer interactions.',
    },
    {
        id: 10,
        title: 'SEO & Analytics',
        description: 'Improving search engine visibility and analyzing user behavior for insights.',
    },
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

export default function Platforms() {
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
                {services.map(({ id, title, description }) => (
                    <Grid key={id} size={{ xs: 12, sm: 6 }}>
                        <List disablePadding sx={{ borderBottom: "2px solid #eee" }}>
                            <StyledListItem>
                                <ListItemText
                                    primary={
                                        <Typography variant='h6' sx={{ fontWeight: 400, mb: 1 }}>
                                            {title}
                                        </Typography>
                                    }
                                    secondary={
                                        <Typography variant='subtitle2' color='textSecondary' sx={{ mb: 2 }}>
                                            {description}
                                        </Typography>
                                    }
                                />
                                <ArrowForwardIcon />
                            </StyledListItem>
                        </List>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
