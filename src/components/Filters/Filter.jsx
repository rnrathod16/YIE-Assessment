import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import "./Filter.css"
import ReactPaginate from 'react-paginate';

const Filter = () => {

    const [data, setData] = useState([]);
    const [searchdata, setSearchData] = useState([]);
    const [usearchdata, setuSearchData] = useState([]);


    const [query, setquery] = useState('');

    const handelInp = (e) => {
        const { value } = e.target;
        setquery(value);
    }

    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=6&limit=6")

    const fetchData = async () => {
        const res = await fetch(url);
        const result = await res.json();
        getPokemon(result.results);
        setuSearchData([
            ...new Map(searchdata.map((item) => [item["name"], item])).values(),
        ]);
    }

    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await fetch(item.url);
            const pok = await result.json();
            setData(state => {

                state = [...state, pok]
                return state;
            })

            setSearchData(state => {
                state = [...state, pok]
                return state;
            });
        })
    }

    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1;
        setData([]);
        setUrl(`https://pokeapi.co/api/v2/pokemon?offset=${6 * currentPage}&limit=6`)
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [url])


    return (
        <>
            <div className="container mt-1 mb-1">
                <form className='container'>
                    <input className="form-control mr-sm-2 text-center" type="search" placeholder='Search with Search bar' aria-label="Search" name="search" value={query} onChange={handelInp} />
                </form>
            </div>
            <div className="container d-flex flex-wrap mt-4 justify-content-center mb-3">
                {query === "" ? data.map((val, id) => {
                    return <Card key={id} val={val} />
                    // eslint-disable-next-line
                }) : usearchdata.filter((value) => {
                    if (query === "") {
                        return value;
                    } else if (value.name.toLowerCase().includes(query.toLowerCase())) {
                        return value
                    }
                }).map((val, id) => {
                    return <Card key={id} val={val} />
                })
                }
            </div>

            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"..."}
                pageCount={10}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </>
    )
}

export default Filter