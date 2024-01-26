import { useParams } from 'react-router-dom'

export const OnboardingDynamicPart = () => {
  const { id } = useParams()

  return (
    <div>
      <h1>OnboardingDynamicPart Screen</h1>
      <p>ID: {id}</p>
    </div>
  )
}
