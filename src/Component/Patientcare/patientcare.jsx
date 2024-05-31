import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import styles from './patientcare.module.css';
import banner from '../../assets/patientcare1.png';
import tick from '../../assets/patientcare2.png';

export default function PatientCaring() {
    return (
        <Box py={6} className={styles.background}>
            <Container>
                <Grid container spacing={6} alignItems='center'>

                    <Grid item xs={12} md={6}>
                        <Box
                            component='img'
                            src={banner}
                            width={1}
                        />
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography
                            fontWeight={600}
                            color="primary.main"
                        >
                            HELPING PATIENTS FROM AROUND THE GLOBE!!
                        </Typography>
                        <Typography variant="h2" mb={1}>
                            Patient <Box component='span' color='primary.main'>Caring</Box>
                        </Typography>
                        <Typography color='#77829D' lineHeight={1.8}>
                            Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
                        </Typography>

                        <List className={styles.list}>
                            <ListItem disableGutters>
                                <ListItemIcon className={styles.icon}>
                                    <Box component='img' src={tick} height={22} width={22} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Stay Updated About Your Health'
                                    primaryTypographyProps={{ className: styles.listItemText }}
                                />
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemIcon className={styles.icon}>
                                    <Box component='img' src={tick} height={22} width={22} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Check Your Results Online'
                                    primaryTypographyProps={{ className: styles.listItemText }}
                                />
                            </ListItem>
                            <ListItem disableGutters>
                                <ListItemIcon className={styles.icon}>
                                    <Box component='img' src={tick} height={22} width={22} />
                                </ListItemIcon>
                                <ListItemText
                                    primary='Manage Your Appointments'
                                    primaryTypographyProps={{ className: styles.listItemText }}
                                />
                            </ListItem>
                        </List>

                    </Grid>

                </Grid>
            </Container>
        </Box>
    )
}
