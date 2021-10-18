import PropTypes from 'prop-types'
import {
  LayoutContentWrapper,
  LayoutFooterWrapper,
  LayoutHeaderWrapper,
  LayoutWrapper,
} from './Layout.style'

const Layout = (props) => {
  const { Header, Footer, Content } = props
  return (
    <LayoutWrapper>
      <LayoutHeaderWrapper>{Header}</LayoutHeaderWrapper>
      <LayoutContentWrapper>{Content}</LayoutContentWrapper>
      <LayoutFooterWrapper>{Footer}</LayoutFooterWrapper>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  Header: PropTypes.node,
  Content: PropTypes.node,
  Footer: PropTypes.node,
}

export default Layout
