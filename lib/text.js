export const SubmitHandle = () => {
    e.preventDefault()
    try {
        const msg = new SpeechSynthesisUtterance()
        msg.text = text
        speechSynthesis.speak(msg)
    } catch (e) {
        console.log(e)
    }
}