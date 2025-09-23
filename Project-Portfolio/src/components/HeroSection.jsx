import { ArrowDown } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { cn } from '../lib/utils';

const HeroSection = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
            const handleScrolled = ()=>{
                setIsScrolled(window.scrollY>100);
            }
    
            window.addEventListener("scroll", handleScrolled);
    
            return ()=>{
                window.removeEventListener("scroll", handleScrolled);
            }
        }, []);  
  return (
    <section id='hero' className='relative min-h-screen flex flex-col items-center justify-center px-4'
    >
        <div className='container max-w-4xl mx-auto text-center z-10'>

        <div className='space-y-6'>
            <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                <span className='opacity-0 animate-fade-in'>Hi, I'm</span>
                <span className='text-primary opacity-0 animate-fade-in-delay1'>{" "}Siddharth</span>
                <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay2'>{" "}Negi</span>
            </h1>
            <p className='text-lg md:text-xl text-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay3'
            >I’m a Full-Stack Developer passionate about creating modern,
             responsive, and scalable web applications. Skilled in the
              MERN stack and tools like Tailwind CSS and Socket.IO, I’ve built projects ranging from real-time 
              communication systems to AI-powered platforms. With a strong foundation in problem-solving and a
               drive to keep learning, I’m excited to contribute
                to impactful projects and grow as a developer."</p>

        <div className='opacity-0 animate-fade-in-delay4'>
            <a href="#projects" 
            className='cosmic-button'>
                View My Work
            </a>
        </div>
    </div>   
     </div>
     <div className={cn('absolute bottom-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce',
        isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
     )}>
     <span className='text-sm text-muted-foreground mb-2 font-bold'> Scroll</span>
     <ArrowDown className='h-5 w-5 text-primary'/>

     </div>
    </section>
);
}

export default HeroSection
