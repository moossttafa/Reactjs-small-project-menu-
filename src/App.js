import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
// الخاصيه new set خاصية بتخليني اخلي لكل كاتيجوري زرار ومش هتكرر الازرار لو فى تشابه بطريقه داينمك
const allCategories = ['all' , ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItem, setMenuItem] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItem = (category) => {

    if(category === 'all'){
      setMenuItem(items);
      return;
    }

    const newItems = items.filter((item) =>  item.category === category )
    setMenuItem(newItems);
  };

  return(
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItem}/>
        <Menu  items={menuItem}/>
      </section>
    </main>
  )
}

export default App;
