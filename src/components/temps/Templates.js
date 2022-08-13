import React from 'react'
import './Templates.scss'
import { temps } from '../../utils/tempsdata'
import Template from './Template'
import { useSelector } from 'react-redux/'
import Form from './Form'
import Modal from '../UI/Modal'
import CompletedTemp from './CompletedTemp'


const Templates = () => {
    const isSelected = useSelector(state => state.templates.isSelected)
    const preview = useSelector(state => state.templates.preview)
    console.log(isSelected)
  return (
    <div className='templates'>
       
        <>
        { <> <h1>Select a template for the post</h1>
        <div className='templates-col'>
            {temps.map((temp) => <Template key={temp.id} id={temp.id} img={temp.img}/>)}
        </div> </> }
        {(isSelected ===true && preview===false) && <Modal><Form /></Modal>}
        {preview && <Modal><CompletedTemp /></Modal>}
        </>
    </div>
  )
}

export default Templates