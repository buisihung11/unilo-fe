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
import { BorderText, ExpandableItemWithImage } from '../../components'
import bear from '../../assets/images/gauxanh7.png'
import HandbookDetail from './components/HandbookDetail'

export default function Handbook(props) {
  return (
    <StyledUniloWrapper>
      <StyledDarkUnilo>
        <Link to="/dashboard">
          <img src={backIcon} height="50px" />
        </Link>
        <StyledWrapper>
          <StyledCover src={bgHandbook} />
          <HandbookDetail />
        </StyledWrapper>
        <StyledMascot />
      </StyledDarkUnilo>
    </StyledUniloWrapper>
  )
}
