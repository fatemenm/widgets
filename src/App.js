import React, {useState} from 'react'
import Accordion from './components/Accordion';
import Search from './components/Search';
import DropDown from './components/DropDown'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'

const options = [

    {
        label: 'the color red',
        value : 'red'
    },
    {
        label: 'the color blue',
        value : 'blue'
    },
    {
        label: 'the color green',
        value : 'green'
    }
]

const items = [
    {
        title : 'What is react',
        content: 'react is a front-end javascript framework'
    },
    {
        title : 'What is react??1',
        content: 'react is a front-end javascript framework..1'
    }
    ,
    {
        title : 'What is react??2',
        content: 'react is a front-end javascript framework..2'
    }
]


export default () => {
    const [selected, setSelected] = useState(options[0])
    
    return (
        <div>
            <Header/>
            <Route path="/"><Accordion items={items}/></Route>
            <Route path="/list"><Search /></Route>
            <Route path="/translate"><Translate /></Route>
            <Route path="/dropdown" selected={selected} onSelectedChange={setSelected} options={options}><DropDown /></Route>
        </div>
    )
};
 