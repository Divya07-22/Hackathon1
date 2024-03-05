import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider';
const images = [
    { url: "https://www.metrohospitals.com/images/Covid-19-1.jpg" },
    { url: "https://psrihospital.com/old/wp-content/uploads/2019/01/what-are-the-symptoms-of-a-heart-attack-in-women-and-men.jpg" },
    { url: "https://blog.rehabselect.net/hs-fs/hubfs/cardiac%20phases.png?width=756&name=cardiac%20phases.png" },
    { url: "https://cardiologysurgeryhospitalindia.weebly.com/uploads/2/4/0/5/24050031/header_images/1380876194.jpg" },
  ];
function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        
            <div className="slide">
                <SimpleImageSlider
                    width={"100%"}
                    height={700}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                />
             </div>
        

      </div>
      {/* Engaging Image or Video Representing HeartCare's Commitment to Cardiovascular Health */}
    </section>
  );
}

export default HeroSection;
