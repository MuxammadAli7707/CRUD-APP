import produce from 'immer';
import create from 'zustand';
import books from '../api/API';

const Store = create((set) => ({
  addBook: (item) => 
    set(
      produce((state) => {
        books.sendBooks(item)
      })
    ),
    deleteBook: (id) => {
      set(
        produce((state) => {
          books.deleteBooks(id)
        })
      )
    }
}));

export default Store;