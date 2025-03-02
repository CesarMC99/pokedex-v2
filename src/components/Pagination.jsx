export const Pagination = ({ currentPage, previousPage, nextPage }) => {
  return (
    <div className="flex">
      <button className="text-white text-4xl font-semibold bg-purple-600 border-3 border-r-0 p-2 cursor-pointer rounded-tl-2xl rounded-bl-2xl" onClick={previousPage}>{"<"}</button>
      <div className="text-white text-2xl content-center font-semibold bg-purple-600 border-3 border-r-0 border-l-0 p-2">{currentPage}</div>
      <button className="text-white text-4xl font-semibold bg-purple-600 border-3 border-l-0 p-2 cursor-pointer rounded-tr-2xl rounded-br-2xl" onClick={nextPage}>{">"}</button>
    </div>
  )
}