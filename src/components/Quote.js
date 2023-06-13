import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.api-ninjas.com/v1/quotes?category=movies', {
          headers: { 'X-Api-Key': 'V4+eWSuMCPc74dfwv34NeA==cENqOKyHT3PDeeoW' },
        });
        if (response.ok) {
          const data = await response.json();
          const dataBody = `${data[0].quote} - ${data[0].author}`;
          setPost(dataBody);
        } else {
          throw new Error('Error Retrieving Data');
        }
      } catch (error) {
        setError('Error Retrieving Data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="quotation">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div>
          <p>{post}</p>
        </div>
      )}
    </div>
  );
};

export default Quote;
