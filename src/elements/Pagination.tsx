import React, {FC} from 'react';

interface Props {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: FC<Props> = ({currentPage, totalPages,onPageChange}) => {
    const renderPageButtons = () => {
        const buttons: JSX.Element[] = [];

        let start = Math.max(1, currentPage - 2);
        let end = Math.min(start + 3, totalPages);

        if (end - start < 3) {
            start = Math.max(1, end - 3);
        }

        for (let page = start; page <= end; page++) {
            buttons.push(
                <button
                    key={page}
                    className={`pagination__button${currentPage === page ? ' pagination__button__active' : ''}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </button>
            );
        }

        if (end < totalPages) {
            buttons.push(
                <span key="ellipsis-end" className="pagination__ellipsis">
          ...
        </span>
            );

            buttons.push(
                <button
                    key={totalPages}
                    className={`pagination__button${currentPage === totalPages ? ' pagination__button__active' : ''}`}
                    onClick={() => onPageChange(totalPages)}
                >
                    {totalPages}
                </button>
            );
        }

        return buttons;
    };
    return (
        <div className="pagination">
                <button
                    className="pagination__button"
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                >
                &lt;
            </button>
            {renderPageButtons()}
            <button
                className="pagination__button"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                &gt;
            </button>
        </div>
    );
};

export default Pagination;