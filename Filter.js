import React, { useEffect, useState } from 'react'
import FilterModal from './FilterModal'
import { useDispatch } from 'react-redux'
import { getAllProperties } from '../../Store/Property/property-action'
import { propertyAction } from '../../Store/Property/property-slice'

const Filter = () => {
  //state for controlling the modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false)
  //state for storing the selected values
  const [selectedFilters, setSelectedFilters] = useState({})
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(propertyAction.updateSearchParams(selectedFilters))
    dispatch(getAllProperties())
  },
[selectedFilters,dispatch]
)

  //function to handle the opening the modal/popup window
const handleOpenModal = () => {
  setIsModalOpen(true)//helps in making the modal open true
}

//function to handle closing the modal
const handleCloseModal = () =>{
  setIsModalOpen(false)//help in making the modal value as false hence closing it
}

//function to handle changes in filter
const handleFilterChange = (filterName, value) => {
  //update the selected filters with the new values
  setSelectedFilters((prevFilters)=>({
      ...prevFilters,
      [filterName]:value
  }))
}

  return (
    <>
    {/* click event to open modal */}
      <span class="material-symbols-outlined fliter" onClick={handleOpenModal}>tune</span>
      {isModalOpen && (
        <FilterModal
          selectedFilters={selectedFilters}
          onFilterChange={handleFilterChange}
          onClose={handleCloseModal}
        />
      )}
    </>
  )
}

export default Filter