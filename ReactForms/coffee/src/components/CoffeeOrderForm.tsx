
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CoffeeOrder } from '../models/CoffeeOrder';
import './CoffeeOrderForm.css';
import coffeeImg from '../assets/coffee.png'; // adjust path as needed


interface Props {
  onSubmit: (data: CoffeeOrder) => void;
}

export const CoffeeOrderForm: React.FC<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset  } = useForm<CoffeeOrder>();

  const onValid: SubmitHandler<CoffeeOrder> = data => {
    onSubmit(data);
    reset(); // Reset the form after submission
  };

  return (
    <div className="coffee-container">

    <form className="coffee-form" onSubmit={handleSubmit(onValid)}>
      <img src={coffeeImg} alt="Coffee" className="coffee-image" />
       <h2>Order Your Coffee</h2>
      {/* Coffee Type */}
      <div className="form-group">
        <label>Type:</label>
        <select {...register('type', { required: 'Please select a coffee type' })}>
          <option value="">-- Select --</option>
          <option value="espresso">Espresso</option>
          <option value="cappuccino">Cappuccino</option>
          <option value="latte">Latte</option>
          <option value="americano">Americano</option>
        </select>
        {errors.type && <span className="error">{errors.type.message}</span>}
      </div>

      {/* Flavor */}
      <div className="form-group">
        <label>Flavor:</label>
        <select {...register('flavor', { required: 'Please choose a flavor' })}>
          <option value="">-- Select --</option>
          <option value="none">None</option>
          <option value="vanilla">Vanilla</option>
          <option value="caramel">Caramel</option>
          <option value="hazelnut">Hazelnut</option>
        </select>
        {errors.flavor && <span className="error">{errors.flavor.message}</span>}
      </div>

      {/* Size */}
      <div className="form-group">
        <label>Size:</label>
        <select {...register('size', { required: 'Please select a size' })}>
          <option value="">-- Select --</option>
          <option value="short">Short</option>
          <option value="tall">Tall</option>
          <option value="grand">Grand</option>
        </select>
        {errors.size && <span className="error">{errors.size.message}</span>}
      </div>

      {/* Strength */}
      <div className="form-group">
        <label>Strength (%):</label>
        <input
          type="number"
          {...register('strength', {
            required: 'Please enter strength',
            min: { value: 0, message: 'Strength must be at least 0' },
            max: { value: 100, message: 'Strength cannot exceed 100' },
          })}
        />
        {errors.strength && <span className="error">{errors.strength.message}</span>}
      </div>

      <br />
      <button className="submit-btn" type="submit">Submit Order</button>
      </form>
         <div className="coffee-image">      
    </div>
  </div>
  );
};

