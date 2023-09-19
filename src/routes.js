const {
  tambahBuku,
  tampilBuku,
  tampilBukuId,
  editBuku,
  hapusBuku,
} = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/books",
    handler: tambahBuku,
  },
  {
    method: "GET",
    path: "/books",
    handler: tampilBuku,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: tampilBukuId,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: editBuku,
  },
  {
    method: "DELETE",
    path: "/books/{id}",
    handler: hapusBuku,
  },
];

module.exports = routes;
