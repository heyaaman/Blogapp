import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function AddBlogCard() {
  const [blog, setBlog] = useState({ name: '', description: '', author: '' });

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted (no backend): ' + JSON.stringify(blog));
  };

  return (
    <Box sx={{ minWidth: 400, maxWidth: 600, mx: 'auto', mt: 6 }}>
      <Card variant="outlined" sx={{ borderRadius: 2, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center' }}>
            Add New Blog
          </Typography>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <TextField
              id="name"
              name="name"
              label="Blog Title"
              variant="outlined"
              value={blog.name}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              id="description"
              name="description"
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              value={blog.description}
              onChange={handleChange}
              required
              fullWidth
            />
            <TextField
              id="author"
              name="author"
              label="Author Name"
              variant="outlined"
              value={blog.author}
              onChange={handleChange}
              required
              fullWidth
            />
            <CardActions sx={{ justifyContent: 'center', mt: 2 }}>
              <Button type="submit" variant="contained" color="primary" size="large">
                Submit
              </Button>
            </CardActions>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AddBlogCard;
