interface ProjectProps {
    params: {
        slug: string
    }
}

function Project(props: ProjectProps) {
    console.log(props);
    
    return ( <div>Project - {props.params.slug}</div> );
}

export default Project;