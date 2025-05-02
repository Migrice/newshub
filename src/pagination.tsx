// import { Article } from "./models";

// export class Paginator {
//   page: number;
//   size: number;

//   constructor(page: number = 1, size: number = -1) {
//     this.page = page;
//     this.size = size;
//   }

//   is_all() {
//     return this.page === 1 && this.size === -1;
//   }

//   get start() {
//     if (this.size < 0) {
//       throw new Error("Size must be a positive number");
//     }
//     return (this.page - 1) * this.size;
//   }

//   get end() {
//     return this.start + this.size;
//   }
// }

// export class Page {
//   items: Article[];
//   total: number;
//   page: number;
//   size: number;
//   pages: number;

//   constructor(
//     items: Article[],
//     total: number,
//     page: number,
//     size: number,
//     pages: number,
//   ) {
//     this.items = items;
//     this.total = total;
//     this.page = page;
//     this.size = size;
//     this.pages = pages;
//   }

//   static new(items: Article[], total: number, paginator: Paginator) {
//     let size = items.length;
//   }
// }
