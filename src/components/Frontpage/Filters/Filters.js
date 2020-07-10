import React from 'react'
import { useDispatch } from 'react-redux'
import Select from '../Select/Select'
import { genreChange, gameModeChange, coopModeChange } from '../../../reducers/filterReducer'

import {
  genres, gameModes, coopModes,
} from './filterlist'


const Filters = ({ filters }) => {
  const dispatch = useDispatch()
  const changeFilter = (e, filter) => {
    switch (filter) {
    case 'genre':
      dispatch(genreChange(e.target.value))
      break
    case 'gameMode':
      dispatch(gameModeChange(e.target.value))
      break
    case 'coopMode':
      dispatch(coopModeChange(e.target.value))
      break
    default:
    }
  }

  return (
    <>
      <Select value={filters.genre} onChange={(e) => changeFilter(e, 'genre')} collection={genres}
        name="All Genres"
      />

      <Select value={filters.coop} onChange={(e) => changeFilter(e, 'coopMode')} collection={coopModes}
        name="All Coop Modes"
      />

      <Select value={filters.gameMode} onChange={(e) => changeFilter(e, 'gameMode')} collection={gameModes}
        name="All Game Modes"
      />

    </>
  )
}

export default Filters