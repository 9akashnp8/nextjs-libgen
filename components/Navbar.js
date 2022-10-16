let navbarItems = ['RU', 'FORUM', 'DOWNLOAD', 'UPLOAD', 'LAST', 'OTHERS', 'TOPICS']

export default function Navbar() {
    return (
        <ul className='flex justify-around py-10'>
            {navbarItems.map((item) => <li className="transition-all ease-in-out underline-offset-8 decoration-2 hover:underline hover:scale-110 ">{item}</li>)}
        </ul>
    )
}