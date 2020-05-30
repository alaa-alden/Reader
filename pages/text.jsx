import Layout from '../components/layout'
import { Style_Text }from '../styles'
const Text = () => {
    const [Text,setText]=React.useState("")
    const HandleSubmit=(e)=>{
        e.preventDefault()
        console.log('test');
        
        const msg=new SpeechSynthesisUtterance()
        // console.log('thank god /n for every thing')
        try{
            // speechSynthesis.cancel()
            msg.text=Text
            msg.onstart=e=>{
                console.log(e.timeStamp)
            }
            msg.onend = function (event) {
                console.log('Finished in ' + event.elapsedTime + ' seconds.');
            }
        speechSynthesis.speak(msg)
        // if you want to hidne a text form input
        // setText("")
        // speechSynthesis.cancel()
    }catch(e){
        console.log(e)
    }
    }
    return (
        <Layout>
            <form onSubmit={HandleSubmit}>
                <label htmlFor='text'>Put the sentence:</label>
                <input id='text' type="text" value={Text} placeholder="write a sentence" autoComplete="off" onChange={(e)=>setText(e.target.value)}/>
                <button disabled={Text==""?true:false} type="submit">Speak</button>
            </form>
            <style jsx>{Style_Text}</style>
        </Layout>
    )
}

export default Text
