import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Tâche 3 : Calculer le coût de tous les articles dans le panier
  const calculateTotalAmount = () => {
    let total = 0; // Initialise la variable totale

    cart.forEach(item => { // Itère sur le tableau avec forEach
      const quantity = item.quantity; // Extrait la quantité
      
      // Convertit la chaîne cost (ex: "$15") en nombre et la multiplie par la quantité
      const costNumber = parseFloat(item.cost.substring(1));
      const itemTotal = costNumber * quantity;

      total += itemTotal; // Ajoute la valeur au total cumulatif
    });

    return total; // Retourne le montant final calculé
  };

  // Tâche 3 : Continuer à magasiner
  const handleContinueShopping = (e) => {
    if (e) {
      e.preventDefault(); 
    }
    onContinueShopping(e); // Appelle la fonction passée par le composant parent
  };

  // Tâche 3 : Incrémenter le nombre d'une plante
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // Tâche 3 : Décrémenter le nombre d'une plante
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      // Si la quantité tombe à 0, on supprime l'article du panier
      dispatch(removeItem(item.name));
    }
  };

  // Tâche 3 : Supprimer une plante du panier complètement
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Tâche 3 : Calculer le sous-total pour chaque type de plante
  const calculateTotalCost = (item) => {
    const costNumber = parseFloat(item.cost.substring(1));
    return costNumber * item.quantity;
  };

  // Tâche 3 : Passer à la caisse (Optionnel)
  const handleCheckoutShopping = (e) => {
    e.preventDefault();
    alert('Functionality to be added for future reference');
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;