import { useNavigate } from 'react-router'

export default function Navbar() {
    let navigate = useNavigate();
    return (
        <div>
            <div style={{backgroundColor: 'rgb(28, 37, 45)', boxShadow: '0 0 20px rgba(0,0,0,0.1)', padding: '7px'}}>
                <button style={{position: 'relative', left: '50%'}} onClick={() => {
                    navigate('/addnew')
                }}>
                    <img src="https://img.icons8.com/material/24/000000/add-user-group-man-man--v1.png" alt=""  />
                </button>
            </div>
        </div>
    )
}
