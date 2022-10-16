let navbarItems = ['RU', 'FORUM', 'DOWNLOAD', 'UPLOAD', 'LAST', 'OTHERS', 'TOPICS']

export default function Navbar() {
    return (
        <ul className='flex justify-around my-10'>
            {navbarItems.map((item) => <li>{item}</li>)}
        </ul>
    )
}