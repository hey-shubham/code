function Card(props){
    return(
        <div className="card" style={{border:"3px Solid black",padding:"2px"}}>
            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRMRprY3uhoDD__r_wQ2A3snO-FzZPsYQKmaG-2JH2S-_ntZlwwl9t2gZ6_llATmDDdylCfd1O7gwIYkTzWahIiKb4PvKRyoLCF0h5IJZUU" height="200px" width="200px" />
            <div style={{textAlign:"center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop Now</h2>
                <h2>Price: {props.price}</h2>
            </div>
        </div>
    )
}

export default Card;