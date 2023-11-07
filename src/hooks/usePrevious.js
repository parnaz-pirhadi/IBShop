import React from "react";

const usePrevious=(data)=> {
    const ref = React.useRef();
    React.useEffect(() => {
        ref.current = data
    }, [data])
    return ref.current
}
export default  usePrevious
