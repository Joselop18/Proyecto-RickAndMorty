import React from "react";
import ReactPaginate from "react-paginate";

export const Pagination = ({ info, pageNumber, setPageNumber }) => {
    let next = () => {
        setPageNumber(prevState => prevState + 1);
    };

    let prev = () => {
        if (pageNumber === 1) return;
        setPageNumber(prevState => prevState - 1);
    };

    return (
        <div className="d-flex justify-content-center">
            <button onClick={prev} type="button" className="btn btn-primary">
                Anterior
            </button>
            <button onClick={next} type="button" className="btn btn-primary">
                Siguiente
            </button>
        </div>
    );
};