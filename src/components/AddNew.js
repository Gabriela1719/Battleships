import '../styles/AddNew.scss'
import { useState } from "react";
import axios from "axios";

export default function AddNew() {

    const [data, setData] = useState({
        username: "",
        email: ""
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        window.location.replace('/players')
        const userData = {
            username: data.username,
            email: data.email
        };
        axios.post("http://localhost:3030/players", userData).then((response) => {
            console.log(response.status);
        });
    };


    return (
        <div className="background-image-fixed">
            <div className="container">
                <form className="form-player" onSubmit={handleSubmit}>
                <label>UserName</label>
                <input className="input-player"
                    type="text"
                    name="username"
                    value={data.username}
                    onChange={handleChange}
                    required/>
                    <label>Email</label>
                    <input className="input-player"
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        required/>
                        <button>Add Player</button>
                    </form>
            </div>
        </div>
    )
}
