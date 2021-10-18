import { Link } from 'react-router-dom'
import { StyledUniloWrapper, StyledDarkUnilo } from '../../components/AppStyles'
import {
  StyledContent,
  StyledCover,
  StyledHeader,
  StyledMascot,
  StyledWrapper,
} from './components/HandbookStyle'
import backIcon from '../../assets/images/back.png'
import bgHandbook from '../../assets/images/bg-handbook.png'
import { BorderText } from '../../components'

export default function Handbook(props) {
  return (
    <StyledUniloWrapper>
      <StyledDarkUnilo>
        <Link to="/dashboard">
          <img src={backIcon} height="50px" />
        </Link>
        <StyledWrapper>
          <StyledCover src={bgHandbook} />
          <StyledContent></StyledContent>
        </StyledWrapper>
        <StyledMascot />
      </StyledDarkUnilo>
    </StyledUniloWrapper>
  )
}
