const Pagination = ({ lastPage, pagesInCurrentBlock, setCurrentPage, currentPage }) => {


  const handleNexPage = () => {
    setCurrentPage((prevState) => {
      const nextPage =  prevState + 1
      if(nextPage <= lastPage) return nextPage
      return prevState
      })
  }

  const handleLastPage = () => setCurrentPage(lastPage)

  const handlePreviusPage = () => {
    setCurrentPage((prevPage) => {
      const FIRST_PAGE = 1
      const newPage = prevPage - 1
      if(newPage >= FIRST_PAGE) return newPage
      return prevPage
    })
  }

  const handleFirstPage = () => setCurrentPage(FIRST_PAGE)


  return (
    <ul className="flex justify-center gap-4 p-4">
      {currentPage >= 2 && <li onClick={handleFirstPage}>{"<<"}</li>}
      {currentPage >= 2 && <li onClick={handlePreviusPage}>{"<"}</li> }
      {pagesInCurrentBlock.map((page) => (
        <li className={`p-2 ${currentPage === page ? "text-white" : "text-red-500" }`} key={page} onClick={() => setCurrentPage(page)}>
           {page}
        </li>
      ))}
      <li onClick={handleNexPage} >{">"}</li>
      <li onClick={handleLastPage}>{">>"}</li>
    </ul>
  );
};

export default Pagination;
