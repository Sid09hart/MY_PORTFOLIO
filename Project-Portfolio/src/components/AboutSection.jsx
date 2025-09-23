import React from 'react'
import { Briefcase, Code, User } from 'lucide-react'

const AboutSection = () => {
  return (
    <section id='about'className='relative py-24 px-4'>
    {" "}
    <div className='container mx-auto max-w-5xl'>
      <h2 className='text-3xl md:text-4xl font-bold text-center mb-12'>
        About     {" "}
        <span className='text-primary'>Me</span>
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        <div className='space-y-6 '>
        <h3 className='text-2xl font-semibold'>Passionate Web Developer </h3>
        <p className='text-muted-foreground'
        >with over 3 year of experience in web development, I Specialize 
          in creating dynamic and responsive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).
        </p>
        <p className='text-muted-foreground'
        >I'm passsionate about creating elegant solution to complex problems and I'm constantly learning new technologies and techniques to stay at the forefront 
          of the industry.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 pt-4 justify-center'>
          <a href="#contact" className='cosmic-button'>
            {" "}
            Get In Touch
          </a>

           <a href="https://drive.google.com/file/d/1DOWZDYErR-bTronMT84YT2fXhGYMb9EF/view?usp=drive_link" className='px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300' target='__blank'>
            {" "}
            Download CV
          </a>

        </div>
        </div>
        <div className='grid grid-cols-1 gap-6'>
          <div className='gradient-border p-6 card-hover'>
            <div className='flex items-start gap-4'>
              <div className='p-3 rounded-full bg-primary/10'>
              <Code className='h-6 w-6 text-primary'/>
              </div>
              <div className='text-left'>
                <h4 className='font-semibold text-lg'>Web Development</h4>
                <p className='text-muted-foreground text-sm'>
                  Creating responsive websites and web applications with modern frameworks.
                </p>
              </div>
            </div>
          </div>
          
          <div className='gradient-border p-6 card-hover'>
             <div className='flex items-start gap-4'>
              <div className='p-3 rounded-full bg-primary/10'>
              <User className='h-6 w-6 text-primary'/>
              </div>
               <div className='text-left'>
                <h4 className='font-semibold text-lg'>UI/UX Design</h4>
                <p className='text-muted-foreground text-sm'>
                  Designing intuitive user interfaces and experiences for web applications.
                </p>
              </div>
            </div>
          </div>
          <div className='gradient-border p-6 card-hover'>
             <div className='flex items-start gap-4'>
              <div className='p-3 rounded-full bg-primary/10'>
              <Briefcase className='h-6 w-6 text-primary'/>
              </div>
               <div className='text-left'>
                <h4 className='font-semibold text-lg'>Problem Solving</h4>
                <p className='text-muted-foreground text-sm'>
Ability to break down complex problems and implement efficient, logical solutions through coding and debugging.                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default AboutSection
