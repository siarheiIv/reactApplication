import React from 'react';
import Link from 'next/link';
import EditMovie from '../editMovie/index';

const Movie = (props) => {
  const { description } = props;
  return (
        <article className="movie">
            <Link href={`/film/${description.id}`}>
                <img src={description.poster_path} alt="" className="movie__image" />
            </Link>
            <EditMovie description={description} />
            <div className="movie__description">
                <div>
                    <h2 className="movie__title">{description.title}</h2>
                </div>
                <p className="movie__year">{description.release_date.slice(0, 4)}</p>
            </div>
        </article>
  );
};

export default Movie;
