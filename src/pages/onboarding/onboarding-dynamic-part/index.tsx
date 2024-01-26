import { useParams } from 'react-router-dom'

import { Label } from '#components/label'

export const OnboardingDynamicPart = () => {
  const { id } = useParams()

  return (
    <div>
      <h1>OnboardingDynamicPart Screen</h1>
      <Label>{`ID: ${id}`}</Label>
    </div>
  )
}
