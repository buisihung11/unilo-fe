import styled from 'styled-components'

export const LabelWrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  cursor: 'pointer',
})

export const DescriptionWrapper = styled.div({
  font: 'small-caption',
  fontFamily: 'Mali',
  textAlign: 'justify',
  transition: 'height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  minHeight: '0',
  transitionDuration: '222ms',
  height: (props) => (props.hidden ? '0' : 'auto'),
})
