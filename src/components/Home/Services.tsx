"use client";

import { FaCar, FaCarBurst, } from "react-icons/fa6";
import { IoCarSport } from "react-icons/io5";
import { BsCarFrontFill } from "react-icons/bs";

export default function Services() {
  return (
    <>
      <div className="services">
        <div className="base">
          <div className="service-item">
            <FaCar />
            <p>Serviço 1</p>
          </div>
          <div className="service-item">
            <FaCarBurst />
            <p>Serviço 2</p>
          </div>
          <div className="service-item">
            <IoCarSport />
            <p>Serviço 3</p>
          </div>
          <div className="service-item">
            <BsCarFrontFill />
            <p>Serviço 4</p>
          </div>
        </div>
      </div>
    </>
  );
}
