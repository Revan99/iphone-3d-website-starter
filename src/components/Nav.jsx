import React from 'react'
import logo from '../assets/images/logo.svg'
import store from '../assets/images/store.svg'
import search from '../assets/images/search.svg'

const links = [
    'Store',
    'Mac',
    'iPad',
    'iPhone',
    'Watch',
    'Vision',
    'AirPods',
    'TV & Home',
    'Entertainment',
    'Accessories',
    'Support',
]

const Nav = () => {
  return (
    <nav className='nav-wrapper'>
        <div className='nav-content'>
            <ul className='list-styled'>
                <li>
                    <img src={logo} alt='apple-logo'/>
                </li>
                {links.map((linkName)=>
                <li key={linkName}>
                    <a className='link-styled'>{linkName}</a>
                </li>)}
                <li>
                    <img src={search} alt='search'/>
                </li>
                <li>
                    <img src={store} alt='store'/>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav