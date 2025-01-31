function ElementList(props){

    const {title, image} = props.data

    return(
        <li>
            <img src={image} alt={title}/>
        </li>
    )
}

export default ElementList