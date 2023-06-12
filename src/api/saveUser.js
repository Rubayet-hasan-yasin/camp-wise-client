import axios from "axios";

export const saveUser = user =>{
    const email = user.email;
    const name = user.displayName;
    const photoURL = user?.photoURL;

    const saveuser = {email, name, photoURL};
    axios.put(`https://camp-wise-server.vercel.app/user/${user?.email}`, saveuser)
    .then(res=> console.log(res))
}