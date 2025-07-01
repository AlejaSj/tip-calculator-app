import Title from "./Title"
export default function Input(props) {
    return (
        <>
            <div className="relative text-gray-400">
                <svg className="absolute mt-3.5 ml-3" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 320 512"><path d={props.svg} fill="currentColor"/></svg>
                <input onChange={e => props.onInputChange(e.target.value)} className="border-green-900 text-right text-2xl rounded-md px-5 font-bold w-[100%] h-13 text-green-900 tracking-[0.1rem] mx-auto bg-gray-50" type="tel" name="numbre" id="number" placeholder={props.placeholder}/>
            </div>
        </>)
}