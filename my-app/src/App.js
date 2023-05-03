import './App.css';
import Navbar from "./Navbar";
import Plot from "./Graph"
import { useState, useEffect  } from 'react';
import ChartTwo from './ChartTwo';
import ChartThree from './ChartThree';

function App() {

  const [selectedCountry, setSelectedCountry] = useState("All");
  const [selectedSector, setSelectedSector] = useState("All");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedTopic, setSelectedTopic] = useState("All");
  const [selectedOption, setSelectedOption] = useState('All');
  const [selectedOption2, setSelectedOption2] = useState('All');
  const [selectedOption3, setSelectedOption3] = useState('All');
  const [selectedOption4, setSelectedOption4] = useState('All');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setSelectedCountry(event.target.value);

  }

  const handleOptionChange2 = (event) => {
    setSelectedOption2(event.target.value);
    setSelectedSector(event.target.value);
  }

  const handleOptionChange3 = (event) => {
    setSelectedOption3(event.target.value);
    setSelectedRegion(event.target.value);
  }

  const handleOptionChange4 = (event) => {
    setSelectedOption4(event.target.value);
    setSelectedTopic(event.target.value);

  }

  useEffect(() => {
    setSelectedCountry(selectedOption);
    }, [selectedOption]); 

  useEffect(() => {
    setSelectedSector(selectedOption2);
      }, [selectedOption2]);

  useEffect(() => {
    setSelectedRegion(selectedOption3);
        }, [selectedOption3]);

  useEffect(() => {
    setSelectedTopic(selectedOption4);
          }, [selectedOption4]);

  return (
    <div className="App">
       <Navbar/>
       <div className='menu-section'>

       <div className="dropdown-menu">
          <h2><label htmlFor="country-select">Select a country:</label></h2>
          <select id="country-select" value={selectedOption} onChange={handleOptionChange}>
            <option value="All">All</option>
            <option value="United States of America">USA</option>
            <option value="Mexico">Mexico</option>
            <option value="India">India</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Russia">Russia</option>
            <option value="Saudi Arabia">Saudi Arabia</option>
            <option value="Angola">Angola</option>
            <option value="Lebanon">Lebanon</option>
            <option value="South Africa">South Africa</option>
            <option value="Azerbaijan">Azerbaijan</option>
            <option value="Egypt">Egypt</option>
            <option value="Colombia">Colombia</option>
            <option value="Niger">Niger</option>
            <option value="Libya">Libya</option>
            <option value="Brazil">Brazil</option>
            <option value="Mali">Mali</option>
            <option value="Indonesia">Indonesia</option>
            <option value="Iran">Iran</option>
            <option value="China">China</option>
            <option value="Venezuela">Venezuela</option>
            <option value="Burkina Faso">Burkina Faso</option>
            <option value="Germany">Germany</option>
            <option value="Libya">Libya</option>

          </select>
        </div>

        <div className="dropdown-menu">
          <h2><label htmlFor="Sector-select">Select a Sector:</label></h2>
          <select id="Sector-select" value={selectedOption2} onChange={handleOptionChange2}>
            <option value="All">All</option>
            <option value="Energy">Energy</option>
            <option value="Environment">Environment</option>
            <option value="Government">Government</option>
            <option value="Manufacturing">Manufacturing</option>
            <option value="Retail">Retail</option>
            <option value="Financial-services">Financial services</option>
            <option value="Aerospace-&-defence">Aerospace & defence</option>
            <option value="Support services">Support services</option>
            <option value="Information-Technolog">Information Technolog</option>
            <option value="Healthcare">Healthcare</option>

          </select>
        </div>

        <div className="dropdown-menu">
          <h2><label htmlFor="Region-select">Select a Region:</label></h2>
          <select id="Region-select" value={selectedOption3} onChange={handleOptionChange3}>
            <option value="All">All</option>
            <option value="World">World</option>
            <option value="Northern%20America">Northern America</option>
            <option value="Central%20America">Central America</option>
            <option value="South%20America">South America</option>
            <option value="Western%20Africa">Western Africa</option>
            <option value="Central%20Africa">Central Africa</option>
            <option value="Southern%20Africa">Southern-Africa</option>
            <option value="Eastern%20Europe">Eastern Europe</option>
            <option value="Western%20Asia">Western Asia</option>
            <option value="Southern%20Asia">Southern Asia"</option>
            <option value="Eastern%20Asia">Eastern Asia</option>

          </select>
        </div>

        <div className="dropdown-menu">
          <h2><label htmlFor="Topic-select">Select a Topic:</label></h2>
          <select id="Topic-select" value={selectedOption4} onChange={handleOptionChange4}>
            <option value="All">All</option>
            <option value="Consumption">Consumption</option>
            <option value="oil">Oil</option>
            <option value="market">Market</option>
            <option value="gas">Gas</option>
            <option value="gdp">GDP</option>
            <option value="Production">Production</option>
            <option value="export">Export</option>
            <option value="battery">Battery</option>
            <option value="policy">Policy</option>
            <option value="economy">Economy</option>
            <option value="market">Market</option>
            <option value="war">War</option>
            <option value="robot">Robot</option>
            <option value="growth">Growth</option>

          </select>
        </div>

        </div>
  
      <div className='app_body'>
        {console.log(selectedTopic)}
        <Plot selectedCountry={selectedCountry} 
        selectedSector={selectedSector} 
        selectedRegion={selectedRegion}
        selectedTopic={selectedTopic}
        />

        <h2> Relevance</h2>
            <ChartTwo 
            selectedCountry={selectedCountry} 
            selectedSector={selectedSector} 
            selectedRegion={selectedRegion} 
            selectedTopic={selectedTopic}/>

            <h2>Likelihood</h2>
            <ChartThree 
            selectedCountry={selectedCountry}
            selectedSector={selectedSector}
            selectedRegion={selectedRegion}
            selectedTopic={selectedTopic}
            />

      </div>
    </div>
  );
}

export default App;
