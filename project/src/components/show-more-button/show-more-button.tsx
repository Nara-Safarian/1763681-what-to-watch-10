type ShowMoreButtonProps = {
  onClick: () => void;
}


function ShowMoreButton({onClick}: ShowMoreButtonProps): JSX.Element {
  return (
    <button onClick={onClick} className="catalog__button" type="button">Show more</button>
  );
}

export default ShowMoreButton;
