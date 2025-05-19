import { useEffect, useState } from 'react';
import { Box, Grid, Card, CardContent, CardActions, Typography, Button, CircularProgress,} from '@mui/material';

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        setBlogs(data.slice(0, 12));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>    
    </Box>);
  return (
    <Box sx={{ px: 4, py: 6, backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      <Typography variant="h4" align="center" gutterBottom>
        New Blog 📄
      </Typography>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {blogs.map(blog => (
            <Grid item xs={12} sm={6} md={4} key={blog.id}>
              <Card variant="outlined" sx={{ height: '100%', borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" component="div" gutterBottom>
                    {blog.title.split(' ').join(bull)}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', mb: 1 }}>
                    Blog ID: {blog.id}
                  </Typography>
                  <Typography variant="body2">
                    {blog.body}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default Home;
