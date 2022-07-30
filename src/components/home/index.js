import './styles.css';
// import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { config } from '../../App';
import Graph from '../graph';

const Home = () => {
    const [searchEmail, setSearchEmail] = useState('');
    const [users, setUsers] = useState([]);
    const [graphData, setGraphData] = useState({
        xAxis : [],
        yAxis : [],
    });

    const [axesData, setAxesData] = useState({});



    

    const handleSubmit = (e) => {
        const axisData = e.target.value.split(',');
        setGraphData((prevState) => (
            {
                ...prevState,
                [e.target.name] : axisData
            }
        ))
    }

    const handlePlotGraph = () => {
        graphData.xAxis.length > 1 && graphData.yAxis.length > 1  ?
        setAxesData((prevState) => (
            {
                ...prevState,
                xAxis : graphData.xAxis,
                yAxis : graphData.yAxis,
            }
        )) : toast.error('Please enter valid data (comma separated numbers) !');
    }

    useEffect(() => {
        console.log(config)
        // getUsers()
    }, [handlePlotGraph]);

    return (
        <div className="home">
            <h1 className='header'>Graph Plotter</h1>
            <div className="search-bar">
                <input 
                    type="search"   
                    name="xAxis"
                    placeholder='Type comma(,) separated x-axis values' 
                    onChange={handleSubmit}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSubmit(e);
                        }
                    }}
                />
                <input 
                    type="search"   
                    name="yAxis"
                    placeholder='Type comma(,) separated y-axis values'
                    onChange={handleSubmit}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSubmit(e);
                        }
                    }}
                />
                <button
                    onClick={handlePlotGraph}
                >
                    Plot Graph
                </button>
            </div>
            <div className="search-result">
                <Graph graphData={axesData} />        
            </div>  
        </div>
    );
}

export default Home;