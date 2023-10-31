import "dotenv/config";
export const EncodeMessage = (message: string) => CryptoJS.AES.encrypt(message, process.env.PRIVATE_KEY!).toString();
