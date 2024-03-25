import React, { useState, useEffect } from "react";
import axios from "axios"; // You may need axios or any other library for making HTTP requests

const InfiniteScrollPage = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(page * 5);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      console.log(startIndex, endIndex);

      console.log(
        window.innerHeight + document.documentElement.scrollTop,
        document.documentElement.offsetHeight,
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight || loading,
        loading
      );

      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight &&
        loading
      ) {
        return;
      }
      fetchData();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("lazy.json");
      console.log("response=====> ", response);
      const newItems = response.data.items?.slice(startIndex, endIndex);
      console.log("newItems=====> ", newItems);
      setItems((prevItems) => [...prevItems, ...newItems]);
      setPage((prevPage) => prevPage + 1);
      setTimeout(() => {
        setLoading(false);
        setStartIndex(endIndex);
        setEndIndex(endIndex + 5);
      }, 3000);
      if (newItems.length === 0) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Infinite Scroll Page</h1>
      <div style={{ minHeight: "800px" }}>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "20px",
              border: "1px solid #ccc",
              margin: "10px",
            }}
          >
            {item.name}
          </div>
        ))}
        {loading && <div>Loading...</div>}
        {!loading && hasMore && <div>Scroll down for more</div>}
        {!hasMore && <div>No more items to load</div>}
      </div>
    </div>
  );
};

export default InfiniteScrollPage;
