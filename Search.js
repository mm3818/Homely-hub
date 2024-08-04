import { DatePicker, Space } from "antd"
import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { getAllProperties } from "../../Store/Property/property-action"
import { propertyAction } from "../../Store/Property/property-slice"

const Search = () => {
  const { RangePicker } = DatePicker
  const [keyword, setKeyword] = useState({})
  //storing the data range value
  const [value, setValue] = useState([])
  const dispatch = useDispatch()
  function searchHandler(e) {
    e.preventDefault()
    dispatch(propertyAction.updateSearchParams(keyword))
    dispatch(getAllProperties())
    setKeyword({ city: "", guests: "", dateIn: "", dateOut: "" })
    setValue([])
  }
  function returnDates(date, dateString) {
    //setting the date rage value in state
    setValue([date[0], date[1]])
    //updating keyword object with date range
    updateKeyword("dateIn", dateString[0])
    updateKeyword("dateOut", dateString[1])
  }
  //function to update a specific field in the keyword state object
  const updateKeyword = (field, value) => {
    setKeyword((prevKeyword) => ({
      ...prevKeyword,
      [field]: value
    }))
  }

  return (
    <>
      <div className='searchbar'>
        {/* input field for searching destinations */}
        <input
          className='search'
          id="search_destination"
          placeholder='Search Destination'
          type='text'
          value={keyword.city}
          onChange={(e) => updateKeyword("city", e.target.value)}
        />
        {/* creating deate range picker */}

        <Space direction='vertical' size={12} className='search'>
          <RangePicker
            value={value}
            format="YYYY-MM-DD"
            picker='date'
            className='date_picker'
            disabledDate={(current) => {
              return current && current.isBefore(Date.now(), "day")
            }}
            onChange={returnDates}
          />
        </Space>
        {/* Input for adding the number of guests */}

        <input
          className='search'
          id='addguest'
          placeholder='Add Guest'
          type='number'
          value={keyword.guests}
          onChange={(e) => updateKeyword("guests", e.target.value)}
        />
        {/* Search icon */}
        <span class="material-symbols-outlined searchicon" onClick={searchHandler}>
          search
        </span>

      </div>

    </>
  )
}

export default Search