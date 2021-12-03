import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css"
import "swiper/css/zoom"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import Swiper core and required modules
import SwiperCore, {
    Zoom, EffectFade, Autoplay, Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Zoom, EffectFade, Autoplay, Pagination, Navigation]);

const Slide = ({images}) => {
    return (
        <>
            <Swiper loop={true} slidesPerView={'auto'} spaceBetween={10} autoHeight={true} zoom={true} effect={'fade'} centeredSlides={true} autoplay={{
                "delay": 5000,
                "disableOnInteraction": true
            }} pagination={{
                "dynamicBullets": true,
                "clickable": true
            }} navigation={true} className="mySwiper bg-black">
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="swiper-zoom-container">
                            <img src={image} alt="test" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Slide;