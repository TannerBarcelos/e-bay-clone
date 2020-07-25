require ('dotenv').config (); //config the .env file

//config object: will return the api keys, and any other environment data for the client
export const PROCESSES = {
  key: process.env.REACT_APP_API_KEY,
};
