export const Pagination = ({ currentPage, previousPage, nextPage }) => {
  return (
    <div>
      <button onClick={previousPage}>{"<"}</button>
      <div>{currentPage}</div>
      <button onClick={nextPage}>{">"}</button>
    </div>
  )
}