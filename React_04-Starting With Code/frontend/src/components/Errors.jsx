import React, { lazy } from "react";
import { useRouteError } from "react-router-dom";
import { ERROR_IMG } from "../utils/constants";

export default Errors = () => {
    const err = useRouteError();
    return (
        <div className="error-img">
            <img src={ERROR_IMG} alt="error message" />
            <h1>{err.status}</h1>
            <h2>{err.statusText}</h2>
        </div>
    )
}