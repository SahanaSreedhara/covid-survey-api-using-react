import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountUp from 'react-countup'

const CovidData = () => {
    const [covidData, setCovidData] = useState([])
    const [totalObj, setTotalObj] = useState({})

    useEffect(() => {
        axios.get("https://data.covid19india.org/data.json").then((response) => {
            // console.log(response.data)
            setCovidData(response.data.statewise)
            setTotalObj(response.data.statewise[0])

        })
    }, [])
    console.log(covidData)
    console.log(totalObj)

    return (
        <>
            {/* HEADING */}
            <div className="head">
                <div>
                    <img src="https://cdn.pixabay.com/photo/2020/03/23/10/26/covid-19-4960254__480.png" alt="" className="covid-logo" />
                </div>
                <div>
                    <h1 style={{ textAlign: 'center' }}>COVID-19 SURVEY</h1>
                </div>
                <div>
                    <img src="https://cdn.pixabay.com/photo/2020/04/09/03/19/coronavirus-line-art-5019475__480.png" alt="" className="covid-logo" />
                </div>
            </div>

            {/* GRID DISPLAY */}
            <div className='grid-div'>
                <div className='grid-row'>
                    <div className='individual-grid'>
                        <h4 className='grid-heading'>COUNTRY</h4>
                        <div className='grid-value-div'>
                            <h3>INDIA</h3>
                        </div>
                    </div>
                    <div className='individual-grid'>
                        <h4 className='grid-heading'>ACTIVE CASES</h4>
                        <div className='grid-value-div'>
                            <h3><CountUp start={0} end={totalObj.active} useEasing={true} /></h3>
                            
                        </div>
                    </div>
                    <div className='individual-grid'>
                        <h4 className='grid-heading'>CONFIRMED CASES</h4>
                        <div className='grid-value-div'>
                            <h3><CountUp start={0} end={totalObj.confirmed} useEasing={true} /></h3>
                        </div>
                    </div>
                </div>
                <div className='grid-row'>
                    <div className='individual-grid'>
                        <h4 className='grid-heading'>TOTAL DEATHS</h4>
                        <div className='grid-value-div'>
                            <h3><CountUp start={0} end={totalObj.deaths} useEasing={true} /></h3>
                        </div>
                    </div>
                    <div className='individual-grid'>
                        <h4 className='grid-heading'>TOTAL RECOVERED</h4>
                        <div className='grid-value-div'>
                            {/* <h3>{totalObj.recovered}</h3> */}
                            <h3><CountUp start={0} end={totalObj.recovered} useEasing={true} /></h3>
                        </div>
                    </div>
                    <div className='individual-grid'>
                        <h4 className='grid-heading'>LAST UPDATED ON:</h4>
                        <div className='grid-value-div'>
                            <h3>{totalObj.lastupdatedtime}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <br />

            {/* TABLE DISPLAY */}
            <div className='table-div'>
                <table>
                    <thead>
                        <tr>
                            <th>STATES</th>
                            <th>ACTIVE</th>
                            <th>CONFIRMED</th>
                            <th>DEATHS</th>
                            <th>RECOVERED</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            covidData.map((ele, i) => {
                                
                                return (
                                    
                                    <tr>
                                        <td>{ele.state}</td>
                                        <td>{ele.active}</td>
                                        <td>{ele.confirmed}</td>
                                        <td>{ele.deaths}</td>
                                        <td>{ele.recovered}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>

                </table>
            </div>
            <footer>
                <p>STAY SAFE! TAKE CARE!</p>
            </footer>
        </>
    )
}

export default CovidData