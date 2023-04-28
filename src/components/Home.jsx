import { useEffect } from "react"

export default function Home({shows, setShows}) {

    useEffect(()=> {
        fetch('https://tv-shows-api-cs.web.app/shows') //first troublehoot
        .then(resp => resp.json())
        .then(setShows)
        .catch(alert)
    }, []) 

    //console.log(shows) second troubleshoot
    return (
        <>
        <h1 className="main-container">Home</h1>
            <div className="main-container">
                                                                
                {!shows
                ? "Loading..."
                :shows.map(
                    (show) => (  //if () for the function dont use return, if {} use return
                        <div key={show.id} className="show-container button-effect">
                            <img src={show.poster} alt="" />
                            <h2>{show.title}</h2>
                            <p>Seasons: {show.seasons}</p>
                        </div>
                    )
                ) 
            }
            </div>
        </>
    )
}