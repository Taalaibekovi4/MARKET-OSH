import classes from './CartIcon.module.css';

interface ICartIconProps {
  width?: number;
  height?: number;
  filled?: boolean;
  fill?: string;
}
const CartIcon: React.FC<ICartIconProps> = ({ width = 20, height = 20, filled = false, fill = '#222222' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={width}
      width={height}
      viewBox="0 0 48 48"
      className={classes.icon}
      fill={fill}
    >
      {filled ? (
        <path d="M14.35 43.95q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.45 0 2.525 1.05t1.075 2.55q0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm20 0q-1.5 0-2.55-1.05-1.05-1.05-1.05-2.55 0-1.5 1.05-2.55 1.05-1.05 2.55-1.05 1.45 0 2.525 1.05t1.075 2.55q0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm-22.6-33 5.5 11.4h14.4l6.25-11.4Zm-1.5-3H39.7q1.6 0 2.025.975.425.975-.275 2.175L34.7 23.25q-.5.85-1.4 1.475-.9.625-1.95.625H16.2l-2.8 5.2h24.55v3h-24.1q-2.1 0-3.025-1.4-.925-1.4.025-3.15l3.2-5.9L6.45 7h-3.9V4H8.4Zm7 14.4-5.5-11.4H37.9l-6.25 11.4Z" />
      ) : (
        <path d="M14.35 44.1q-1.5 0-2.55-1.075-1.05-1.075-1.05-2.575 0-1.45 1.05-2.5t2.55-1.05q1.45 0 2.525 1.05t1.075 2.55q0 1.5-1.05 2.55-1.05 1.05-2.55 1.05Zm20 0q-1.5 0-2.55-1.075-1.05-1.075-1.05-2.575 0-1.45 1.05-2.5t2.55-1.05q1.45 0 2.525 1.05t1.075 2.55q0 1.5-1.05 2.55-1.05 1.05-2.55 1.05ZM12 11.1l5.25 10.95h14.4l6-10.95Zm-1.65-3.3h29.1q1.85 0 2.3 1.1.45 1.1-.3 2.5L34.9 23.2q-.55.85-1.475 1.5t-2.025.65H16.35l-2.7 5.05H38.1v3.3H13.85q-2.2 0-3.15-1.475-.95-1.475.05-3.275l3.15-5.85L6.35 7.15H2.4v-3.3h6.1Zm6.9 14.25h14.4Z" />
      )}
    </svg>
  );
};

export default CartIcon;