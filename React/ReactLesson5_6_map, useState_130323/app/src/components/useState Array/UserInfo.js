
function UserInfo(props){

    const {name, salary} = props
    
    return(
        <div>
            <h2>{name}</h2>
            <p>{salary}</p>
        </div>
    )
}


export default UserInfo