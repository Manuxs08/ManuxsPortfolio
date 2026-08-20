import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import './Project.css'

const Project = () => {
    const {id} = useParams();

    const [data,setData] = useState<any[]>([])

    useEffect(() => {
        fetch('/db/projects.json')
            .then((response) => response.json())
            .then((data) => setData(data))
    },[])

    return (
        <main>
            {
                data.filter(element => element.id == id).map((element,key) =>
                    {
                        let image = "/image/"+element.image
                        return(
                            <div key={key}>
                                <div className='project_header'>
                                    <img src={image} />
                                    <div>
                                        <h1>{element.title}</h1>
                                        <hr/>
                                        <p>{element.description}</p>
                                    </div>
                                </div>
                                {
                                    element.videos.length > 0 &&

                                    <div className='project_videos_container'>
                                        <h1>Videos</h1>
                                        <div className='project_videos'>
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
    )
}
export default Project
