import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";  //navigate

export default function AddShow({setShows}) {
    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [seasons, setSeasons] = useState('');
    const navigate = useNavigate(); //navigate
    const token = localStorage.getItem("token") //get our JWT local Storage

    useEffect(() => {
        if(!token) {
            navigate('/login')
        }
    }, [])
    const handleAddShow = (e) => {
        e.preventDefault();


        //console.log(e.target.value())
        fetch("https://tv-shows-api-cs.web.app/shows", {
         method:"POST",
         headers: {"Content-Type": "application/json",
        "Authorization": token},   //added this line for token 
         body: JSON.stringify({title, poster, seasons})
    })
        .then(resp => resp.json())
        .then( data => {
            if(data.message) {
                alert(data.message)
                return
            }
            setShows(data);
            navigate("/")
        })
        .catch(alert)
    }
    
    return(
        <>
            <h2>Add show</h2>
            <form onSubmit={handleAddShow}>
                <label htmlFor="title">Title
                    <input
                        type="text"
                        value={title}
                        onChange={ (e) => {setTitle(e.target.value)}}/>
                </label>
                <br />
                <label htmlFor="poster">Poster
                <input
                    type="text"
                    value={poster}
                    onChange={ (e) => {setPoster(e.target.value)}} />
                </label>
                <br/>
                <label htmlFor="seasons"> Seasons
                    <input 
                    type='text'
                    value={seasons}
                    onChange={ (e) => {setSeasons(e.target.value)}} />
                </label>
                <br/>
                <input type="submit" value="Add show" />
            </form>
        </>
    )
}