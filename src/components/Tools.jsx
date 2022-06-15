import { Table } from "./Table";
import Pagination from "./Pagination";
import { useState } from "react";

export const Tools = () => {
  let list = [
    ["1", "img/info.png", "cutter M10", "140.000", "14.000"],
    ["2", "img/done.png", "drill Ak23", "130.030", "10.000"],
    ["3", "img/close.png", "Knife M10", "150.040", "11.000"],
    ["4", "img/info.png", "Jammer M10", "140.020", "12.000"],
    ["5", "img/warning.png", "pistol tr0", "142.000", "13.000"],
    ["6", "img/admin.png", "Jammer Z15", "540.560", "14.000"],
    ["7", "img/user.png", "Drill M10", "350.078", "15.000"],
    ["8", "img/info.png", "cutter M10", "140.000", "14.000"],
    ["9", "img/done.png", "drill Ak23", "130.030", "10.000"],
    ["10", "img/close.png", "Knife M10", "150.040", "11.000"],
    ["11", "img/info.png", "Jammer M10", "140.020", "12.000"],
    ["12", "img/warning.png", "pistol tr0", "142.000", "13.000"],
    ["13", "img/admin.png", "Jammer Z15", "540.560", "14.000"],
    ["14", "img/user.png", "Drill M10", "350.078", "15.000"],

    ["15", "img/close.png", "Knife M10", "150.040", "11.000"],
    ["16", "img/info.png", "Jammer M10", "140.020", "12.000"],
    ["17", "img/warning.png", "pistol tr0", "142.000", "13.000"],
    ["18", "img/admin.png", "Jammer Z15", "540.560", "14.000"],
    ["19", "img/user.png", "Drill M10", "350.078", "15.000"],
  ];
  let colName = ["SN", "Type", "Tool Name", "Length", "Diameter"];

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  // getting exact number of pages required
  let totalItems = list.length;
  let pages = totalItems / itemsPerPage;
  if (totalItems % itemsPerPage !== 0 && pages > 1) {
    pages = Math.trunc(pages + 1);
  }
  // getting current post
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemindex = lastItemIndex - itemsPerPage;
  const currentItems = list.slice(firstItemindex, lastItemIndex);

  // getting exact number of items for last page
  const pageItem = currentItems.length;

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="tools">
      <Table list={currentItems} colName={colName} />
      {pages > 1 && (
        <Pagination
          lastItem={firstItemindex + pageItem}
          firstItem={firstItemindex}
          totalItems={totalItems}
          Pages={pages}
          paginate={paginate}
        />
      )}
    </section>
  );
};
