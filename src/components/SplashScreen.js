import React, { useEffect } from "react"
import logo from "./logo.png"
import {motion} from "framer-motion"
const SplashScreen = () => {


  return (
    <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    transition={{ delay: 1.5, duration: 0.5 }} data-theme="perplexity" className="flex w-full flex-col h-screen gap-3 justify-center items-center">
    <img src={logo} className="w-48" alt="" />
    <span className="loading loading-ball"></span>

</motion.div>
  )
}

export default SplashScreen
