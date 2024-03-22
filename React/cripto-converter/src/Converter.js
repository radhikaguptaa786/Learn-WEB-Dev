import React, { useEffect,useState } from 'react'
import {Button, Card, Select,Form,Input} from 'antd';
import { FaBeer, FaCoins } from "react-icons/fa";
function Converter() {

    const apiurl='https://api.coingecko.com/api/v3/exchange_rates';

    const defaultFirstSelectValue="Bitcoin";
    const defaulSecondSelectValue="Ether";

    const [cryptoList,setcryptoList]=useState([]);
   const [inputValue,setInputValue]=useState("0");
   const [firstSelect,setFirstSelect]=useState(defaultFirstSelectValue);
   const [secondSelect,setSecondSelect]=useState(defaulSecondSelectValue);
   const [result,setResult]=useState("0");
    useEffect(() =>
    {
        fetchData();
    },[]);
    async function fetchData(){
        const response=await fetch(apiurl);
        const jsonData=await response.json();
        const data=jsonData.rates;
    //     const tempArray=[];
    //    Object.entries(data).forEach(item =>{
    //         const tempobj={
    //             value:item[1].name,
    //             label:item[1].name,
    //             rate:item[1].value
    //         }
    //         tempArray.push(tempobj);
    //    }
    //    );

    const tempArray=Object.entries(data).map(item =>{
        return{
            value:item[1].name,
            label:item[1].name,
            rate:item[1].value
        }
    })
    setcryptoList(tempArray);
    }
    useEffect(() =>{
        if(cryptoList.length==0) return;
        const firstselectRate=cryptoList.find((item) =>{
            return item.value===firstSelect
        }).rate;
        const secondselectRate=cryptoList.find((item) =>{
            return item.value===secondSelect
        }).rate;

        const resultvalue=(inputValue*secondselectRate)/firstselectRate;
        setResult(resultvalue.toFixed(4));
    },[inputValue,firstSelect,secondSelect])
  return (
    <div className='container'>
      <Card className={'crypto-card'} title={
      <h1><FaCoins/>Crypto Converter</h1>}>
      <Form>
        <Form.Item>
            <Input onChange={(event) =>setInputValue(event.target.value)}/>
        </Form.Item>
      </Form>
      <div className="select-box">
      <Select style={{width:'200px'}}
       defaultValue={'Bitcoin'} 
       options={cryptoList} 
       onChange={(value) =>setFirstSelect(value)}/>
      <Select style={{width:'200px'}}defaultValue={'Ether'} options={cryptoList} 
      onChange={(value) =>setSecondSelect(value)}/>
      </div>
      <p>{inputValue} {firstSelect} = {result} {secondSelect}</p>
      </Card>
    </div>
  )
}

export default Converter
