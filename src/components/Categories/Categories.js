import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'UI/UX Design',
      description: 'Professional user interface and experience design services',
      icon: '🎨',
      image: 'https://images.unsplash.com/photo-1517940310602-26535839fe84?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Web Development',
      description: 'Custom website and application development',
      icon: '💻',
      image: 'https://images.unsplash.com/photo-1517940310602-26535839fe84?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Business Consulting',
      description: 'Expert business strategy and growth consulting',
      icon: '💼',
      image: 'https://images.unsplash.com/photo-1517940310602-26535839fe84?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'Digital Marketing',
      description: 'SEO, social media, and content marketing services',
      icon: '📈',
      image: 'https://images.unsplash.com/photo-1517940310602-26535839fe84?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      name: 'BEE Consulting',
      description: 'Specialized B-BBEE certification and compliance services',
      icon: '🤝',
      image: 'https://images.unsplash.com/photo-1517940310602-26535839fe84?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      name: 'Township Economy',
      description: 'Business development for township-based enterprises',
      icon: '🏠',
      image: 'https://images.unsplash.com/photo-1517940310602-26535839fe84?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  return (
    <div className="categories">
      <h1>Categories</h1>
      <div className="categories-grid">
        {categories.map(category => (
          <Link to={`/category/${category.id}`} key={category.id} className="category-card">
            <div className="category-image">
              <img src={category.image} alt={category.name} />
            </div>
            <div className="category-content">
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <span className="category-icon">{category.icon}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
