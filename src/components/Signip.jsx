import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Signup({setUser}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const navigate = useNavigate()

    const handleSignUp = (e) => {
        e.preventDefault()
        fetch("https://tv-shows-api-cs.web.app/signup",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({email, password})
        })
            .then(resp => resp.json())
            .then(data => {
                if(data.message) {
                    alert(data.message)
                    return
                }
                setUser(data)
                navigate('/')
            })
            .catch(alert)
    

    }
    return (
        <>
            <h2>Sign up</h2>
            <form onSubmit={handleSignUp}>
                <label htmlFor="email"> Email
                    <input 
                    type= "email"
                    value ={email}
                    onChange = {(e) => {setEmail(e.target.value)}}/>
                </label>

                <label htmlFor = "password"> Password
                    <input 
                    type = "password"
                    value = {password}
                    onChange = {(e) => {setPassword(e.target.value)}}/>
                </label>
                <input type="submit" value="add user" />
            </form>
        </>

    )

}
       
