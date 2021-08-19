import { Button } from './Button';
import { Movie, Genre }  from '../@types/custom';

import '../styles/sidebar.scss';

interface SideBarProps {
  genres: Array<Genre>;
  setSelectedGenreId: Function;
  selectedGenreId: number;
}


export function SideBar(props: SideBarProps) {

  const { genres, setSelectedGenreId, selectedGenreId } = props;


  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  return (
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>

  </nav>
  );

}