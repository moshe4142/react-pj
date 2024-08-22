export const sliceTheArray = (arr, pageNumber, itemsPerPage = 3) => {
    const start = (pageNumber - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return arr.slice(start, end);
  };