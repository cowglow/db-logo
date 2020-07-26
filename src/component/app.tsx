import React from 'react';
import DbsLogo from "./dbs-logo";
import {colors} from "../lib/colors";


const App = () => {
    const [props, setProps] = React.useState({
        d: colors[0],
        b: colors[1],
        background: colors[3],
        border: colors[0]
    })

    React.useEffect(() => {
        const interval = setInterval(() => {
            setProps({
                d: colors[Math.floor(Math.random() * colors.length)],
                b: colors[Math.floor(Math.random() * colors.length)],
                background: colors[Math.floor(Math.random() * colors.length)],
                border: colors[Math.floor(Math.random() * colors.length)]
            })
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])


    return (
        <DbsLogo dColor={props.d} bColor={props.b} bgColor={props.background} border={props.border}/>
    );
}

export default App;
