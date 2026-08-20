import './Landing.css'
import hero from '../../assets/hero.png'
import {useEffect, useState} from "react";
import ProjectCard from "../project_card/ProjectCard.tsx";

const Landing = () => {
    const [data,setData] = useState<any[]>([])

    useEffect(() => {
        fetch('/db/projects.json')
            .then((response) => response.json())
            .then((data) => setData(data))
    },[])

    return (
        <main>
            <div id='header_container'>
                <img src={hero}></img>
                <div id='header_text'>
                    <h1>Hola, soy Manuxs</h1>
                    <p>Soy un estudiante y programador de 20 años que habla con pendejos todos
                        los días y ahora trata de conseguir chamba por favor amigo te chupare el pne</p>
                </div>
            </div>
            <div id='exp_container'>
                <h3>Cuento con experiencia en:</h3>
                <div id='exp_items'>
                    <div>
                        <img src={hero} width='100px'/>
                        <h2>Java</h2>
                    </div>
                    <div>
                        <img src="/image/hero.png" width='100px'/>
                        <h2>Java</h2>
                    </div>
                    <div>
                        <img src={hero} width='100px'/>
                        <h2>Java</h2>
                    </div>
                </div>
            </div>
            <div id='projects_container'>
                <h2>Proyectos en los que he trabajado</h2>
                <div id='project_items' >
                    {
                        data.map((project, key) => {
                            return(
                                <ProjectCard
                                    key={key}
                                    id={project.id}
                                    title={project.title}
                                    description={project.description}
                                    image={project.image}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )
}
export default Landing
