import React, { Component } from "react";
import Chart from "react-apexcharts";


class Plot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-line"
        },
        xaxis: {
          categories: Array.from({ length: 100 }, (_, i) => i + 1)
        }
      },
      series: [
        {
          name: "Intensity",
          data: []
        },
        {
          name: "Relevance",
          data: []
        } ,
        {
          name: "likelihood",
          data: []
        } 
      ],

      rangeSelector: {
        enabled: true,
        from: 2,
        to: 5
      }
      

            
    };
  }

  async componentDidMount() {
    await this.fetchData();
  }

  // async componentDidUpdate(prevProps) {
  //   if (this.props.selectedCountry !== prevProps.selectedCountry) {
  //     await this.fetchData();
  //   }
  //   if (this.props.selectedSector !== prevProps.selectedSector) {
  //     await this.fetchData();
  //   }
  //   if (this.props.selectedRegion !== prevProps.selectedRegion) {
  //     await this.fetchData();
  //   }
  //   if (this.props.selectedTopic !== prevProps.selectedTopic) {
  //     await this.fetchData();
  //   }
  // }

  async componentDidUpdate(prevProps) {
    if (
      this.props.selectedCountry !== prevProps.selectedCountry ||
      this.props.selectedSector !== prevProps.selectedSector ||
      this.props.selectedRegion !== prevProps.selectedRegion ||
      this.props.selectedTopic !== prevProps.selectedTopic
    ) {
      await this.fetchData();
    }
  }
  

  // async fetchData() {
    
    
  //   let url = `http://localhost:9000/testapi`;

  //   if (this.props.selectedCountry !=="All") {
  //     url = `http://localhost:9000/testapi?country=${this.props.selectedCountry}`;
  //   }  

  //   if (this.props.selectedSector !=="All") {
  //     url = `http://localhost:9000/testapi?country=${this.props.selectedSector}`;
  //   }  

  //   if (this.props.selectedRegion !=="All") {
  //     url = `http://localhost:9000/testapi?country=${this.props.selectedRegion}`;
  //   }  

  //   if (this.props.selectedTopic !=="All") {
  //     url = `http://localhost:9000/testapi?country=${this.props.selectedTopic}`;
  //   }  

  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  
  //       const intensities =  await data.myData.slice(0,100).map((d) => d.intensity)
  //       const relevance  =  await data.myData.slice(0,100).map((d) => d.relevance)
  //       const likelihoods =  await data.myData.slice(0,100).map((d) => d.likelihood)  
  
  //     this.setState({ series: [{ name: "Intensity", data: intensities   }, { name: "Relevance", data: relevance   }, { name: "likelihood", data: likelihoods  }] });
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  async fetchData() {
    let url = `http://localhost:9000/testapi`;
  
    if (this.props.selectedCountry !== "All") {
      url += `?country=${this.props.selectedCountry}`;
    }
  
    if (this.props.selectedSector !== "All") {
      url += `?sector=${this.props.selectedSector}`;
    }
  
    if (this.props.selectedRegion !== "All") {
      url += `?region=${this.props.selectedRegion}`;
    }
  
    if (this.props.selectedTopic !== "All") {
      url += `?topic=${this.props.selectedTopic}`;
    }
  
    try {

      console.log(url)
      const response = await fetch(url);
      const data = await response.json();
  
      const intensities = await data.myData.slice(0, 100).map((d) => d.intensity);
      const relevance = await data.myData.slice(0, 100).map((d) => d.relevance);
      const likelihoods = await data.myData.slice(0, 100).map((d) => d.likelihood);
  
      this.setState({
        series: [
          { name: "Intensity", data: intensities },
          { name: "Relevance", data: relevance },
          { name: "likelihood", data: likelihoods },
        ],
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">

          <h2>Intensity</h2>

            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="1600"
              height="300"

            />

          </div>
        </div>
      </div>
    );
  }
}

export default Plot;

