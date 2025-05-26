import { Box, Grid, Typography } from '@mui/material';


export default function AboutSection() {
    return (
        <Box
            sx={{
                py: 10,
                px: { xs: 3, md: 10 },
                backgroundColor: '#fff',
                color: 'black',
                width: '100%',
            }}
        >
            <Grid
                container
                spacing={{ xs: 4, md: 6 }}
                columns={{ xs: 1, sm: 1, md: 12 }}
                alignItems="center"
                justifyContent="center"
            >
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        color='primary'
                        sx={{ fontWeight: 'bold', mb: 3 }}
                        data-aos='fade-up'
                    >
                        About Our Company
                    </Typography>

                    <Typography
                        data-aos='fade-up'
                        variant="body1"
                        sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 2 }}
                    >
                        We are a passionate team of creatives, designers, and developers dedicated
                        to building impactful digital experiences. With a focus on innovation and
                        collaboration, we help businesses bring their vision to life with cutting-edge
                        technology and clean design.
                    </Typography>

                    <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }} data-aos='fade-up'>
                        Whether you're launching a startup, revamping a brand, or scaling up, we craft
                        custom solutions tailored to your goals.
                    </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                        data-aos='fade-up'
                        component="img"
                        src="https://img.freepik.com/free-photo/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working_146671-13569.jpg?uid=R133306793&ga=GA1.1.1773690977.1730112906&semt=ais_hybrid&w=740"
                        alt="Company Team"
                        sx={{
                            width: '100%',
                            borderRadius: 3,
                            boxShadow: 0,
                            objectFit: 'cover',
                            height: { xs: 280, md: 300 },
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
