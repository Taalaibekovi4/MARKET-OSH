import classes from './CategoryIcon.module.css';

interface ICategoryIconProps {
  width?: number;
  height?: number;
}
const CategoryIcon: React.FC<ICategoryIconProps> = ({ width = 30, height = 30 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height={width} width={height} viewBox="0 0 48 48" className={classes.icon}>
      <path d="m13.05 21.7 11-17.7 11 17.7ZM35.3 44q-3.7 0-6.2-2.5t-2.5-6.2q0-3.7 2.5-6.2t6.2-2.5q3.7 0 6.2 2.5t2.5 6.2q0 3.7-2.5 6.2T35.3 44ZM6 42.75v-15.2h15.2v15.2ZM35.3 41q2.4 0 4.05-1.65T41 35.3q0-2.4-1.65-4.05T35.3 29.6q-2.4 0-4.05 1.65T29.6 35.3q0 2.4 1.65 4.05T35.3 41ZM9 39.75h9.2v-9.2H9Zm9.45-21.05h11.2l-5.6-9.05Zm5.6 0ZM18.2 30.55Zm17.1 4.75Z" />
    </svg>
  );
};

export default CategoryIcon;