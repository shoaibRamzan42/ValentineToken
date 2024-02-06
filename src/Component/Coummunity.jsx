import React from 'react'
import img from '../assets/valen2.gif'
import { motion } from 'framer-motion'

const Community = () => {
    return (
  
        <div className='bg-transparent relative' id='invest'>
    <div className='max-w-[1200px] mx-auto pb-[60px] sm:pb-[100px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-[40px] md:mt-[100px] gap-[30px] items-center'>
            <motion.div
                whileInView={{ scale: [0.7, 1], opacity: [0, 1] }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
                initial='hidden'
                style={{ opacity: 0 }}
                viewport={{ once: true }}
                className='w-[80%] md:w-[85%] mx-auto md:mx-0'
            >
                <div className='relative'>
                    <img src={img} alt='img' className='object-contain bg-transparent relative ml-[25px] md:ml-0 rounded-[20px] w-[80%]' />
                </div>
            </motion.div>
            <div className='flex flex-col md:flex-row gap-4 items-center md:items-start w-full md:w-[80%]'>
                <div className='space-y-4 md:space-y-8 w-full'>
                    <div>
                        <div>
                            <h1 className='text-white text-[30px] md:text-[45px] uppercase font-extrabold text-center md:text-left'>
                                ValentineMyro Gameplay
                            </h1>
                        </div>
                        <p className='text-white text-[16px] pt-[10px] text-center md:text-left'>
                            ValentineMyro also offers an engaging Play2earn gameplay experience. Players can participate in various activities within the game to earn rewards in the form of the meme coin. The specific gameplay mechanics and activities can vary, but the goal is to create a fun and interactive environment where players can enjoy the world of ValentineMyro while earning rewards. It's all about combining the excitement of gaming with the potential of crypto rewards. So get ready to dive into the game and have a blast with ValentineMyro. 🎮🚀
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    )
}

export default Community;