import React, { useEffect, useState } from "react";
import books from "../../api/API";
import Store from "../../Store/Store";


export default function Books() {

  let delBooks = Store(state => state.deleteBook)

  let [data, setData] = useState([])
  
  useEffect(() => {
    books.getBooks().then(res => setData(res))
  },[data])

  return(
    <>
      <ul className="books">
          {
            data.map((item, idnex) => {
              return(
                <li key={idnex+871} className="books__item">
                  <h3 className="books__title">{item.name}</h3>
                  <div>
                    <span className="books__span">{item.price}so'm</span>
                    <button onClick={() => delBooks(item.id)} type="button" className="btn btn-dark ms-3"><i className='bx bx-x'></i></button>
                  </div>
                </li>
              )
            })
          }
      </ul>
    </>
  )
}