import type { AppProps } from 'next/app'
import '@/styles/global.css'
import { NextPage } from 'next'
import { ComponentType, ReactElement, ReactNode } from 'react'

export type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode
  layout?: ComponentType
}

type Props = AppProps & {
  Component: Page
}

const MyApp = ({ Component, pageProps }: Props) => {
  return <Component {...pageProps} />
}

export default MyApp
