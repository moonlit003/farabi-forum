export function ConferenceLine({time, description}: {time: string, description: string}) {
    return (
        <p className="text-left"><b className="tabular-nums">{time}</b>&ensp;{description}</p>
    )
}