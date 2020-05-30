import Layout from "../components/layout"
import {Style_File} from '../styles'
// import axios from 'axios'
const File = () => {
    const [file, setfile] = React.useState(null)
    const [result, setResult] = React.useState('')
    const [sentence, setSentence] = React.useState('Select File')
    const [Style_Div1, setStyle_Div1] = React.useState({display:'flex'})
    const [Style_Div2, setStyle_Div2] = React.useState({ display: "none" })
    const [active,setActive]=React.useState()
    const SubmitHandle = (e) => {
        e.preventDefault()
        console.log('done')
        if (file !== null) {
            setResult('')
            const reader = new FileReader()
            reader.onload = (e) => {
                setResult(e.target.result)
                setStyle_Div1({ display: "none" })
                setStyle_Div2({ display: "flex" })
            }
            reader.readAsText(file)
        }else alert('error')
    }
    const loader = e => {
        // setResult('')
        const file_handle = e.target.files[0].name
        switch (file_handle.substring(file_handle.lastIndexOf(".") + 1).toLowerCase()) {
            case 'txt':
            case 'odt':
            case "text":
                setfile(e.target.files[0]);
                setSentence("selected File: " + file_handle)
                setActive({ background: "rgb(34, 153, 221)" })
                break;
            default:
                setfile(null)
                break;
        }

    }
    const speakHandle = (e) => {
        e.preventDefault()
        try {
            speechSynthesis.cancel()
            const msg = new SpeechSynthesisUtterance()
            msg.text = result.replace(/\s+/g, " ")//we use replace fun to replace all new line in text ,because speech synthesis is not speak text if it has new line
            speechSynthesis.speak(msg)
            msg.onend = () => {
                setTimeout(() => {
                    setStyle_Div1({ display: "flex" })
                    setStyle_Div2({ display: "none" })
                    setResult("")
                    setfile(null)
                    setSentence("Select File")
                    setActive({ background: "#5a5a5c" })
                }, 1000);
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <Layout>
            <div id='div1' style={Style_Div1}>
                <form onSubmit={SubmitHandle} encType='multipart/form-data'>
                    <input type="file" name="file" id="input_file" hidden onChange={loader} />
                    <label htmlFor="input_file" id='selector' style={active}>{sentence}</label>
                    <button type="submit" disabled={file!==null?false:true}>Processing</button>
                </form>
            </div>
            <div id='div2' style={Style_Div2}>
                <form onSubmit={speakHandle}>
                    <label htmlFor="result">the Result:</label>
                    <input value={result} id='result' disabled />
                    <button disabled={result !== '' ? false : true} type="submit">Speak</button>
                </form>
            </div>
            <style jsx>{Style_File}</style>
        </Layout>
    )
}
export default File