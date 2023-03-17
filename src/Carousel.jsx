import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import images from "./images"


const Carousel = () => {
  return (
    <>
      <motion.div className="carousel">
        <motion.div className="inner-carousel">
          {images.map((image, idx) => {
            return (
              <motion.div className="item" key={idx}>
                <img src={image} alt="resort" />
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </>
  )
}

export default Carousel