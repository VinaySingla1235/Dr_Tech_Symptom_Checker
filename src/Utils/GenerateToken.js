// AuthService.js
import CryptoJS from 'crypto-js';

const apiUrl = "https://authservice.priaid.ch/login";
const apiKey = import.meta.env.VITE_API_KEY;
const secretKey = import.meta.env.VITE_SECRET_KEY;
console.log(apiKey,secretKey)
export const generateAuthToken = async () => {
    try {
        // Compute the HMAC-MD5 hash of the URI using the secret key
        const computedHash = CryptoJS.HmacMD5(apiUrl, secretKey);
        const computedHashString = computedHash.toString(CryptoJS.enc.Base64);

        // Create the Authorization header value
        const authorizationHeader = `Bearer ${apiKey}:${computedHashString}`;

        // Send a request to the authentication service
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                Authorization: authorizationHeader,
                "Content-Type": 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({}) // Empty body for POST request
        });

        if (response.ok) {
            // If the response is successful, parse and return the token
            const data = await response.json();
            return data.Token;
        } else {
            // If the response is not successful, throw an error
            throw new Error('Authentication failed');
        }
    } catch (error) {
        console.error('Authentication error:', error.message);
        throw error;
    }
};
