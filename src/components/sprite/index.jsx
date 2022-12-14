import sprite from './icons.svg';

const Sprite = ({ height, width, style, className, id, onClick }) => {
  return (
    <svg
      height={height}
      width={width}
      viewBox={`0 0 ${width} ${height}`}
      style={{ ...style }}
      className={className || ''}
      onClick={onClick}
    >
      <use href={`${sprite}#${id}`} />
    </svg>
  )
}

export default Sprite
