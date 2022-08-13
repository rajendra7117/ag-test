import React from 'react'
import { useDispatch } from 'react-redux/'
import { templateSliceActions } from '../../store/TemplateSlice'


const Template = ({id,img}) => {
    const dispatch = useDispatch()
    const selectTemp = e => {
            dispatch(templateSliceActions.selectTemp({id, img}))
    }

  return (
    <div className='template' onClick={selectTemp}>
        <img src={img}/>
    </div>
  )
}

export default Template