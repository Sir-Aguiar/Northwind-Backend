import "dotenv/config";
export const DecodeMessage = (message: string) => {
  return CryptoJS.AES.decrypt(message, process.env.PRIVATE_KEY!).toString(CryptoJS.enc.Base64url);
};
