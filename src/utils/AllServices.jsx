import { useState } from 'react';
import { Box, Typography, Grid, Button, Card, CardMedia, CardContent } from '@mui/material';
import { ArrowBack, ArrowDropDown, ArrowDropUp, ArrowUpward } from '@mui/icons-material';

const allServices = [
    { title: 'AI Solutions', image: 'https://img.freepik.com/free-photo/futuristic-robot-working-digital-interface_23-2151966679.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740' },
    { title: 'Cloud Consulting', image: 'https://img.freepik.com/premium-photo/digital-finance-business-models-using-data-analytics-technology-graph-perceptive-insights_1356430-5311.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740' },
    { title: 'Cybersecurity', image: 'https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252420.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740' },
    { title: 'IT Infrastructure', image: 'https://img.freepik.com/free-photo/cyber-security-expert-working-with-technology-neon-lights_23-2151645561.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740' },
    { title: 'IoT Solutions', image: 'https://img.freepik.com/free-photo/futuristic-business-scene-with-ultra-modern-ambiance_23-2151003761.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740' },
    { title: 'Penetration Testing', image: 'https://img.freepik.com/premium-photo/man-is-writing-white-board-with-checklist-it_1187092-95968.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740' },
    { title: 'Data Engineering', image: 'https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252464.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740.' },
    { title: 'Web Applications', image: 'https://img.freepik.com/premium-photo/man-using-laptop-with-product-catalog-interface-home-office_819052-42447.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740' },
    { title: 'Cloud Storage', image: 'https://img.freepik.com/free-photo/technology-integrated-everyday-life_23-2151887047.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740' },
    { title: 'Business Intelligence', image: 'https://img.freepik.com/free-photo/portrait-indigenous-person-integrated-into-modern-life_23-2151102511.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740' },
    { title: 'DevOps & CI/CD', image: 'https://img.freepik.com/free-photo/view-male-engineer-work-engineers-day-celebration_23-2151615153.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740' },
    { title: 'Automation Tools', image: 'https://img.freepik.com/free-photo/man-hanging-out-with-robot_23-2151112223.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740' },
];

export default function AllServices() {
    const [showAll, setShowAll] = useState(false);
    const visibleServices = showAll ? allServices : allServices.slice(0, 4);

    return (
        <Box sx={{ px: { xs: 2, md: 10 }, py: 10, bgcolor: 'transparent', color: 'white' }}>
            <Typography variant="subtitle1" mb={2} fontWeight="bold" gutterBottom>
                Services
            </Typography>
            <Typography variant="h5" gutterBottom textAlign="left" sx={{ mb: 6, color: "white" }}>
                Transform your business with advanced technologies
            </Typography>

            <Grid container spacing={{ xs: 4, sm: 6, md: 6 }} columns={{ xs: 12, sm: 12, md: 12 }}>
                {visibleServices.map((service, index) => (
                    <Grid key={index} size={{ xs: 6, sm: 6, md: 3 }}>
                        <Card
                            sx={{
                                cursor: "pointer",
                                position: 'relative',
                                borderRadius: 3,
                                overflow: 'hidden',
                                height: { xs: 200, sm: 350 },
                                mb: 2,
                                transition: 'transform 0.3s ease',
                                '&:hover': {
                                    transform: "translateY(-10px)",
                                    '.hover-overlay': {
                                        opacity: 1,
                                        background:
                                            'linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.2))',
                                    },
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={service.image}
                                alt={service.title}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                }}
                            />

                            {/* Hover Overlay (initially hidden) */}
                            <Box
                                className="hover-overlay"
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    opacity: 1,
                                    transition: 'opacity 0.3s ease-in-out',
                                    background: 'rgba(0, 0, 0, 0.4)', // 20% black overlay
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    px: 2,
                                }}
                            >
                                <Typography
                                    variant="body5"
                                    component="div"
                                    sx={{
                                        position: 'absolute',
                                        top: 20,
                                        left: 10,
                                        color: '#fff',
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        lineHeight: 1.3,
                                        textAlign: "left",
                                        marginRight: 20
                                    }}
                                >
                                    {service.title}
                                </Typography>
                            </Box>
                        </Card>

                    </Grid>

                ))}
            </Grid>

            <Box textAlign="center" mt={5}>
                <Button endIcon={showAll ? <ArrowDropUp /> : <ArrowDropDown />} size='large' variant="outlined" onClick={() => setShowAll(!showAll)} sx={{
                    color: "white", borderColor: 'white', '&:hover': {
                        bgcolor: "white",
                        color: "primary.dark"
                    }
                }}>
                    {showAll ? 'View Less' : 'View All Topics'}
                </Button>
            </Box>
        </Box>
    );
}
