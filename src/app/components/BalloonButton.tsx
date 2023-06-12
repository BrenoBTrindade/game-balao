type Props = {
 children: React.ReactNode,
 onClick: () => void;
 disabled: boolean
}

export default function BalloonButton ({children, onClick, disabled}: Props) {
    return (
        <button onClick={onClick} disabled={disabled} className="bg-red-700 cursor-pointer h-36 w-36 rounded-full hover:scale-125 text-white duration-1000 disabled:text-transparent disabled:bg-transparent disabled:cursor-default">
            {children}
        </button>
    )
}