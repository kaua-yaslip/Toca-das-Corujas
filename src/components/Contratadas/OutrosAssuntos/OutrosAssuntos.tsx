"use client";

import pagesData from "@/data/pagesData";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OutrosAssuntos({ title }: { title: string }) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    Infinity: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],    
  };

  return (
    <div className="outros-assuntos">
      <h2>Outros assuntos relacionados a {title}</h2>
      <Slider {...settings} className="outros-assuntos-slider">
        {pagesData.map((page) => (
          <div key={page.contratada} className="outros-assuntos-item">
            <a href={`/${page.contratada}`}>
              <Image
                className=""
                src={`/imgs-contratadas/${page.contratada}-01.webp`}
                alt={page.title}
                width={300}
                height={200}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
              <p>{page.palavra}</p>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}
