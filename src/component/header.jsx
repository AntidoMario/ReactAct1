
function Header () {
    return(
        <div className="bg-white shadow-md rounded-md flex items-center justify-between  p-10 ">
            <h1 className="text-blue-400 text-2xl font-bold italic">React Center</h1>
            <div className="tex-5xl font-semibold">
                <ul className="flex md:space-x-8">
                    <li>About</li>
                    <li>Service</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header