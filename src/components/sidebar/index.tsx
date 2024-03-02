import { SignOutButton } from '@clerk/clerk-react'
import './index.css'
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Link to="/">
                <div className='sidebar-logo'>
                    <img src={Logo} alt='uxify' width={40} height={40} />
                    <p className='sidebar-logo-title'>Uxify</p>
                </div>
            </Link>
            <div className='sidebar-links'>

            </div>
            <div className='sidebar-footer'>
                <SignOutButton />
            </div>
        </div>
    )
}
