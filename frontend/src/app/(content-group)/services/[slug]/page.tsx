interface ServiceProps {
    params: {
        slug: string
    }
    searchParams: {
        lang: string
        city: string
    }
}

function Service(props: ServiceProps) {
    console.log(props);
    
    return ( <div>Service - {props.params.slug} - {props.searchParams.city} - {props.searchParams.lang}</div> );
}

export default Service;