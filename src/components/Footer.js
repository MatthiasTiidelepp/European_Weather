import React from 'react'

// Component for displaying the author's name and link to the code on github as a footer
const Footer = () => {
  return (
    <footer className="footerText">
      <p>by Matthias Tiidelepp</p>
      <a className="codeLink" href="https://github.com/MatthiasTiidelepp/European_Weather">link to code on GitHub</a>
    </footer>
  )
}

export default Footer