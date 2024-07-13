import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import './styles.css'; // Ensure this import
import { Link } from 'react-router-dom';

const Post = ({ id,category, image }) => {
  return (
    <Link to={`/post/${id}`} style={{ textDecoration: 'none' }}>

    <Card
      variant="outlined"
      sx={{
        marginLeft: 10,
        width: 345,
        '--Card-radius': (theme) => theme.vars.radius.xs,
      }}
      className="card"
    >
      <CardContent orientation="horizontal" sx={{ alignItems: 'center', gap: 5 }} className="card-content">
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            size="sm"
            src="/static/logo.png"
            sx={{ marginTop: 1.5, border: '2px solid', borderColor: 'background.body' }}
          />
          <Typography fontWeight="lg" sx={{ marginLeft: 1 }}>{category}</Typography>
        </Box>
      </CardContent>
      <CardOverflow>
        <AspectRatio>
          <img src={image} alt={category} loading="lazy" />
        </AspectRatio>
      </CardOverflow>
      <CardContent orientation="horizontal" sx={{ alignItems: 'center', mx: -1 }} className="card-content actions">
        <IconButton variant="plain" color="neutral" size="sm">
          <FavoriteBorder />
        </IconButton>
        <IconButton variant="plain" color="neutral" size="sm">
          <BookmarkBorderRoundedIcon />
        </IconButton>
      </CardContent>
      <CardContent className="card-content">
        <Typography gutterBottom variant="h5" component="div">
          {category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a placeholder description.
        </Typography>
      </CardContent>
    </Card>
    </Link>

  );
};

export default Post;
