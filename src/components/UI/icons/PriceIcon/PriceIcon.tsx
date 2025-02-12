interface IPriceIconProps {
  width?: number;
  height?: number;
  filled?: boolean;
  fill?: string;
}
const PriceIcon: React.FC<IPriceIconProps> = ({ width = 20, height = 20, filled = false, fill = '#222222' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={width}
      width={height}
      viewBox="0 0 48 48"
      fill={filled ? '#f44336' : fill}
    >
      <path d="M25.8 44.4q-.7 0-1.325-.2t-1.175-.75L4.55 24.7q-.55-.55-.75-1.175-.2-.625-.2-1.325V7q0-1.45.975-2.425Q5.55 3.6 7 3.6h15.2q.7 0 1.375.2t1.225.75L43.45 23.2q1.1 1.1 1.1 2.5t-1.1 2.55l-15.2 15.2q-.45.45-1.1.7-.65.25-1.35.25Zm.1-3.3 15.2-15.2L22.2 7H7v15.2ZM12.25 14.8q1.05 0 1.825-.775.775-.775.775-1.825 0-1.05-.775-1.825Q13.3 9.6 12.25 9.6q-1.05 0-1.825.775-.775.775-.775 1.825 0 1.05.775 1.825.775.775 1.825.775ZM7 7Z" />
    </svg>
  );
};

export default PriceIcon;