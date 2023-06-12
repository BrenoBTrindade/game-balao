import BalloonIcon from "../icons/Balloon";

type Props = {
 children?: React.ReactNode,
 onClick: () => void;
 disabled: boolean
}

export default function BalloonButton ({onClick, disabled}: Props) {
    return (
        <button onClick={onClick} disabled={disabled} className="cursor-pointer rounded-full h-[400px] w-[400px] hover:scale-125 duration-1000 ml-40 disabled:cursor-default disabled:opacity-0">
            <BalloonIcon />
        </button>
    )
}