import React from "react";
import Loader from 'react-loader-spinner';
const ProgressLoader = () => {
    //other logic

    return (
        <Loader
            type="CradleLoader"
            color="#00BFFF" //color
            height={100} //height
            width={100} //width
            timeout={3000} //3 secs // 1000 = 1sec

        />
    );

}

export default ProgressLoader;