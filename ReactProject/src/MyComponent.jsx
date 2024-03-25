import React, { useState, useEffect, Suspense } from 'react';

// Dummy data for our list
const dummyData = [
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
  'Item 5',
  // Add more items as needed...
];

// Component that represents a single list item
const ListItem = ({ item }) => {
  return <div>{item}</div>;
};

// Lazy loaded component for the list
const LazyList = React.lazy(() => import('./Assign3'));

const MyComponent = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setItems(dummyData);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <h1>List of Items</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Suspense fallback={<div>Loading list...</div>}>
          <LazyList items={items} />
        </Suspense>
      )}
    </div>
  );
};

export default MyComponent;
