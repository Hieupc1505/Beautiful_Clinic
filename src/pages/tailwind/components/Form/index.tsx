const Form = () => {
    return (
        <>
            <form>
                <input className="border border-black focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ..." />
                <button className="bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 ...">
                    Sign up
                </button>
            </form>
            <div>
                {/* dell hiểu forcus-within lắm  */}
                <form>
                    <div className="text-gray-400 focus-within:text-red-600 ...">
                        <div className="...">
                            <svg fill="currentColor"></svg>
                        </div>
                        <input
                            className="focus:ring-2 focus:ring-gray-300"
                            placeholder="example1234@gmail.com"
                        />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Form;
