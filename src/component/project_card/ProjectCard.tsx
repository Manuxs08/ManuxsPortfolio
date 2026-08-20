import './ProjectCard.css'
import {Link} from "react-router-dom";

const ProjectCard = (props: any) => {
    let image = "/image/"+props.image
    let title = props.title
    let description = props.description
    let id: string = props.id
    let project_link = "/project/"+id
    return (
        <div className='card'>
            <Link to={project_link}>
                <img width='300px' src={image} />
            </Link>
            <div className='desc_container'>
                <div>{title}</div>
                <hr/>
                <div>{description}</div>
            </div>
        </div>
    )
}
export default ProjectCard
