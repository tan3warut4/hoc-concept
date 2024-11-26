import UpdatedComponent from "./UpdatedComponent"

interface Person2Props {
    monney: number;
    handleIncrease: () => void
}

const Person2: React.FC<Person2Props> = ({ monney, handleIncrease }) => {
    return (
        <>
            <h2> Prame is offering a ${monney} Dollars ja</h2>
            <button onClick={handleIncrease}>Increase monney</button>
        </>
    )
}

export default UpdatedComponent(Person2)