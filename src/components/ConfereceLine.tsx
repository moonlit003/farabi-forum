export function ConferenceLine({time, description}: {time: string, description: string}) {
    return (
        <p className="text-justify [text-align-last:left] whitespace-pre-line">
            <b className="tabular-nums inline-block mr-2">{time}</b>
            {description}
        </p>
    )
}