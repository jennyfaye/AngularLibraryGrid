import { Injectable } from '@angular/core';
import { BookModel } from '../components/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: BookModel[] = [
    {
      id: 1,
      name: "Harry Potter and the Philosopher's Stone",
      author:  "J.K. Rowling",
      imageUrl: "https://i.pinimg.com/736x/60/86/09/608609cb613363a4bec0992fd87c1f9f.jpg"
    },
    {
      id: 2,
      name: "The Riddle of the Sea",
      author:  "Jonne Kramer",
      imageUrl: "https://i.pinimg.com/736x/fe/a1/84/fea1846aed387d82b9ba9c168e19be53.jpg"
    },
    {
      id: 3,
      name: "Imagine Me",
      author:  "Tahereh Mafi",
      imageUrl: "https://i.pinimg.com/736x/e0/66/7f/e0667f5ba35fa70aa6b764da696554be.jpg"
    },
    {
      id: 4,
      name: "Little Women",
      author:  "Louisa May Alcott",
      imageUrl: "https://i.pinimg.com/736x/d8/a6/4f/d8a64f08bc3279063550e090878e1987.jpg"
    },
    {
      id: 5,
      name: "The New Girl",
      author:  "Jesse Q. Sutanto",
      imageUrl: "https://i.pinimg.com/736x/d6/e7/86/d6e7869c27a3a19003d461c3ec303824.jpg"
    },
    {
      id: 6,
      name: "Eight Perfect Murders",
      author:  "Peter Swanson",
      imageUrl: "https://i.pinimg.com/736x/fe/57/f5/fe57f539d8e014ea03a9f630685bb611.jpg"
    },
    {
      id: 7,
      name: "The Fact of a Body",
      author:  "Alex Marzano-Lesnevich",
      imageUrl: "https://i.pinimg.com/736x/e6/1d/26/e61d263856dd04d7676135e2fe975291.jpg"
    },
    {
      id: 8,
      name: "Again, But Better",
      author:  "Christine Riccio",
      imageUrl: "https://i.pinimg.com/736x/71/be/31/71be31ebb710931cf029581c6b019ae6.jpg"
    },
    {
      id: 9,
      name: "A Study in Drowning",
      author:  "Ava Reid",
      imageUrl: "https://i.pinimg.com/736x/a2/53/87/a253877ea0872780a1cf90e70b8ad56f.jpg"
    },
    {
      id: 10,
      name: "The Illusion of Simple",
      author:  "Charles Forrest Jones",
      imageUrl: "https://i.pinimg.com/736x/08/5c/25/085c2521dada2d536f00e48824112e2a.jpg"
    }
  ];

  getBook(): BookModel[] {
    return this.books;
  }
}

