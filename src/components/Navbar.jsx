import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <h2 style={styles.title}>Blog Dashboard</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.homeButton}>Home</Link>
        <Link to="/addblog" style={styles.addButton}>Add Blog</Link>
      </div>
    </nav>
  );
}


const styles = {
  navbar: {
    backgroundColor: '#111827', 
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', 
  },
  title: {
    margin: 0,
    fontSize: '1.4rem',
    fontWeight: '600',
    letterSpacing: '0.5px',
  },
  links: {
    display: 'flex',
    gap: '1rem',
  },
  homeButton: {
    padding: '0.5rem 1.25rem',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '6px',
    backgroundColor: '#4f46e5', 
    transition: 'all 0.2s ease',
    fontWeight: '500',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      backgroundColor: '#4338ca', 
      transform: 'translateY(-1px)',
    },
  },
  addButton: {
    padding: '0.5rem 1.25rem',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '6px',
    backgroundColor: '#10b981', 
    transition: 'all 0.2s ease',
    fontWeight: '500',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      backgroundColor: '#0d9f6e', 
      transform: 'translateY(-1px)',
    },
  },
};

export default Navbar;
