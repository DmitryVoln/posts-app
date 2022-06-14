export const pagesListMaker = (total: number, limit: number) => {
    const list = [];
    const maxPage = Math.ceil(total/limit)
    for (let i = 1; i <= maxPage; i++) {
        list.push(i);
    }
    return list;
}