import './ProjectCard.css'
import {Link} from "react-router-dom";

const ProjectCard = (props: any) => {
    let image = "/image/"+props.image
    let title = props.title
    let description = props.description
    let id: string = props.id
    let project_link = "/project/"+id
    let tags: Array<string> = props.tags
    return (
        <div className='card'>
            <Link onClick={() => window.scrollTo(0,0)} className='image_container' to={project_link}>
                <img loading="lazy" alt={props.image} width='300px' src={image} />
                <div>Click para más info</div>
            </Link>
            <div className='desc_container'>
                <div className='title' >{title}</div>
                <hr className='mb-5' />
                <div className='description' >{description}</div>
                {
                    tags.length > 0 &&
                    <div className='tag_section'>
                        <hr className='mb-2' />
                        <div className='tag_container'>
                            {
                                tags.map((tag, key) => (
                                    <div key={key}>{tag}</div>
                                ))
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
export default ProjectCard
