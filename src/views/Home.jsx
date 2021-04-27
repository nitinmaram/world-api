import React, { useEffect, useState } from "react";

import { Container,Header,Pagination } from 'semantic-ui-react'

import Table from '../components/Table';
import Year from '../components/Year';

import { getPopulation } from '../services/fetchData';
import { mapData } from '../helpers/transformData';

const Home =  () => {

    const [tableData, setTableData] = useState("");
    const [yearInput, setYearInput]  = useState("2019");
    useEffect(() => {
        getPopulation().then(res => {
            let transformedData = mapData(res);
            setTableData(transformedData)
        })
      }, []);

    const handleChange = (e) => {
        setYearInput(e.target.value)
    }

    const handlePageChange  = (e, {activePage} ) => {
      console.log(e, {activePage})
        getPopulation(yearInput, activePage).then(res => {
          let transformedData = mapData(res);
          setTableData(transformedData)
        })
      }

    const onButtonClick = () => {
      getPopulation(yearInput).then(res => {
        let transformedData = mapData(res);
        setTableData(transformedData)
      })
    };

return (
    <Container  textAlign='justified'>
        <Year 
        handleChange={handleChange} 
        yearInput={yearInput} 
        onButtonClick={onButtonClick} 
      />
      <Header data-testid="test" as='h1'>Population vs GDP ??</Header>
      {tableData && <>
      <Pagination activePage = {tableData.pageData.page} 
      totalPages={tableData.pageData && tableData.pageData.pages} 
      onPageChange = {handlePageChange}/>
      <Table tableData={tableData}/>
      </>}
    </Container>
)
}


export default Home