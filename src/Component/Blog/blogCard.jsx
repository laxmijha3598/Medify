import { Box, Stack, Typography } from "@mui/material";
import styles from './blog.module.css';
import featured from '../../assets/post.png';
import person from '../../assets/blogperson.png';

export default function BlogCard() {
    return (
        <Box className={styles.card}>
            <Box
                component='img'
                src={featured}
                width={1}
                className={styles.featuredImage}
            />
            <Box p={2}>
                <Typography className={styles.date}>
                    Medical | March 31, 2022
                </Typography>
                <Typography component='h3' className={styles.title}>
                    6 Tips To Protect Your Mental Health When You're Sick
                </Typography>
                <Stack direction='row' spacing={1} alignItems='center'>
                    <Box
                        component='img'
                        src={person}
                        className={styles.personImage}
                    />
                    <Typography className={styles.author}>
                        Rebecca Lee
                    </Typography>
                </Stack>
            </Box>
        </Box>
    )
}
