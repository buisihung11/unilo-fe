import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './Button.style'
import propTypes from '@styled-system/prop-types'

const Button = (props) => {
    const { variant, ...others } = props
    console.log(`others`, others)
    return (
        <StyledButton variant={variant} {...others}>
            {props.children}
        </StyledButton>
    )
}

Button.propTypes = {
    variant: PropTypes.oneOf(['default', 'primary', 'info', 'success']),
    ...propTypes.color,
    ...propTypes.space,
    ...propTypes.fontWeight,
    ...propTypes.fontSize,
}

Button.defaultProps = {
    variant: 'default',
}

export default Button
