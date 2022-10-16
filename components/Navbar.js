import styles from './Navbar.module.css';

let navbarItems = ['RU', 'FORUM', 'DOWNLOAD', 'UPLOAD', 'LAST', 'OTHERS', 'TOPICS']

function NavbarMenuItems() {
    return (
        <ul class={styles.navbar}>
            {navbarItems.map((item) => <li>{item}</li>)}
        </ul>
    )
}

export default function Navbar() {
    return (
        <div className='container'>
            <NavbarMenuItems/>
        </div>
    )
}