import React, { useState } from 'react'
import { Select, SelectItem, DateRangePicker, Button } from '@tremor/react';
import {  Search } from 'lucide-react';

function SearchCar() {
    const [value, setValue] = useState('');
    const [date, setDate] = useState('');
    // console.log(date);
  return (
    <div className=''>

        <div className=" mx-auto max-w-lg flex gap-x-4 gap-y-2 max-lg:flex-col max-lg:max-w-72">

            <Select id="distance" name="distance" value={value} onValueChange={setValue} >
                <SelectItem value="" >All</SelectItem>
                <SelectItem value="Sedans" >Sedans</SelectItem>
                <SelectItem value="Hatchbacks" >Hatchbacks</SelectItem>
                <SelectItem value="Van" >Van</SelectItem>
                <SelectItem value="Suv" >SUV</SelectItem>
            </Select>
            
            <DateRangePicker className="mx-auto max-w-sm" enableSelect={false} onValueChange={setDate} />
            <Button icon={Search}  variant="primary" className='bg-amber-200 border-none hover:bg-amber-300 text-black'>Search</Button>
        </div>
      
    </div>
  )
}

export default SearchCar
