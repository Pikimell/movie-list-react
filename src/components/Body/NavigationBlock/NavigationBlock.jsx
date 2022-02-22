import React from 'react';
import {Button, Pagination} from "react-bootstrap";
import {setSelectPage} from "../../../store/FilmReducer";
import {useDispatch,useSelector} from "react-redux";

const NavigationBlock = ({selectPage,loadData}) => {
    const dispatch = useDispatch();
    const totalPages = useSelector(state => state.filmReducer.totalPages)
    let items = [];

    const getRange = () => {
        let min = 1
        let max = selectPage+5

        if(selectPage - 5 > 0) min = selectPage-5
        if(selectPage + 5 > totalPages) max = totalPages
        if(selectPage + 5 < 10) max = 10

        return { min, max}
    }

    for (let number = getRange().min; number <= getRange().max; number++) {
        items.push(
            <Pagination.Item key={number} active={number === selectPage} activeLabel={''}>
                {number}
            </Pagination.Item>,
        );
    }

    const loadNextPage = async() => {
        let page = selectPage+1
        dispatch(setSelectPage(page))
        await loadData()
    }

    const loadPreviousPage = async() => {
        let page = (selectPage>1) ? selectPage-1 : 1
        dispatch(setSelectPage(page))
        await loadData()
    }

    return (
        <div className={'navigationBlock'}>
            <Button variant="secondary" onClick={loadPreviousPage}>Previous</Button>
            <Pagination>{items}</Pagination>
            <Button variant="secondary" onClick={loadNextPage}>Next</Button>
        </div>
    );
};

export default NavigationBlock;