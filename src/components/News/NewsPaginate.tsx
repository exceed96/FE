import ReactPaginate from "react-paginate";

const NewsPaginate = ({ pageCount, onPageChange, currentPage }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      marginPagesDisplayed={0} // 양쪽에 표시할 페이지 번호의 개수를 설정
      pageRangeDisplayed={currentPage === 1 || currentPage === 2 ? 4 : 5}
      initialPage={0}
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={""}
      onPageChange={onPageChange}
      forcePage={currentPage}
      containerClassName={"pagination"}
      pageLinkClassName={"pagination__link"}
      activeLinkClassName={"pagination__link__active"}
    />
  );
};

export default NewsPaginate;
