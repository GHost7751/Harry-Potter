import React, { FC, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { fetchCharacters } from '../../Service/fetchCharacters';
import { usePagination } from '../Pagination/Pagination';
import Spinner from '../Spinner/Spinner';
import { Character } from './CharacterCard';

const Characters:FC = () => {
    const [value,setValue] = useState<Array<any>>([]);
    const [loading,setLoading] = useState<boolean>(false);

    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
      } = usePagination({
        contentPerPage: 30,
        count: value.length,
      });
      const fetchChar =  async () : Promise<void> => {
        setLoading(true)  
        setValue(await fetchCharacters())
    }
    useEffect(() => {
        fetchChar()
    },[])
    
    
    return (
        <div className='container content'>
        <br />
        <div className='movies'>
            
            {value.length ? (value
                .slice(firstContentIndex, lastContentIndex)
                .map((characters) => <Character {...characters} />)

            ) : (
                <Spinner />
            )
               
            }

         </div>
            <div className="pagination">
                <Button onClick={prevPage} className="page">
                    &larr;
                </Button>
                <br />
                {/* @ts-ignore */}
                {[...Array(totalPages).keys()].map((el) => (
                    <Button
                        onClick={() => setPage(el + 1)}
                        key={el}
                        className={`page ${page === el + 1 ? "active" : ""}`}
                    >
                        {el + 1}
                    </Button>
                ))}
                <br />
                <Button onClick={nextPage} className="page">
                    &rarr;
                </Button>
            </div>
    </div>
    );
};

export  {Characters};