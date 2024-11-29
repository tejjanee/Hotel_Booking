import axios from "axios";

export const signupHandler = async (username, number, email, password) => {
  try {
    const data = await axios.post(
      "https://deploy-five-chi.vercel.app/api/auth/register",
      {
        username: username,
        number: number,
        email: email,
        password: password,
      }

    );
    console.log("Signed Up");
      return true;
    
  } catch (err) {
    console.log("error adding user to database");
  }
};