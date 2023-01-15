import React from 'react'

type HTextProps = {
	children: React.ReactNode;
}

export const HText = ({children}: HTextProps) => {
  return (
	  <h1 className="basis-3/5 font-montserrat text-3xl font-bold">
		{children}
	  </h1>
  )
}
