import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';

const useStyles = makeStyles(()=>({
    background: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + "/Assets/bg.jpg"})`,
    }
}))
const App = ()=>{
    const {background} = useStyles();

    return <div className={background}>
        <CssBaseline/>
    </div>
}

export default App;