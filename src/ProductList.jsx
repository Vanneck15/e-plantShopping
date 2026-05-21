import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';
import CartItem from './CartItem';

const plantsArray = [
    {
        category: "Air Purifying Plants",
        plants: [
            {
                name: "Snake Plant",
                image: "https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg",
                description: "Produces oxygen at night, improving air quality.",
                cost: "$15"
            },
            {
                name: "Spider Plant",
                image: "https://cdn.pixabay.com/photo/2018/07/11/06/47/chlorophytum-3530413_1280.jpg",
                description: "Filters formaldehyde and xylene from the air.",
                cost: "$12"
            },
            {
                name: "Peace Lily",
                image: "https://cdn.pixabay.com/photo/2019/06/12/14/14/peace-lilies-4269365_1280.jpg",
                description: "Removes mold spores and purifies the air.",
                cost: "$18"
            }
        ]
    },
    {
        category: "Aromatic Fragrant Plants",
        plants: [
            {
                name: "Lavender",
                image: "https://images.unsplash.com/photo-1611909023032-2d6b3134ecba?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Calming scent, used in aromatherapy.",
                cost: "$20"
            },
            {
                name: "Jasmine",
                image: "https://images.unsplash.com/photo-1592729645009-b96d1e63d14b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Sweet fragrance, promotes relaxation.",
                cost: "$18"
            }
        ]
    }
];

function ProductList({ onHomeClick }) {
    const [showCart, setShowCart] = useState(false);
    const [addedToCart, setAddedToCart] = useState({});
    
    const dispatch = useDispatch();
    const CartItems = useSelector(state => state.cart.items);

    const calculateTotalQuantity = () => { 
        return CartItems ? CartItems.reduce((total, item) => total + item.quantity, 0) : 0; 
    };

    const handleHomeClick = (e) => {
        e.preventDefault();
        onHomeClick();
    };

    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
    };

    const handleContinueShopping = (e) => {
        if (e) e.preventDefault();
        setShowCart(false);
    };

    const handleAddToCart = (product) => {
        dispatch(addItem(product)); 
        setAddedToCart((prevState) => ({
            ...prevState,
            [product.name]: true,
        }));
    };

    return (
        <div>
            <div className="navbar" style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '20px' }}>
                <div className="tag">
                    <div className="luxury">
                        <img src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png" alt="" style={{ width: '40px' }} />
                        <a href="/" onClick={(e) => handleHomeClick(e)} style={{ color: 'white', textDecoration: 'none' }}>
                            <div>
                                <h3 style={{ color: 'white', margin: 0 }}>Paradise Nursery</h3>
                                <i style={{ color: 'white', fontSize: '12px' }}>Where Green Meets Serenity</i>
                            </div>
                        </a>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '300px' }}>
                    <div>
                        <a href="#" onClick={(e) => handleContinueShopping(e)} style={{ color: 'white', fontSize: '22px', textDecoration: 'none' }}>
                            Plants
                        </a>
                    </div>
                    <div>
                        <a href="#" onClick={(e) => handleCartClick(e)} style={{ color: 'white', textDecoration: 'none' }}>
                            <h1 className='cart' style={{ margin: 0, position: 'relative', display: 'inline-block' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" height="45" width="45">
                                    <path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#faf9f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="10"></path>
                                </svg>
                                <span style={{ position: 'absolute', top: '-5px', right: '-10px', backgroundColor: '#333', color: 'white', borderRadius: '50%', padding: '2px 8px', fontSize: '14px' }}>
                                    {calculateTotalQuantity()}
                                </span>
                            </h1>
                        </a>
                    </div>
                </div>
            </div>
            
            {!showCart ? (
                <div className="product-grid" style={{ padding: '20px' }}>
                    {plantsArray.map((category, index) => (
                        <div key={index} style={{ marginBottom: '40px' }}>
                            <h2 style={{ color: '#4CAF50', borderBottom: '2px solid #ccc', paddingBottom: '10px' }}>
                                {category.category}
                            </h2>
                            <div className="product-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                                {category.plants.map((plant, plantIndex) => (
                                    <div className="product-card" key={plantIndex} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', width: '250px', textAlign: 'center', backgroundColor: '#fff' }}>
                                        <img 
                                            className="product-image" 
                                            src={plant.image} 
                                            alt={plant.name} 
                                            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
                                        />
                                        <div className="product-title" style={{ fontWeight: 'bold', margin: '10px 0', color: 'black' }}>{plant.name}</div>
                                        <div className="product-description" style={{ fontSize: '14px', color: '#666', height: '40px', overflow: 'hidden', marginBottom: '10px' }}>{plant.description}</div>
                                        <div className="product-cost" style={{ fontWeight: 'bold', color: '#4CAF50', marginBottom: '10px' }}>{plant.cost}</div> 
                                        <button
                                            className={`product-button ${addedToCart[plant.name] ? 'added' : ''}`}
                                            disabled={addedToCart[plant.name]}
                                            onClick={() => handleAddToCart(plant)}
                                            style={{ backgroundColor: addedToCart[plant.name] ? '#9e9e9e' : '#4CAF50', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '4px', cursor: addedToCart[plant.name] ? 'not-allowed' : 'pointer', width: '100%' }}
                                        >
                                            {addedToCart[plant.name] ? 'Added to Cart' : 'Add to Cart'}
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <CartItem onContinueShopping={handleContinueShopping} />
            )}
        </div>
    );
}

export default ProductList;