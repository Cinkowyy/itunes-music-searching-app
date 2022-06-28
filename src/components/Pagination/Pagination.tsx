import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface paginationProps {
  currentPage: number;
  numberOfPages: number;
  isLoading: boolean;
  setPage: (pageNumber: number) => void;
}

const Pagination: React.FC<paginationProps> = ({
  currentPage,
  setPage,
  numberOfPages,
  isLoading,
}) => {
  return (
    <div className="pagination">
      <button
        className="pagination__button"
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage <= 1 || isLoading === true ? true : false}
      >
        <FontAwesomeIcon icon={faAngleLeft} size="lg" />
        Prev
      </button>
      <button
        className="pagination__button"
        onClick={() => setPage(currentPage + 1)}
        disabled={
          currentPage >= numberOfPages || isLoading === true ? true : false
        }
      >
        Next
        <FontAwesomeIcon icon={faAngleRight} size="lg" />
      </button>
    </div>
  );
};

export default Pagination;
