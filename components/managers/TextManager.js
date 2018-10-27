class TextManager {
    
    capitalizeText = (text)=>{
        return String().concat(text.slice(0,1).toUpperCase(), text.slice(1, text.length))
    }

}

const TextManagerInstant = new TextManager();
export default TextManagerInstant;