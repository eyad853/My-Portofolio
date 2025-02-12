import React from 'react'
import Nav from '../../Nav/Nav'
import ProjectBody from '../ProjectBody/ProjectBody'

const ProjectPage = ({
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
  firstVideo,
  secondVideo,
  thirdVideo,
  firstImageText,
  secondImageText,
  thirdImageText,
  fourthImageText,
  firstVideoText,
  secondVideoText,
  thirdVideoText,
  note,
  noteText
}) => {
  return (
    <div className='text-white overflow-hidden'>
    <div className='w-screen h-full bg-[url("/My-Portofolio/bg.jpeg")] bg-cover bg-bottom bg-no-repeat '>
        <Nav/>
      <ProjectBody 
        firstImage={firstImage}
        secondImage={secondImage}
        thirdImage={thirdImage}
        fourthImage={fourthImage}
        firstVideo={firstVideo}
        secondVideo={secondVideo}
        thirdVideo={thirdVideo}
        firstImageText={firstImageText}
        secondImageText={secondImageText}
        thirdImageText={thirdImageText}
        fourthImageText={fourthImageText}
        firstVideoText={firstVideoText}
        secondVideoText={secondVideoText}
        thirdVideoText={thirdVideoText}
        note={note}
        noteText={noteText}
      />
    </div>
</div>
  )
}

export default ProjectPage