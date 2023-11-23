function Country(props: any) {
    console.log(props);
    
    return ( <div>{props.params["country-info"]}</div> );
}

export default Country;