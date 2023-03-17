import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import images from "./images"


const Carousel = () => {
  const [width, setWidth] = useState(0)

  const carousel = useRef()

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <>
      <motion.div className="carousel">
        <motion.div ref={carousel} drag="x" dragConstraints={{ right: 1, left: -width}} className="inner-carousel">
          {images.map((image) => {
            return (
              <motion.div className="item" key={image}>
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