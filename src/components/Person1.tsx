import UpdatedComponent from "./UpdatedComponent"

interface Person1Props {
    monney: number;
    handleIncrease: () => void
}

const Person1: React.FC<Person1Props> = (
    { monney, handleIncrease }
) => {
    return (
        <>
            <h2> Tan is offering a ${monney} Dollars ja</h2>
            <button onClick={handleIncrease}>Increase monney</button>
        </>
    )
}

export default UpdatedComponent(Person1)