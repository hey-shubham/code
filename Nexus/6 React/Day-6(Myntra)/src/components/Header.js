
function Header(){
    return(<>
        <div className="Heading">
        
        <img className="images" src="https://images.indianexpress.com/2021/01/myntra.png" height="80px" width="90px"/>
        <div className="option">
            <button className="button">Men</button>
            <button className="button">Women</button>
            <button className="button">Kids</button>
            <button className="button">Home and Living</button>
            <button className="button">Beauty</button>
            <button className="button">Studio</button>
        </div>

        <input placeholder="Search for products brands and more" className="search"/>

        <div className="Profile">
            <button className="pro">Profiles</button>
            <button className="pro">Wishlist</button>
            <button className="pro">Bag</button>
        </div>
    </div>
    </>
    )
}

export default Header;