// UTILITY :: PASSWORD 
import bcrypt from "bcrypt";


// SALT GENERATION FOR THE PASWORD
export const GenerateSalt = async () => {
    return await bcrypt.genSalt()
} 

// GENERATING THE ENCODED PASSWORD 
export const GeneratePassword = async( password: string, salt: string) => {
    return await bcrypt.hash(password, salt);
}