import React from "react";
import './styles.scss'

export const App: React.FC = () => {

    const [count, setCount] = React.useState(0)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount((prev) => prev + 1);
                setCount((prev) => prev + 1);
                setCount((prev) => prev + 1);
            }}>Push me</button>
        </div>
    )
}