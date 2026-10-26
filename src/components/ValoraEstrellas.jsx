import { useState } from 'react';

export default function ValoraEstrellas() {
  const [estrellas, setEstrellas] = useState(0);

  return (
    <div style={{ fontSize: '2rem', cursor: 'pointer' }}>
      {[1, 2, 3, 4, 5].map((num) => (
        <span key={num} onClick={() => setEstrellas(num)}>
          {num <= estrellas ? '★' : '☆'}
        </span>
      ))}
      {estrellas > 0 && <span style={{ fontSize: '1rem', marginLeft: '10px' }}>({estrellas}/5)</span>}
    </div>
  );
}