import classes from './ProductIcon.module.css';

interface IProductIconProps {
  width?: number;
  height?: number;
}
const ProductIcon: React.FC<IProductIconProps> = ({ width = 30, height = 30 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={width} width={height} viewBox="0 0 48 48" className={classes.icon}>
      <path d="M6 40.9V16.3q-.7-.1-1.35-1Q4 14.4 4 13.35V7q0-1.15.9-2.075Q5.8 4 7 4h34q1.15 0 2.075.925Q44 5.85 44 7v6.35q0 1.05-.65 1.95-.65.9-1.35 1v24.6q0 1.15-.925 2.125Q40.15 44 39 44H9q-1.2 0-2.1-.975Q6 42.05 6 40.9Zm3-24.55V41h30V16.35Zm32-3V7H7v6.35Zm-23 13.5h12v-3H18ZM9 41V16.35 41Z" />
    </svg>
  );
};

export default ProductIcon;