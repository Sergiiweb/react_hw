import React, {useEffect, useState} from "react";
import LaunchesComponent from "../LaunchesComponent/LaunchesComponent";

const LaunchesContainer = () => {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then((response) => response.json())
            .then((launches) => {
                const filtredLaunches = launches.filter(value => value.launch_year !== '2020')
                setLaunches(filtredLaunches)
            })
            .catch((e) => console.log('error'))
    }, [])


    return (
        <>
            <div className={"header"}>HW2 Task2</div>
            {launches.map((launch) => {
                return (
                    <LaunchesComponent
                        key={launch.flight_number + launch.launch_date_unix}
                        launch={launch}
                    />)
            })}
        </>
    );
};

export default LaunchesContainer;