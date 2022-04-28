import '../styles/Players.css'
import Navbar from "./Navbar";
import {useNavigate} from "react-router";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Players () {

    const [player, setPlayers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3030/players')
            .then(res => {
                setPlayers(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const renderTable = () => {
        return player.map(p => {
            return (
                <tr key={p.id}>
                    <td>{p.username}</td>
                    <td>{p.email}</td>
                </tr>
            )
        })
    }

    const navigate = useNavigate();
    return (
        <div>
            <div className="background-image-fixed">
                <header><Navbar/></header>
                <div className="title-container">
                    <p className="title">Players</p>
                </div>
                <div className="container-players">
                    <div className="buttons">
                        <button onClick={() => navigate('/game')} className="btn effect01">
                            <span>CREATE NEW GAME</span>
                        </button>
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <th>UserName</th>
                            <th>Email</th>
                        </tr>
                        </thead>
                        <tbody>{renderTable()}</tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
