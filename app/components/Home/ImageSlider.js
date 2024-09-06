import React from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import One from '@/public/images/1.jpg'
import Two from '@/public/images/2.jpg'
import Three from '@/public/images/3.jpg'
import Four from '@/public/images/4.jpg'
import Five from '@/public/images/5.jpg'
import { Divide } from 'lucide-react';

const ImageSlider = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    slides: { origin: "center", perView: 3, spacing: 20,    },
   
  }, [
    (slider) => {
      let timeout;
      let mouseOver = false;

      function clearNextTimeout() {
        clearTimeout(timeout);
      }

      function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
          slider.next();
        }, 1000);
      }

      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => {
          mouseOver = true;
          clearNextTimeout();
        });
        slider.container.addEventListener("mouseout", () => {
          mouseOver = false;
          nextTimeout();
        });
        nextTimeout();
      });

      slider.on("dragStarted", clearNextTimeout);
      slider.on("animationEnded", nextTimeout);
      slider.on("updated", nextTimeout);
    },
  ]);

  return (
  
     <div ref={sliderRef} className="keen-slider  pt-10 mt-5  flex w-full flex-row justify-center overflow-auto items-center">
      
     
      <div className="keen-slider__slide number-slide3 shadow-xl  justify-center flex items-center" >
        <Image src={Three} alt= 'first brand' height={200} width={420} objectFit='contain'/>
        
      </div>
      <div className="keen-slider__slide number-slide3 shadow-xl   justify-center flex items-center" >
        <Image src={Five} alt= 'first brand' height={200} width={420} objectFit='contain'/>
        
      </div>
      <div className="keen-slider__slide number-slide1 shadow-xl  justify-center flex items-center" >
        <Image src={One} alt= 'first brand' height={200} width={420} objectFit='contain'/>
        
      </div>
      <div className="keen-slider__slide number-slide2 shadow-xl  justify-center flex items-center">
        <Image src={Two} alt= 'first brand' height={200} width={420} objectFit='contain'/>
       
      </div>
      <div className="keen-slider__slide number-slide2 shadow-xl  justify-center flex items-center" >
        <Image src={Four} alt= 'first brand' height={200} width={420} objectFit='contain'/>
        
      </div>
      
      
    </div>
   
  );
};

export default ImageSlider;




