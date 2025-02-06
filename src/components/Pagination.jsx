export const Pagination = ({ currentPage, previousPage, nextPage, maxPages }) => {
// export const Pagination = ({ maxPages }) => {

//   const [currentPage, setCurrentPage] = useState(1)

//   const previousPage = () => {
//     if(currentPage === 1) return;
//     setCurrentPage(prevPage => prevPage - 1);
//   }

//   const nextPage = () => {
//     if(currentPage === maxPages) return;
//     setCurrentPage(prevPage => prevPage + 1);
//   }

  return (
    <div>
      <button onClick={previousPage}>{"<"}</button>
      <div>{currentPage}</div>
      <button onClick={nextPage}>{">"}</button>
    </div>
  )
}