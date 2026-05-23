import checkMark from "../assets/svg/check-mark.svg"

const MoreText = () =>{
    return(
        <div>
            <div style={{display:"flex",alignItems:"center",marginTop:"-9px",borderBottom:"2px solid #111",width:"100%"}}>
                <img style={{marginLeft:"30px"}} src={checkMark} alt="" />
                <p style={{marginTop:"20px",marginLeft:"5px",fontSize:"15px"}}>My List</p>
            </div>

            <div style={{marginLeft:"30px",marginTop:"20px",fontSize:"15px"}}>
                <p>App Settings</p>
                <p>Account</p>
                <p>Help</p>
                <p>Sign Out</p>
            </div>
        </div>
    )
}


export default MoreText