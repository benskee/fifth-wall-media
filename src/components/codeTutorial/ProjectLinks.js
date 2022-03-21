import React from 'react'
import { highestValue } from '../../services/codeDisplayService';
import renderContainer from '../common/RenderContainer';


export default function ProjectLinks({ links, currentTime }) {
  if (!currentTime) currentTime = 0
  return (
    <div>{renderContainer(JSON.parse(links[highestValue(links, currentTime)]))}</div>
  )
}
