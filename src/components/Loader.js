import { useEffect } from "react";

const Loader = ( {setLoading} ) => {
    
    useEffect( () => {
        const timer = setTimeout( () => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    });

    return(
        <div className="loader-wrapper">
            <p>Loading...</p>
        </div>
    );

};

export default Loader;
