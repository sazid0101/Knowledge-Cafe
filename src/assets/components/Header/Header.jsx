import profile from '../../images/profile.jpg'
import './Header.css'
const Header = () => {
    return (
        <header className='flex justify-between p-4  border-b-4 max-w-7xl mx-auto'>
            <h1  className="text-3xl text-lime-800 font-bold">Knowledge Cafe</h1>
            <img className='profile-img' src={profile} alt="" srcset="" />
        </header>
    );
};

export default Header;