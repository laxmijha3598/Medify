

import { Box, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import offer1 from "../../assets/New folder/image 1.png";
import offer2 from '../../assets/New folder/image2.png';
import styles from "./offer.module.css";

export default function Offers() {
    return (
        <Box py={6}>
            <Container maxWidth='xl'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true
                    }}
                    breakpoints={{
                        767: {
                            slidesPerView: 3
                        }
                    }}
                >
                    <SwiperSlide>
                        <Box component='img' src={offer1} className={styles.offerImage} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box component='img' src={offer2} className={styles.offerImage} />
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <Box component='img' src={offer1} className={styles.offerImage} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box component='img' src={offer2} className={styles.offerImage} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box component='img' src={offer1} className={styles.offerImage} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box component='img' src={offer2} className={styles.offerImage} />
                    </SwiperSlide>
                </Swiper>
            </Container>
        </Box>
    )
}
