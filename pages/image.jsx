import Layout from "../components/layout"
import axios from 'axios'
import {Style_Image} from '../styles'
const Image=()=>{
    const [image,setImage]=React.useState(null)
    const [result ,setResult]=React.useState('')
    const [sentence,setSentence]=React.useState('Select Image')
    const [Style_Div1,setStyle_Div1]=React.useState({display:"flex"})
    const [Style_Div2, setStyle_Div2] = React.useState({display:"none"})
    const [Style_Active,setActive]=React.useState({})
    const loader=(e)=>{
        const image=e.target.files[0]
        setSentence("selected Image: "+image.name)
        setImage(image)
        setActive({ background:"rgb(34, 153, 221)"})
    }
    const SubmitHandle=(e)=>{
        e.preventDefault()
        if(image==null)
            console.log("null")
        else {
        const Data=new FormData()
        Data.append('image',image)
        axios.post('/api/process-image',Data).then(res=>{
            // if(res==400)alert('error')
            // console.log(res)
            setResult(res.data.result)
            setSentence("select image")
            setStyle_Div1({display:"none"})
            setStyle_Div2({ display: "flex" })
        })
    }
    }
    const speakHandle=(e)=>{
        e.preventDefault()
        try {
            speechSynthesis.cancel()
            const msg = new SpeechSynthesisUtterance()
            msg.text =result.replace(/\s+/g," ")//we use replace fun to replace all new line in text ,because speech synthesis is not speak text if it has new line
            speechSynthesis.speak(msg)
            msg.onend = () => {
                setTimeout(() => {
                    setStyle_Div1({ display: "flex" })
                    setStyle_Div2({ display: "none" })
                    setActive({ background:"#5a5a5c"})
                    setImage(null)
                }, 1000);
              
            }
            
            
        } catch (e) {
            console.log(e)
        }
    }
    return(
        <Layout>
            <div style={Style_Div1} id="div1">
                <form onSubmit={SubmitHandle} encType='multipart/form-data'>
                    <input type="file" name="file" id="input_image" hidden onChange={loader} />
                    <label htmlFor="input_image" id='selector' style={Style_Active}>{sentence}</label>
                    <button type="submit" disabled={image!==null?false :true}>Processing</button>
                </form>
            </div>
            <div style={Style_Div2} id='div2'>
                <form onSubmit={speakHandle}>
                    <label htmlFor="result">the Result:</label>
                    <input type='text' id='result' value={result} disabled/>
                    <button disabled={result!==''?false:true} type='submit'>Speak</button>
                    </form>
            </div>
            <style jsx>{Style_Image}</style>
        </Layout>
    )
}
export default Image