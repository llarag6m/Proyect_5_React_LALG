const Pagination = ({lastPage,pagesInCurrentBlock,setcurrentPage,currentPage}) => {

    const FIRST_PAGE = 1

    const handleNextPage = () =>{
        setcurrentPage((prevState) => {
            const nextPage = prevState + 1
            if (nextPage <= lastPage) {
                return nextPage 
            }
            return prevState
        })
    }

    const handleLastPage = () => setcurrentPage(lastPage)



    const handlePreviusPage = () =>{
        setcurrentPage((prevPage) =>{
            const newPage = prevPage - 1
            if (newPage >= 1) {
                return newPage
            } 
            return prevPage
        })
    }

    const handleFirstPage = () => setcurrentPage(FIRST_PAGE)

  return (
    <ul className="flex justify-center items-center gap-4 p-1 mb-5 bg-orange-600/50 rounded-xl shadow-lg shadow-orange-200 text-white">
        {currentPage >= 2 && <li onClick={handleFirstPage}>{"<<"}</li>}
        {currentPage >= 2 && <li onClick={handlePreviusPage}>{"<"}</li>}

        {
            pagesInCurrentBlock.map((page) => (<li className={`p-2 ${currentPage === page ? " flex justify-center items-center text-white bg-red-500 hover:bg-sky-700  border-white border-solid border-[2px] h-[35px] w-[35px] " : "flex justify-center items-center hover:bg-sky-700  border-white border-solid border-[2px] h-[35px] w-[35px]"}`} key={page} onClick={() => setcurrentPage(page)}>{page}</li>))
        }

        {currentPage <= 63 && <li onClick={handleNextPage}>{">"}</li>}
        {currentPage <= 63 && <li onClick={handleLastPage}>{">>"}</li>}
    </ul>
  )
}
export default Pagination