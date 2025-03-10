import profile from '../../images/profile.jpg'
import './Header.css'
const Header = () => {
    return (
        <header className='flex justify-between  p-4 mx-4 border-spacing-y border-b-4'>
            <h1  className="text-3xl text-lime-800 font-bold">Knowledge Cafe</h1>
            <img className='profile-img' src={profile} alt="" srcset="" />
        </header>
    );
};

export default Header;