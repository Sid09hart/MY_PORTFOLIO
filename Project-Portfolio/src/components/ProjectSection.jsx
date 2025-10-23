import { ArrowRight, ExternalLink } from 'lucide-react'
import React from 'react'

const projects = [
    {
        id: 1,
        title: " ResQMart - Full-Stack MERN Marketplace",
        description: "Developed a full-stack e-commerce platform to reduce local food waste, connecting sellers with buyers for expiring goods and managing real-time inventory.",
        image: "/projects/ResQMart.png",
        tags: ["MERN Stack", "Geolocation", "Cloudinary", "Leaflet.js", "Jwt"],
        projectUrl: "https://res-q-mart.vercel.app/"
    },
   
   
   
    {
        id: 2,
        title: "SENSAI : AI-Powered Career Coach",
        description: "Developed a full-stack AI-powered career guidance platform that provides personalizedcareer recommendations, AI-generated resumes/cover letters, industry insights, and mock interview simulations.Integrated Gemini API with Next.js and Node.js to deliver real-time, data-driven guidance,secure authentication, and PDF generation for a seamless user experience",
        image: "/projects/CareerCoach.png",
        tags: ["Next.js", "TailwindCSS", "Shadcn UI", "Node.js", "Inngest", "Gemini API", "Clerk Auth" ," MongoDB"],
        projectUrl: "https://sensai-ai-powered-career-coach-kappa.vercel.app/"
    },

     {
        id: 3,
        title: "FixMyRoad : Road Issue Reporting App",
        description: " Developed a full-stack civic issue reporting tool with real-time pothole validation and imageuploads. Integrated Cloudinary for optimized image storage and retrieval, improving load times by40%.- Authenticated users with JWT, validated reports via geolocation, and enabled real-timeadmin moderation.",
        image: "/projects/FixMyRoad.png",
        tags: ["MERN Stack", "Geolocation", "Cloudinary"],
        projectUrl: "https://fix-my-road-decentralize-civic-issu.vercel.app/"
    },

     {
        id: 4,
        title: "BusyCallHandeling : Call Collision Detection App",
        description: " Developed a full-stack civic issue reporting tool with real-time pothole validation and imageuploads.- Integrated Cloudinary for optimized image storage and retrieval, improving load times by40%.- Authenticated users with JWT, validated reports via geolocation, and enabled real-timeadmin moderation.",
        image: "/projects/BusyCallCollision.png",
        tags: ["Node.js", "React", "Socket.IO", "Redis"],
        projectUrl: "https://busy-call-collision-handling.vercel.app/"
    }
]
const ProjectSection = () => {
  return (
   <section id='projects' className='py-24 px-4 relative '>
    <div className='container mx-auto  max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'> {" "}Featured 
            <span className='text-primary'>Projects</span>
        </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
            Here are some of the projects I've worked on recently. 
            Click on any project to learn more about it.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
           { projects.map((project,key) =>(
            <div key={key} className='group bg-card rounded-lg overflow-hidden shadow-xs card-hover '>
               
                <div className='h-48 overflow-hidden '>
                    <img src={project.image} alt={project.title}
                     className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                </div>

            <div className='p-6'>
            <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tags.map((tag)=>(
                        <span className='px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground '>
                            {tag}
                        </span>
                    ))}
            </div>
          
            <h3 className='text-xl font-semibold mb-1'>{project.title}</h3>
            <p className='text-muted-foreground text-sm mb-4 '>{project.description}</p>
            <div className='flex justify-between items-center'>
                <div className='flex space-x-3'>
                    <a herf={project.projectUrl}
                        target='_blank'
                     className='text-foreground/80 hover:text-primary transition-colors duration-300'>
                        {" "}
                        <ExternalLink size={20}/>
                    </a>
                     
                   </div>
                    </div>
                </div>
             </div>
            ))}
        </div>
        <div className='text-center mt-12'>
            <a href="https://github.com/Sid09hart"   target='_blank' className='cosmic-button w-fit flex items-center gap-2 mx-auto'>
              
                Check My Github <ArrowRight size={16}/>
            </a>
        </div>
    </div>
   </section>
  )
}

export default ProjectSection
