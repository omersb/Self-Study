import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [tutorials, setTutorials] = useState();

  const url = " https://cw-axios-example.herokuapp.com/api/tutorials";

  //! GET (Read)
  const getTutorials = async () => {
    try {
      const { data } = await axios.get(url);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };

  //? Sadece Component mount oldugunda istek yapar
  useEffect(() => {
    getTutorials();
  }, []);

  console.log(tutorials);

  //! POST (Create)
  const addTutorial = (tutorial) => {
    console.log("add");
  };

  return (
    <>
      <AddTutorial addTutorial={addTutorial} />
      <TutorialList tutorials={tutorials} />
    </>
  );
};

export default Home;
