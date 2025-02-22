import { useState } from "react";
import { Container } from "./style";

export const Pagination = ({
  pagination,
  fetchNextPage,
  fetchPreviousPage,
}) => {
  
  const [currentPage, setCurrentPage] = useState(1);

  const previousPage = pagination?.prev ? currentPage - 1 : null;
  const nextPage = currentPage != pagination?.pages ? currentPage + 1 : null;

  const previousPageDisableButton = !previousPage;
  const nextPageDisableButton = currentPage === pagination?.pages;

  const handlePreviousPage = () => {
    setCurrentPage((prevState) => prevState - 1);
    fetchPreviousPage(pagination?.prev);
  };

  const handleNextPage = () => {
    setCurrentPage((prevState) => prevState + 1);
    fetchNextPage(pagination?.next);
  };

  return (
    <Container>
      <button onClick={handlePreviousPage} disabled={previousPageDisableButton}>
        &lt;
      </button>
      <div className="container-page">
        <p className="page">{previousPage}</p>
        <p className="current-page">{currentPage}</p>
        <p className="page">{nextPage}</p>
      </div>

      <button onClick={handleNextPage} disabled={nextPageDisableButton}>
        &gt;
      </button>
    </Container>
  );
};
