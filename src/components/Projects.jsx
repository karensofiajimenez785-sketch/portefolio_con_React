import {Screen} from "./Screen"
import { ProjectCard } from "./ProjectCard";

const projects = [
    {
        id: 1,
        title: "Mi Portafolio",
        descrption: "Sitio personal hecho con React y Vite",
        tags:["React", "Vite", "css"]
    },
    {
        id: 2,
        title: "Lista de tareas",
        descrption: "Aplicacion para organizar pendientes",
        tags:["JavaScript", "HTML"]
    },
    {
        id: 3,
        title: "Calculadora",
        descrption: "Calculadora basica con diseño movil",
        tags:["JavaScript", "css"]
    },
]
export const Projects = () => {
return (
    <Screen title ="Mis proyectos">
<div className="card-list">
{projects.map(projects =>(
    <ProjectCard
    key ={projects.id}
    title= {projects.title}
    descrption ={projects.descrption}
    tags = {projects.tags}
    />
   ))} 
</div>
    </Screen>
  )
}
