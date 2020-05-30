export default ()=>{
    const voices=[1,2,3,4,5]
    const getVoices = ()=>{
    // voices.forEach((voice, index)=>{return (<option value={voice}>{voice.name}</option>)})
    for(let i=0;i<voices.length;i++){
         <option value={voices[i]}>{voices[i].name}</option>
    }
    }
    return(
        <select name="voice" id="voice">
            {
                voices!=="alaa"?
                voices.forEach((voice, index)=>{return (<option value={voice}>{voice.name}</option>)})
                :<option>1</option>
            }
            <option value="2">2</option>
        </select>
    )
}