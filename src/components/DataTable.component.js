// headers: [{ key: headerKey, name: headerName, type: fieldType }, ...]
// rows: [{ ...header_1 }, { ...header_2 }, ...]

import { useRef, useState } from 'react'
import { AiOutlineHolder } from 'react-icons/ai'
import { useOnClickOutside } from '../hooks'
import { genId } from '../utils'

const Cell = ({ value, editable, type }) => {
  const cellRef = useRef(null)
  const [inEditMode, setInEditMode] = useState(false)
  const [currentValue, setCurrentValue] = useState(value)

  const canEdit = inEditMode && type !== 'STATIC'

  const goToEditMode = () => {
    setInEditMode(true)
    setTimeout(() => cellRef.current.focus(), 0)
    console.log('focus!')
  }
  const leaveEditMode = () => {
    setInEditMode(false)
    cellRef.current.blur()
  }
  const save = e => {
    setCurrentValue(e.currentTarget.textContent)
    console.log({ nv: e.currentTarget.textContent })
  }

  useOnClickOutside(cellRef, leaveEditMode)

  return (
    <td
      className="overflow-hidden px-2 py-4 whitespace-nowrap"
      onClick={canEdit || !editable ? undefined : goToEditMode}
      contentEditable={editable && canEdit}
      ref={cellRef}
      onBlur={save}
    >
      {currentValue}
    </td>
  )
}

export const DataTable = ({ rows, headers, editable }) => {
  const getHeaderByKey = key => headers.find(h => h.key === key)

  return (
    <table className="table-fixed max-w-full overflow-x-auto">
      <thead>
        <tr>
          {headers?.map(header => (
            <th
              key={genId()}
              className="bg-black text-white border border-white p-4 whitespace-nowrap resize-x overflow-x-auto"
            >
              {header?.name ?? header?.key}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows?.map(row => (
          <tr
            key={genId(4)}
            className="relative even:bg-gray-100 hover:bg-gray-300 group"
          >
            {Object.entries(row).map(([key, value]) => {
              const header = getHeaderByKey(key)
              const cellValue = value ? value : header?.default ?? ''

              return (
                <Cell
                  key={genId()}
                  value={cellValue}
                  editable={editable}
                  type={header?.type}
                />
              )
            })}
            <td className="absolute cursor-grab right-full px-3 h-full hidden items-center group-hover:flex">
              <AiOutlineHolder size={20} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
