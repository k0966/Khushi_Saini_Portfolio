import { motion } from 'framer-motion';

function ProjectCard({ title, description, image, github, demo }) {
  return (
     <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
      className="bg-white dark:bg-gray-800 rounded shadow p-4 flex flex-col"
    >

    
    <div className="bg-white dark:bg-gray-800 rounded shadow p-4 flex flex-col">
      <img src={image} alt={title} className="h-40 object-cover rounded mb-4" />
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="mb-4">{description}</p>
      <div className="mt-auto flex gap-2">
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
        <a href={demo} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">Demo</a>
      </div>
    </div>

     </motion.div>
  );
}
export default ProjectCard;