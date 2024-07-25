import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../backend_services/firebaseconfig';
import './CollectionDetail.css'; // Create and import your CSS file for styling

const CollectionDetail = () => {
  const { id } = useParams();
  const [collection, setCollection] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        console.log(`Fetching collection with ID: ${id}`); // Debug log
        const docRef = doc(db, 'wardrobe_collections', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log('Document data:', docSnap.data()); // Debug log
          setCollection({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error('No such document!');
          setError('No such document!');
        }
      } catch (error) {
        console.error('Error fetching collection:', error);
        setError('Error fetching collection');
      }
    };

    fetchCollection();
  }, [id]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!collection) {
    return <div>Loading...</div>;
  }

  return (
    <div className="collection-detail-container">
      <div className="profile-section">
        <img src={collection.profile_image} alt="Profile" className="profile-image" />
        <h2><b>{collection.name}</b></h2>
        <br></br>
        <h2>{collection.title}</h2>
      </div>
      <div className="images-section">
        {collection.images.map((image, index) => (
          <div className="image-card" key={index}>
            <img src={image} alt={`Image ${index + 1}`} className="collection-image" />
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionDetail;
