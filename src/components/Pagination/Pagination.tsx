import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Pagination = () => {
  return (
    <div className="pagination">
      <button className="pagination__button">
        <FontAwesomeIcon icon={faAngleLeft} size="lg" />
        Prev
      </button>
      <button className="pagination__button">
        Next
        <FontAwesomeIcon icon={faAngleRight} size="lg" />
      </button>
    </div>
  );
};

export default Pagination;
