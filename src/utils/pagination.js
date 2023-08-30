const paginateData = (items, currentPage) => {
    //cantidad de items por pagina
    const ITEMS_PER_PAGE = 20

    //LOS ITEMS DE LA PAGINA ACTUAL

    const sliceEnd = currentPage * ITEMS_PER_PAGE
    const sliceStart = sliceEnd - ITEMS_PER_PAGE
    const itemsCurrentPage = items.slice(sliceStart, sliceEnd)

    //ultima pagina
    const lastPage = Math.ceil(items.length / ITEMS_PER_PAGE)

    //bloque actual
    const PAGES_PER_BLOCK = 5
    const actualBlock = Math.ceil(currentPage / PAGES_PER_BLOCK)


    //paginas que se van a mostrar en el bloque actual
    const pagesInCurrentBlock = []
    const maxPage = actualBlock * PAGES_PER_BLOCK
    const minPAge = (maxPage- PAGES_PER_BLOCK) + 1

    for (let i = minPAge; i <= maxPage; i++) {
        if(i <= lastPage){

            pagesInCurrentBlock.push(i)    
        }
    }

    return {
        itemsCurrentPage,
        lastPage,
        pagesInCurrentBlock
    }

}

export {
     paginateData
    }
