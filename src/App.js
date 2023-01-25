import Slider from "./components/Slider";
import {useState, useEffect} from 'react';
import axios from 'axios'

const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [holidays, setHolidays] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getHolidays = async () => {
      setIsLoading(true);
      try {
          const response = await axios.get(url);
          console.log(response.data.data);
          setHolidays(response.data.data);
      } catch (error) {
          setIsError(true)
          console.error(error)
      } finally {
          setIsLoading(false);
      }
  }

  const goNext = () => {

  }

  useEffect(() => {
    getHolidays()
  }, [])

  return (
    <div className="App">
      <div className="container-lg py-5">
        <h1 className="text-center mb-4">Your magic Holidays</h1>
        <div className="row justify-content-center">
          <Slider activeIndex={activeIndex} holidays={holidays} isError={isError} isLoading={isLoading}/>
        </div>
      </div>
    </div>
  );
}

export default App;
