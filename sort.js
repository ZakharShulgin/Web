function sort(value) {
    let arr = Array.from(table.rows);
    arr = arr.slice(1);
    arr.sort((a, b) => {
        let str = a.cells[value].textContent;
        let str2 = b.cells[value].textContent;
        return str.localeCompare(str2);
    });
    table.tBodies[0].append(...arr);
};