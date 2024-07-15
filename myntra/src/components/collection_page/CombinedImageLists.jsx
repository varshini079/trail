import React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

// Define the first image list component
function TitlebarBelowMasonryImageList() {
  const handleClick = (index) => {
    // Navigate to the detail page with wardrobe and index
    window.location.href = `/detail/wardrobe1/${index}`;
  };

  return (
    <Box sx={{ width: '100%', bgcolor: '#f0f0f0', padding: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <img src="https://via.placeholder.com/50" alt="Profile 1" style={{ borderRadius: '50%', width: 80, height: 80, marginRight: 16 }} />
        <div>
          <h3>User123</h3>
          <h2>Wardrobe 1</h2>
        </div>
      </Box>
      <Box sx={{ width: '100%', height: 450, overflowY: 'scroll' }}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData1.map((item, index) => (
            <ImageListItem key={item.img} onClick={() => handleClick(index)} sx={{ cursor: 'pointer' }}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar position="below" title={item.author} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
}

// Define the second image list component
function QuiltedImageList() {
  const handleClick = (index) => {
    // Navigate to the detail page with wardrobe and index
    window.location.href = `/detail/wardrobe2/${index}`;
  };

  return (
    <Box sx={{ width: '100%', bgcolor: '#e0e0e0', padding: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
        <img src="https://via.placeholder.com/50" alt="Profile 2" style={{ borderRadius: '50%', width: 80, height: 80, marginRight: 16 }} />
        <div>
          <h3>User456</h3>
          <h2>Wardrobe 2</h2>
        </div>
      </Box>
      <ImageList
        sx={{ width: '100%', height: 450 }}
        variant="quilted"
        cols={4}
        rowHeight={121}
      >
        {itemData2.map((item, index) => (
          <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1} onClick={() => handleClick(index)} sx={{ cursor: 'pointer' }}>
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

// Define the data for the first image list
const itemData1 = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
    author: 'swabdesign',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
    author: 'Pavel Nekoranec',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
    author: 'Charles Deluvio',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
    author: 'Christian Mackie',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
    author: 'Darren Richardson',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
    author: 'Taylor Simpson',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
    author: 'Ben Kolde',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
    author: 'Philipp Berndt',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
    author: 'Jen P.',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
    author: 'Douglas Sheppard',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
    author: 'Fi Bell',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
    author: 'Hutomo Abrianto',
  },
];

// Function to set image src and srcSet attributes
function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
  };
}

// Define the data for the second image list
const itemData2 = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    cols: 2,
  },
];

// Define the main component that combines both lists with profiles
export default function CombinedImageLists() {
  return (
    <Box sx={{ padding: 2, textAlign: 'center' }}>
      <h1>Collections</h1>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ width: '50%', padding: 2, bgcolor: '#f0f0f0' }}>
          <TitlebarBelowMasonryImageList />
        </Box>
        <Box sx={{ width: '50%', padding: 2, bgcolor: '#e0e0e0' }}>
          <QuiltedImageList />
        </Box>
      </Box>
    </Box>
  );
}
