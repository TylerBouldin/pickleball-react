
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import Modal from '../components/Modal.jsx';
import '../css/Shop.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

function Shop() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/products`);
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError('Unable to load products. Please try again later.');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  if (loading) {
    return (
      <div className="content-wrapper">
        <h2>Shop Pickleball Equipment</h2>
        <p className="loading-message">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="content-wrapper">
        <h2>Shop Pickleball Equipment</h2>
        <p className="error-message">{error}</p>
      </div>
    );
  }

  return (
    <div className="content-wrapper">
      <h2>Shop Pickleball Equipment</h2>
      <p>Find the perfect gear to improve your game. We offer high-quality paddles, balls, shoes, and accessories for players of all skill levels.</p>
      
      <div className="shop-grid">
        {products.map(product => (
          <div key={product.id} onClick={() => handleProductClick(product)}>
            <ProductCard 
              name={product.name}
              imgName={`${process.env.PUBLIC_URL}/images/${product.image}`}
              price={product.price}
              description={product.description}
              skillLevel={product.skillLevel}
            />
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal} title={selectedProduct?.name || ''}>
        {selectedProduct && (
          <div>
            <img 
              src={`${process.env.PUBLIC_URL}/images/${selectedProduct.image}`} 
              alt={selectedProduct.name}
            />
            <div className="modal-info-grid">
              <div className="modal-info-item">
                <strong>Price</strong>
                <span>{selectedProduct.price}</span>
              </div>
              <div className="modal-info-item">
                <strong>Skill Level</strong>
                <span>{selectedProduct.skillLevel}</span>
              </div>
            </div>
            <h3>Description</h3>
            <p>{selectedProduct.description}</p>
            <h3>Details</h3>
            <p>{selectedProduct.detailedDescription}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Shop;


