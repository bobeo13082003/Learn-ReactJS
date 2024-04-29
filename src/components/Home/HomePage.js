import videoHomePage from '../../assets/vdeo-homepage.mp4'
import { useSelector } from 'react-redux'
const HomePage = (props) => {
    const isAuthenticated = useSelector(state => state.account.isAuthenticated)
    const account = useSelector(state => state.account.account)
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source
                    src={videoHomePage}
                    type='video/mp4'
                />
            </video>
            <div className='homepage-content'>
                <div className='title-1'>Make forms
                    worth filling out
                </div>
                <div className='title-2'>
                    Get more data—like signups, feedback, and anything else—with forms designed to be refreshingly different.
                </div>
                <div className='title-3'>
                    <button>Get started it's free</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage