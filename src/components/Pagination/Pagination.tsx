import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface paginationProps {
  currentPage: number;
  numberOfPages: number;
  setPage: (pageNumber: number) => void;
}

const Pagination: React.FC<paginationProps> = ({
  currentPage,
  setPage,
  numberOfPages,
}) => {
  return (
    <div className="pagination">
      <button
        className="pagination__button"
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage <= 1 ? true : false}
      >
        <FontAwesomeIcon icon={faAngleLeft} size="lg" />
        Prev
      </button>
      <button
        className="pagination__button"
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage >= numberOfPages ? true : false}
      >
        Next
        <FontAwesomeIcon icon={faAngleRight} size="lg" />
      </button>
    </div>
  );
};

export default Pagination;
