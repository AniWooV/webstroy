interface ProjectProps {
    params: {
        slug: string
    }
}

function Project({params}: ProjectProps) {
    return ( <div>Project - {params.slug}</div> );
}

export default Project;