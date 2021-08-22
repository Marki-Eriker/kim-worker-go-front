import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useRef, useState } from 'react'
import useOnClickOutside from '../../common/hooks/useOnClickOutside'
import { SelectBlockContainer, SelectFilterContainer } from './styles'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

interface Props {
  variants: { id: number; name: string }[]
  setFilterValue?: React.Dispatch<React.SetStateAction<number>>
}

const SelectFilter: React.FC<Props> = ({ variants, setFilterValue }) => {
  const [open, setOpen] = useState(false)
  const [filter, setFilter] = useState<{ id: number; name: string }>({
    id: variants[0].id,
    name: variants[0].name,
  })

  const ref = useRef(null)

  const handleClickOutside = () => {
    if (open) {
      setOpen(false)
    }
  }

  const handleClickInside = () => {
    setOpen(!open)
  }

  useOnClickOutside(ref, handleClickOutside)

  const onFilterClick = (id: number, name: string) => {
    setFilter({ id, name })
    setFilterValue && setFilterValue(id)
  }

  return (
    <SelectFilterContainer onClick={handleClickInside} ref={ref}>
      {filter.name}
      <FontAwesomeIcon
        className='icon'
        icon={open ? faChevronDown : faChevronUp}
        size='1x'
        color='#232D5A'
      />
      <SelectBlockContainer visible={open}>
        {variants &&
          variants.map((v) => (
            <span onClick={() => onFilterClick(v.id, v.name)} key={v.id}>
              {v.name}
            </span>
          ))}
      </SelectBlockContainer>
    </SelectFilterContainer>
  )
}

export default SelectFilter
