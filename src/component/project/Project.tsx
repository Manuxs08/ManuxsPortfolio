import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './Project.css'
import DotField from "../DotField.tsx";

const Project = () => {
    const {id} = useParams();

    const [data,setData] = useState<any[]>([])

    useEffect(() => {
        fetch('/db/projects.json')
            .then((response) => response.json())
            .then((data) => setData(data))
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
                {
                    data.filter(element => element.id == id).map((element,key) =>
                        {
                            let image = "/image/"+element.image
                            return(
                                <div key={key}>
                                    <div className='project_header'>
                                        <img className='anim_1' loading='lazy' alt={element.image} src={image} />
                                        <div className='h-full py-10 anim_2'>
                                            <h1 className='text-3xl font-bold' >{element.title}</h1>
                                            <hr className='mb-6 mt-2' />
                                            <p className='text-2xl' >{element.description}</p>
                                        </div>
                                    </div>
                                    {
                                        element.videos.length > 0 &&

                                        <div className='project_videos_container'>
                                            <h1 className='text-4xl font-bold mb-10 anim_2' >Videos</h1>
                                            <div className='project_videos anim_3'>
                                                {
                                                    element.videos.map((video: string, key: number) => {
                                                        let video_src = "/video/"+video
                                                        return(
                                                            <video key={key} loop autoPlay muted src={video_src}/>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    }
                                </div>
                            )
                        }
                    )
                }
            </main>
        </>
    )
}
export default Project
