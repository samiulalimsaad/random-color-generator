export const Controller = ({
    name,
    state,
    range,
    max = 255,
    step = 1,
}: {
    name: string;
    state: number;
    range: Function;
    max?: number;
    step?: number;
}) => {
    return (
        <tr>
            <td
                className={`text-right text-uppercase font-weight-bold`}
                style={{
                    color: `rgb(${155 - state},${155 - state},${155 - state})`,
                }}
            >
                <label htmlFor={name}>{name} :</label>
            </td>
            <td>
                <input
                    type="range"
                    className="w-100"
                    id={name}
                    min="0"
                    max={max}
                    step={step || 1}
                    name={name}
                    value={state}
                    onChange={(e) => {
                        range(e);
                    }}
                />
            </td>
            <td
                className="text-left font-weight-bold"
                style={{
                    color: `rgb(${155 - state},${155 - state},${155 - state})`,
                }}
            >
                {state}
            </td>
        </tr>
    );
};
