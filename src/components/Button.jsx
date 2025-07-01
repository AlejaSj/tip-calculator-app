export default function Button(props) {

    return (
        <button 
            onClick={e => { props.onClick(props.value)}} 
            disabled={props.disabled}
            className={`hover:cursor-pointer h-13 w-full rounded-md ${
                props.disabled 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : props.main 
                        ? (props.selected ? 'bg-green-400 text-green-900' : 'hover:bg-green-400 hover:text-green-900 bg-green-900 text-white') 
                        : 'text-green-900 hover:bg-gray-200 bg-green-400'
            }`}
        >
            <p className=" text-2xl  font-bold">{props.main ? props.value + '%': props.value } </p>
        </button>
    );
}