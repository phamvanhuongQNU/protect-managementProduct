module.exports = (length)=>{
    module.exports = (length) =>{
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const stringLenght = characters.length;
    
        for (let i = 0; i < length; i++){
            result += characters.charAt(Math.floor(Math.random() * stringLenght));
        }
        return result;
    }   
}