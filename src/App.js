import React from 'react';
import { Content } from './components/Content';
import { Header } from './components/Header';
import data from './travel-data'
import './style.css'

function App() {
  const content = data.map(card => {
    return (
      <Content
        key={card.id}
        {...card}
      />
    )
  })
  return (
    <div>
      <Header />
      {content}
    </div>
  );
}

export default App;
