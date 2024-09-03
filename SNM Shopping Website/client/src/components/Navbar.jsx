import './navbar.css'
function Navbar(){
    return(
       <>
       <div className="nav-barcontainer">
        <img className="nav-bar-logo" src="https://res.cloudinary.com/muni/image/upload/fl_preserve_transparency/v1725352870/SNM/Circle_Monogram_Logo_2_msqjiq.jpg?_s=public-apps"></img>
        <p className="nav-bar-item">Home</p>
        <p className="nav-bar-item">Cart</p>
        <p className="nav-bar-item">Orders</p>
        <p className="nav-bar-item">Payments</p>
        <p className="nav-bar-item">Favrts</p>
        <p className="nav-bar-item">Top Deals</p>
        <p className="nav-bar-item">New Products</p>
       </div>
       </>
    )
}

export default Navbar;