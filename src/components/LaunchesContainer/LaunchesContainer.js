import React, {useEffect, useState} from "react";
import LaunchesComponent from "../LaunchesComponent/LaunchesComponent";

const LaunchesContainer = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then((response) => response.json())
            .then((launches) => setLaunches(launches))
            .catch((e) => console.log('error'))
    }, [])


    return (
        <>
            <div className={"header"}>HW2 Task2</div>
            {launches.map((launche) => {
                return (
                    <LaunchesComponent
                        key={launche.flight_number + launche.launch_date_unix}
                        launche={launche}
                    />)
            })}
        </>
    );
};

export default LaunchesContainer;