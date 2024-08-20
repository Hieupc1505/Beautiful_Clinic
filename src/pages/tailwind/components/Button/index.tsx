const Button = () => {
    return (
        <>
            <button className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700">
                Click me
            </button>
            <button className="btn btn-green">Button</button>
            <button className="bg-red-500 hover:bg-red-700 hover:boxshadow-4 p-2 text-white rounded">
                Hover me
            </button>
            <button className="transform motion-safe:hover:scale-110 text-white rounded px-4 py-2 bg-blue-500 overflow-hidden ">
                Hover me Scale
            </button>
            <button className="transform text-white rounded px-4 py-2 bg-blue-500 overflow-hidden motion-safe:hover:animate-spin">
                Hover me spin
            </button>
            <button className="transform hover:scale-110 motion-reduce:transform-none bg-blue-500 overflow-hidden px-4 py-2">
                Hover me
            </button>
        </>
    );
};

export default Button;
