import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import img1 from '../../assets/doctors/doctor1.png';
import img2 from '../../assets/doctors/doctor2.png';
import img3 from '../../assets/doctors/doctor3.png';
import img4 from '../../assets/doctors/doctor4.png';
import img5 from '../../assets/doctors/dcotor5.png';
import SpecialistCard from "./specialistCard";
import { Autoplay, Pagination } from 'swiper/modules';
import styles from './specialist.module.css';

export default function Specialists() {
    const specialist_data = [
        { img: img1, title: 'Dr. Lesley Hull', designation: 'Medicine' },
        { img: img2, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
        { img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
        { img: img4, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
        { img: img5, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' },
        { img: img1, title: 'Dr. Lesley Hull', designation: 'Medicine' },
        { img: img2, title: 'Dr. Ahmad Khan', designation: 'Neurologist' },
        { img: img3, title: 'Dr. Heena Sachdeva', designation: 'Orthopadics' },
        { img: img4, title: 'Dr. Ankur Sharma', designation: 'Medicine' },
        { img: img5, title: 'Dr. Ahmad Stevens', designation: 'Neurologist' }
    ];

    return (
        <Box py={4} id="find-doctors" className={styles.container}>
            <Typography variant="h2" textAlign='center' mb={3} px={2} className={styles.title}>
                Our Medical Specialist
            </Typography>
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                pagination={{
                    clickable: true
                }}
                breakpoints={{
                    767: {
                        slidesPerView: 4
                    }
                }}
                className={styles.swiper}
            >
                {specialist_data.map((doc, index) => (
                    <SwiperSlide key={index}>
                        <SpecialistCard
                            img={doc.img}
                            title={doc.title}
                            designation={doc.designation}
                            className={styles.specialistCard}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}
