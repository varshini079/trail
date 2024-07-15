import React, { useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../backend_services/firebaseconfig';
import './TopWardrobes.css'; // Import your CSS file for styling

const TopCollections = () => {
  const [topCollections, setTopCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      const collectionsRef = collection(db, 'wardrobe_collections');
      const collectionsSnapshot = await getDocs(collectionsRef);
      const collections = collectionsSnapshot.docs.map(doc => {
        const data = doc.data();
        const score = 4 * data.likes + 2 * data.views;
        return { id: doc.id, ...data, score };
      });

      const sortedCollections = collections.sort((a, b) => b.score - a.score);
      setTopCollections(sortedCollections);
    };

    fetchCollections();
  }, []);

  return (
    <div className="top-collections-container">
      <h2 className="header">Top Collections</h2>
      <div className="collection-list">
        {topCollections.map((collection) => (
          <div className="collection-box" key={collection.id}>
            <div className="collection-header">
              <img src={collection.profile_image} alt="Profile" className="profile-image" />
              <div className="collection-details">
                <h3>{collection.name}</h3>
              </div>
            </div>
            <ImageList sx={{ width: '100%', height: 450 }} cols={3} rowHeight={164}>
              {collection.images.map((image, index) => (
                <ImageListItem key={index}>
                  <img
                    srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${image}?w=164&h=164&fit=crop&auto=format`}
                    alt={`Image ${index + 1}`}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCollections;
