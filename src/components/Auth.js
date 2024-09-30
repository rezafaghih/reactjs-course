import { useContext } from "react"
import { ThemeContext } from "../App"

export const Auth = ()=>{
    const {theme, setTheme} = useContext(ThemeContext)
    var textColor = "";

    theme=="light"?textColor="#fff":textColor="#000"

    const changeTheme = ()=>{
        theme=="light"?setTheme("dark"):setTheme("light")
    }

    return (
        <div>
            <h1 style = {{color:textColor}} className="Auth-title">this is auth page</h1>
            <button onClick={changeTheme}>Change website theme</button>
        </div>
    )
}