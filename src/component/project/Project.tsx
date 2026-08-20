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
                data.filter(element => element.id == id).map(element =>
                    {
                        let image = "/image/"+element.image
                        return(
                            <div className='project_header'>
                                <img src={image} />
                                <div>
                                    <h1>{element.title}</h1>
                                    <hr/>
                                    <p>{element.description}</p>
                                </div>
                            </div>
                        )
                    }
                )
            }
        </main>
    )
}
export default Project
