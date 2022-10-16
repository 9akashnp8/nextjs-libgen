function HeroTitle() {
    return (
        <h1 className="text-4xl font-bold text-center">
            Library Genesis
        </h1>
    )
}

function SearchInputGroup() {
    return (
        <form className='py-20'>
            <div className="flex justify-center">
                <div className="relative w-1/2">
                    <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-100 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-700 dark:text-gray dark:focus:border-slate-100" placeholder="Enter Book Name & [TAB + ENTER] to search" required=""/>
                </div>
            </div>
        </form>
    )
}

function SearchButtonGroup() {
    return (
        <div className='flex justify-center'>
            <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Search</button>
        </div>
    )
}

export default function HomeMain() {
    return (
        <div className="flex flex-col justify-center relative top-1/2 translate-y-1/2">
            <HeroTitle/>
            <SearchInputGroup/>
            <SearchButtonGroup/>
        </div>
    )
}