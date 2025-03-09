import React from 'react'
import Nav from '../../../components/Nav/Nav'
import NodeBody from '../../../components/SkillsBodies/NodeBody/NodeBody'

const NodePage = () => {
  return (
    <div className='text-white overflow-hidden'>
    <div className='w-screen h-full bg-[url("/images/general_images/bg.jpeg")] bg-cover bg-bottom bg-no-repeat pb-16'>
        <Nav />
        <NodeBody />
    </div>
</div>
  )
}

export default NodePage