interface IFavoriteIconProps {
  width?: number;
  height?: number;
  filled?: boolean;
  fill?: string;
}
const DeliveryIcon: React.FC<IFavoriteIconProps> = ({ width = 20, height = 20, filled = false, fill = '#222222' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={width}
      width={height}
      viewBox="0 0 48 48"
      fill={filled ? '#f44336' : fill}
    >
      <path d="M11.3 40.25q-2.5 0-4.25-1.725t-1.8-4.175H1.7v-23.2q0-1.4 1.025-2.425T5.15 7.7H34.1v8.25h5.15l7.05 9.35v9.05h-3.7q-.05 2.45-1.8 4.175-1.75 1.725-4.25 1.725-2.45 0-4.225-1.725Q30.55 36.8 30.55 34.35H17.3q-.05 2.45-1.8 4.175-1.75 1.725-4.2 1.725Zm-.05-3.15q1.2 0 2.05-.85.85-.85.85-2.05 0-1.2-.85-2.05-.85-.85-2.05-.85-1.2 0-2.05.85-.85.85-.85 2.05 0 1.2.85 2.05.85.85 2.05.85Zm-6.1-6.2H6.3q.85-1.25 2.125-2.025Q9.7 28.1 11.2 28.1q1.55 0 2.85.775T16.2 30.9h14.45V11.15H5.15Zm31.4 6.2q1.2 0 2.05-.85.85-.85.85-2.05 0-1.2-.85-2.05-.85-.85-2.05-.85-1.2 0-2.05.85-.85.85-.85 2.05 0 1.2.85 2.05.85.85 2.05.85ZM34.1 26.75h9l-5.55-7.4H34.1Zm-16.15-5.2Z" />
    </svg>
  );
};

export default DeliveryIcon;