import React from 'react';
import style from './LaunchesComponent.module.css';

const LaunchesComponent = (props) => {
    const {launch} = props;
    return (

        <div className={style.container}>
            <div>mission_name: {launch.mission_name}</div>
            <div>launch_year: {launch.launch_year}</div>
            <div><img src={launch.links.mission_patch_small} alt={launch.mission_name}/></div>

        </div>
    );
};

export default LaunchesComponent;