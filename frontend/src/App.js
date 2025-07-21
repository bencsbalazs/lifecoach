import React, { useState } from 'react';
import './App.css';

const menuData = [
  { title: "Kezdés", sub: Array.from({ length: 16 }, (_, i) => `Kezdés ${i + 1}`) },
  { title: "Tanulás", sub: Array.from({ length: 16 }, (_, i) => `Tanulás ${i + 1}`) },
  { title: "Munka", sub: Array.from({ length: 16 }, (_, i) => `Munka ${i + 1}`) },
  { title: "Pihenés", sub: Array.from({ length: 16 }, (_, i) => `Pihenés ${i + 1}`) },
  { title: "Kapcsolatok", sub: Array.from({ length: 16 }, (_, i) => `Kapcsolat ${i + 1}`) },
  { title: "Önismeret", sub: Array.from({ length: 16 }, (_, i) => `Önismeret ${i + 1}`) },
];

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="container py-4">
      <h2 className="text-center mb-5">Életút Timeline</h2>

      <div className="timeline-container mb-5">
        <div className="timeline-line"></div>
        <div className="d-flex overflow-auto">
          {menuData.map((menu, index) => (
            <div
              key={index}
              className={`timeline-node mt-2 text-center px-3 ${selectedIndex === index ? 'active' : ''}`}
              onClick={() => setSelectedIndex(index)}
            >
              <div className="timeline-dot mb-2"></div>
              <div className="btn btn-sm btn-outline-primary">{menu.title}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="row">
        {menuData[selectedIndex].sub.map((item, i) => (
          <div className="col-6 col-md-3 mb-3" key={i}>
            <div className="border p-3 text-center h-100 bg-light rounded shadow-sm">
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
