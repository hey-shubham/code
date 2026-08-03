import { useEffect, useState } from "react";

function FetchAPI(){

    const [Profile,setProfile] = useState([]);
    const [numberofProfile,setnumberofProfile] = useState("");
    const [username, setUsername] = useState("");

    async function generateProfile(count) {

        const random = Math.floor(Math.random()*100000+1);
        const response = await fetch(
            `https://api.github.com/users?since=${random}&per_page=${count}`,
            {
                headers: {
                    Authorization:  `Bearer ${process.env.GITHUB_TOKEN}`
                }
            }
        );

    const data = await response.json();

        setProfile(data);
    }

    async function searchUser() {

    if (username.trim() === "") {
        alert("Enter Username");
        return;
    }

    const response = await fetch(
        `https://api.github.com/users/${username}`,
        {
        headers: {
            Authorization:  `Bearer ${process.env.GITHUB_TOKEN}`
            }
        }
    );

    if (!response.ok) {
        alert("User Not Found");
        return;
    }

    const data = await response.json();

    // Single object ko array bana diya taki Profile.map() chale
    setProfile([data]);
}

    useEffect(()=>{
        generateProfile(10);
    },[])


    return(
        <>
        <div className="btns">
            <input type="text" placeholder="Search here" value={numberofProfile} onChange={(e)=>setnumberofProfile(e.target.value)}></input>
            <button onClick={()=>generateProfile(Number(numberofProfile))}>Search Profiles</button>

             <input type="text" placeholder="Github Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
              <button onClick={searchUser}>Search User</button>
        </div>    

            <div className="profiles">
                {console.log(Profile)}
                { Profile.map((value)=> (
                        <div key={value.id} className="cards">
                        <img src={value.avatar_url}></img>
                        <h2>{value.login}</h2>
                        <a href={value.html_url} target="_blank">Profiles</a>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default FetchAPI;