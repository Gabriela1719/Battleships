import ship from '../assets/ship.jpg'
import '../styles/InteractScreen.scss'
import { useNavigate } from 'react-router'

export default function InteractScreen(){
    let navigate = useNavigate();
    return(
        <div className="interactScreen">
            <h1>BATTLESHIPS</h1>
            <link
                href="https://fonts.googleapis.com/css2?family=Righteous&display=swap"
                rel="stylesheet"
            />
            <div className="btn2">
                    <button className="btn3" onClick={() => {
                        navigate('/players')
                    }}>
                        <span>START</span>
                        <div className="wave"/>
                    </button>
            </div>
            <img
                alt=""
                className="pic1"
                src={ship}
            />
        </div>
    )
}
