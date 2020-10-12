import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Convert = ({language, text}) => {
const [translated, setTranslate] = useState('')
const [debouncedText, setDebouncedText] = useState(text)

    useEffect(() => {
        const timeId = setTimeout(() => {
            setDebouncedText(text)
        }, 500)
        return () => {
            clearTimeout(timeId)
        }
    }, [text])

    useEffect(() => {
        const doTranslation = async () => {
            const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {},  {
                params : {
                    q: debouncedText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })
            setTranslate(data.data.translations[0].translatedText)
        }
        doTranslation()
     
    }, [language, debouncedText])
    return (
        <div>
            <div>
                <h1 className="ui header">output : {translated}</h1>
            </div>
        </div>
    )
}

export default Convert