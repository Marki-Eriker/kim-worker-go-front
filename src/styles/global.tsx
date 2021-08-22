import React from 'react'
import { css, useTheme, Global } from '@emotion/react'

const GlobalStyles = () => {
  const theme = useTheme()
  const style = css`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap');

    * {
      margin: 0;
      padding: 0;
    }

    html {
      box-sizing: border-box;
      font-size: 10px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 500;
    }

    body {
      font-size: 1.6rem;
      color: ${theme.colors.primary.black};
    }

    input,
    select {
      font-size: 1.4rem;
      outline: none;
      font-family: 'Montserrat', sans-serif;
      border-radius: ${theme.corner.primary};
      border: 1px solid ${theme.colors.secondary.gray700};
      color: ${theme.mainBackground};
    }

    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }

    a {
      text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 600;
      color: ${theme.mainBackground};
    }
    h1 {
      font-size: 2.2rem;
    }
    h2 {
      font-size: 1.8rem;
    }
    h3 {
      font-size: 1.4rem;
    }
  `

  return (
    <React.Fragment>
      <Global styles={style} />
    </React.Fragment>
  )
}

export default GlobalStyles
