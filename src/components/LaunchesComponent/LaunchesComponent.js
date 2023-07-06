import React from 'react';
import style from './LaunchesComponent.module.css';

const LaunchesComponent = (props) => {
    const {launche} = props;
    return (

        <div className={style.container}>
            <div>mission_name: {launche.mission_name}</div>
            <div>launch_year: {launche.launch_year}</div>
            <div><img src={launche.links.mission_patch_small} alt={launche.mission_name}/></div>

        </div>
    );
};

export default LaunchesComponent;