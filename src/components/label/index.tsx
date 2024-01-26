import styled from 'styled-components'

type SLabelProps = {
  isBolded?: boolean
  isUpperCased?: boolean
  theme: {
    typography: {
      bold: string
      fontFamily: string
    }
  }
}

const SLabel = styled.label<SLabelProps>`
  display: block;
  font-size: 14px;
  margin-bottom: 10px;
  font-family: ${({ isBolded, theme }) =>
    isBolded ? theme.typography.bold : theme.typography.fontFamily};
  text-transform: ${({ isUpperCased }) =>
    isUpperCased ? 'uppercase' : 'none'};
  position: relative;
`

const SSpan = styled.span`
  color: ${({ theme: { colors } }) => colors.primary};
  font-size: 18px;
  position: absolute;
  top: -0.25rem;
  padding-left: 0.25rem;
`

const SHint = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  opacity: 0.5;
  font-size: ${({ theme: { fontSize } }) => fontSize.xs};
`

type Props = {
  children: string
  name?: string
  required?: boolean
  isBolded?: boolean
  isUpperCased?: boolean
  hint?: string
}

export const Label = ({
  children,
  name,
  required,
  isBolded,
  isUpperCased,
  hint,
}: Props) => {
  return (
    <SLabel
      isBolded={isBolded}
      isUpperCased={isUpperCased}
      {...(name && { htmlFor: name })}
    >
      {children}
      {required && <SSpan> *</SSpan>}
      {hint && <SHint>{hint}</SHint>}
    </SLabel>
  )
}
