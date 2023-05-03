type GetPagesType = (totalCount: number, pageSize: number) => Array<number>;
export const getPages: GetPagesType = (totalCount, pageSize) => {
  const pages = Math.ceil(totalCount / pageSize);
  return pages ?
    new Array(pages).slice(0, 5).fill(1)
      .map((page, idx) => page + idx) :
    [];
};