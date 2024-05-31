import { Box, Button, Container, Grid, Typography } from "@mui/material";
import IconCard from "../IconCard/iconcard";
import icon1 from "../../assets/dentistry.png";
import icon2 from '../../assets/primarycare.png';
import icon3 from '../../assets/cardio.png';
import icon4 from '../../assets/MRI.png';
import icon5 from '../../assets/test.png';
import icon6 from '../../assets/piscologist.png';
import icon7 from '../../assets/xray.png';
import icon8 from '../../assets/laboratary.png'
import styles from './specialisation.module.css';

export default function Specialization() {
    const data = [
        { icon: icon1, title: 'Dentistry' },
        { icon: icon2, title: 'Primary Care' },
        { icon: icon3, title: 'Cardiology' },
        { icon: icon4, title: 'MRI Resonance' },
        { icon: icon5, title: 'Blood Test' },
        { icon: icon6, title: 'Piscologist' },
        { icon: icon8, title: 'Laboratory' },
        { icon: icon7, title: 'X-Ray' }
    ];

    return (
        <Box py={6} className={styles.background}>
            <Container className={styles.textCenter}>
                <Typography variant="h2" mb={4}>
                    Find by specialisation
                </Typography>

                <Grid container spacing={{ xs: 1, md: 3 }} mb={5} justifyContent={'center'}>
                    {data.map(item => (
                        <Grid item xs={4} md={3} key={item.title}>
                            <IconCard img={item.icon} title={item.title} bgColor={'#FFFFFF'} shadow={true} />
                        </Grid>
                    ))}
                </Grid>

                <Button
                    variant="contained"
                    size="large"
                    disableElevation
                    className={styles.viewAllButton}
                >
                    View All
                </Button>
            </Container>
        </Box>
    );
}
