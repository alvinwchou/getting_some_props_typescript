export default function EventInfo({
    eventTitle,
    eventPrice,
    handleClick,
}: {
    eventTitle: string;
    eventPrice: string;
    handleClick: VoidFunction;
}) {
    return (
        <li>
            <h3>Event name: {eventTitle}</h3>

            <p>Event price: {eventPrice}</p>

            <button onClick={handleClick}>Get'em tickets now!!</button>
        </li>
    );
}

// again we can rewrite it with an interface
interface eventInfoProps {
    eventTitle: string;
    eventPrice: string;
    handleClick: () => void;
}

export function EventProps2({ eventTitle, eventPrice, handleClick }: eventInfoProps) {
    return (
        <li>
            <h3>Event name: {eventTitle}</h3>

            <p>Event price: {eventPrice}</p>

            <button onClick={handleClick}>Get'em tickets now!!</button>
        </li>
    );
}
