import './Landing.css'
import manuxs from '/image/manuxs.png'
import {useEffect, useState} from "react";
import ProjectCard from "../project_card/ProjectCard.tsx";
import {TypeAnimation} from "react-type-animation";
import DotField from "../DotField.tsx"

const Landing = () => {
    const [projects_data,setProjectData] = useState<any[]>([])
    const [exp_data,setExpData] = useState<any[]>([])

    useEffect(() => {
        fetch('/db/projects.json')
            .then((response) => response.json())
            .then((data) => setProjectData(data))

        fetch('/db/experience.json')
            .then((response) => response.json())
            .then((data) => setExpData(data))
    },[])

    return (
        <>
            <div style={{ zIndex:"-1", width: '100%', height: '100%', position: 'fixed', top:'0' }}>
                <DotField
                    dotRadius={3}
                    dotSpacing={18}
                    cursorRadius={200}
                    cursorForce={0.1}
                    bulgeOnly
                    bulgeStrength={100}
                    glowRadius={0}
                    sparkle={true}
                    waveAmplitude={1}
                    gradientFrom="#5C160D"
                    gradientTo="#5C0D41"
                    glowColor="#1C0D06"
                />
            </div>
            <main>
                <div id='header_container'>
                    <img src={manuxs}></img>
                    <div id='header_text'>
                        <h1 className='font-bold text-4xl mb-6'>
                            <TypeAnimation
                                sequence={[
                                    "Hola, soy Manuxs"
                                ]}
                            />
                        </h1>
                        <p className='text-1xl' >Soy un desarrollador activo de Mods y Plugins de Minecraft con bastante experiencia en programación y administración de servidores. Dispuesto a cumplir cualquier trabajo que se me pida realizar de la mejor forma.</p>
                    </div>
                </div>
                <div id='exp_container'>
                    <h2 className='mb-8 text-2xl font-bold' >Cuento con experiencia en:</h2>
                    <div id='exp_items'>
                        {
                            exp_data.map((exp,key) => {
                                let image = "/image/"+exp.image
                                return(
                                    <div className='exp_item' key={key}>
                                        <img className='mb-4' src={image} width='100px' />
                                        <h2>{exp.name}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div id='projects_container'>
                    <h2 className='text-2xl font-bold' >Proyectos en los que he trabajado</h2>
                    <div id='project_items' >
                        {
                            projects_data.map((project, key) => {
                                return(
                                    <ProjectCard
                                        key={key}
                                        id={project.id}
                                        title={project.title}
                                        description={project.description}
                                        image={project.image}
                                        tags={project.tags}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </main>
        </>
    )
}
export default Landing
