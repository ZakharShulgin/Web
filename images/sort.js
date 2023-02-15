const newSort = () => {
    const cell_value = (table_row, index_of) =>
      table_row.children[index_of].innerText ||
      table_row.children[index_of].textContent;
  
    const check = (index_of, order) => (a, b) =>
      ((v1, v2) =>
        v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2)
          ? v1 - v2
          : v1.toString().localeCompare(v2))(
        cell_value(order ? a : b, index_of),
        cell_value(order ? b : a, index_of)
      );
  
    
    document.querySelectorAll("th").forEach((th) =>
      th.addEventListener("click", () => {
        const table = th.closest("table");
        Array.from(table.querySelectorAll("tr:nth-child(n+2)"))
          .sort(
            check(
              Array.from(th.parentNode.children).indexOf(th),
              (this.order = !this.order)
            )
          )
          .forEach((tr) => table.appendChild(tr));
      })
    );
  };
  newSort();

const tmp = document.querySelector("#server_sort");
tmp.addEventListener("click", ()=>newsort());
//tmp.addEventListener("click", ()=>{
//    fetch("http://localhost:3001/sort").then(res=>console.log(res))
//})