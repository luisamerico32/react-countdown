import './Count.css';

const Motivacional = () => <span>Achou mesmo que era verdade?! Seu conspiracionista.</span>

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Motivacional/>;
    } else {
        // Render a countdown
        return (
            <div>
                <span>
                    <p>{days}</p>
                    <p>{hours}</p>
                    <p>{minutes}</p>
                    <p>{seconds}</p>
                </span>
                <span>
                    <h4>Dias</h4>
                    <h4>Horas</h4>
                    <h4>Minutos</h4>
                    <h4>Segundos</h4>
                </span>
            </div>
        );
    }
};

export default renderer;