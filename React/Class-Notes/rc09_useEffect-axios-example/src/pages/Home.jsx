import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState, useEffect } from "react";

// aşağıyı ilgilendiren herşeyi bu parent ta yapabiliriz
const Home = () => {
  const [tutorials, setTutorials] = useState();

  const url = `https://cw-axios-example.herokuapp.com/api/tutorials`;

  const getTutorials = async () => {
    try {
      const { data } = await axios.get(url);
      setTutorials(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTutorials();
  }, []);
  console.log(tutorials);

  //POST
  const addTutorial = async (tutorial) => {
    try {
      await axios.post(url, tutorial);

      console.log("add");
    } catch (error) {
      console.log(error);
    }
    getTutorials(); // post tan sonra yeniden çekiyoruz güncel veriyi alıyoruz böyle state ya da props değiştirerek altta tutorials props unu değiştirmiş ve yeniden tetiklemiş oluyoruz
  };

  const deleteTutorial = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getTutorials();
  };

  const editTutorial = async (id, title, desc) => {
    const filtered = tutorials
      .filter((tutor) => tutor.id === id)
      .map(() => ({ title: title, description: desc })); // return yerine paranteze aldık
    console.log(filtered);
    try {
      await axios.put(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <AddTutorial addTutorial={addTutorial} />
      <TutorialList
        tutorials={tutorials}
        deleteTutorial={deleteTutorial}
        editTutorial={editTutorial}
      />
    </>
  );
};

export default Home;
