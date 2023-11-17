interface ServiceProps {
    params: {
        slug: string
    }
}

function Service({params}: ServiceProps) {
    return ( <div>Service - {params.slug}</div> );
}

export default Service;