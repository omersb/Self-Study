import Button, { TomatoButton } from "./components/Button.styled";

const App = () => {
  return (
    <>
      <Button primary>Click</Button>
      <Button>Click</Button>
      <TomatoButton>Click</TomatoButton>
      <TomatoButton primary>Click</TomatoButton>
    </>
  );
};

export default App;
