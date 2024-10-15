import { useRouteError } from "react-router-dom" 

const Error =()=>{
    const err = useRouteError();
    return (
        <div className="p-4 m-4">
            <h1> Error !!!</h1>
            <h2>Try again later!
                <h3>{err.status} :{err.statusText}</h3>
            </h2>
        </div>
    )
}
export default Error;