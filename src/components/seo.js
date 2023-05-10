import * as React from 'react'
import useSiteMetadata from './site-meta-data'

const Seo = ({ title }) => {
	const { title: siteTitle } = useSiteMetadata()

  return (
    <title>{title} | {siteTitle}</title>
  )
}

export default Seo