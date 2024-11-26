import { useState, ComponentType } from "react";

// Define the shape of props that HOC will inject 
interface WithMoneyProps {
  monney: number;
  handleIncrease: () => void;
}

const UpdatedComponent = <P extends object>(OriginalComponent
  : ComponentType<P & WithMoneyProps>
) => {
  const NewComponent = (props: P) => {
    const [monney, setMonney] = useState(10);
    const handleIncrease = () => {
      setMonney(monney * 2);
    };
    return <OriginalComponent {...props} monney={monney} handleIncrease={handleIncrease} />;
  }
  return NewComponent;
};

export default UpdatedComponent;
