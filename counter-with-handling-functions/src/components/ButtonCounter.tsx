interface ButtonCounterProps {
    count: number;
    handleCount: (change: number) => void;
}

export default function ButtonCounter({ count, handleCount }: ButtonCounterProps) {
    return (
        <>
            <button
                onClick={() => handleCount(-1)}
                disabled={count === 0 ? true : false}
                className="px-8 py-3 bg-white/90 hover:bg-white text-purple-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
                -1
            </button>
            <button onClick={() => handleCount(1)} className="px-8 py-3 bg-white/90 hover:bg-white text-purple-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                +1
            </button>
        </>
    );
}
