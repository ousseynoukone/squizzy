export function DivHome({ text1, text2, index}) {

    return (
        <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 font-bold rounded-full">{index}</div>
            <p className="text-base sm:text-lg text-gray-700">
            <span className="font-semibold">{text1}</span> {text2}
            </p>
        </div>
    )
}