import React, { useEffect, useState } from 'react'
import Card from "../Card/Card";
import InfiniteScroll from "react-infinite-scroll-component";

const Lazyload = () => {

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const totalLength = 50;


    const fetchData = async () => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${6 * page}&limit=7`);
        const result = await res.json();
        getPokemon(result.results);
    }

    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await fetch(item.url);
            const pok = await result.json();
            setData(state => {
                state = [...state, pok]
                return state;
            })
        })
    }

    const fetchMoreData = async () => {
        setPage(page + 1);
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${6 * page}&limit=7`);
        const result = await res.json();
        const pokdata = result.results;

        pokdata.map(async (item) => {
            const result = await fetch(item.url);
            const pok = await result.json();
            setData(state => {
                state = [...state, pok]
                return state;
            })
        })
    }

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [])


    return (
        <>
            <InfiniteScroll
                dataLength={data.length}
                next={fetchMoreData}
                hasMore={data.length < totalLength}
                loader={<h4 className='text-center'>Loading...</h4>}
            >
                <div className="container d-flex flex-wrap mt-4 justify-content-center mb-3">
                    {data.map((val, id) => {
                        return <Card key={id} val={val} />
                    })
                    }
                </div>
            </InfiniteScroll>

        </>
    )
}

export default Lazyload;