import { useState } from 'react'

const Home = () => {

    const [text, setText] = useState("")
    const [error, setError] = useState("")

    const handleOnClick = (e) => {
        e.preventDefault()
        const url = 'http://localhost:8888'
        fetch(`${url}/`)
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            setText(result.message)
            setError("")
            setTimeout(() => {
                setText("")
                setError("")
            }, 3000)
        })
        .catch((err) => {
            setError("Unable to fetch text. Try again later.")
            setText("")
            setTimeout(() => {
                setText("")
                setError("")
            }, 3000)
        })
    }

    return (
        <div className='main-container'>
            <h3>Click the button below to display a text from the backend</h3>
            <button onClick={handleOnClick}>Click Me!</button>
            { text && <div className="display-container"><h2>{text}</h2></div>}
            { error && <div className="display-container"><h2>{error}</h2></div>}
        </div>
    )
}

export default Home