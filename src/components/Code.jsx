import { Box } from '@mui/material';
import Editor from './Editor.jsx';
import { useContext } from 'react';
import { DataContext } from '../context/DataProvider.jsx';

const Code = ()=>{

    const {html,
        setHtml,
        css,
        setCss,
        js,
        setJs} = useContext(DataContext) ;

    return(
        // <div>Middle Component</div>
        <Box sx={{display:"flex",backgroundColor:"#060606",height:"51vh"}}> {/* you can also use React.Fragment */}
        <Editor heading="HTML" icon=" / " color="#FF3C41" value={html} onChange={setHtml}/>
        <Editor heading="CSS" icon=" * " color="#0EBEFF" value={css} onChange={setCss}/>
        <Editor heading="JS" icon="{ }" color="#FCD000" value={js} onChange={setJs}/>
        </Box>
    )
}

export default Code;