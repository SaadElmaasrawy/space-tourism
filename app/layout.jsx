import styles from '../styles/global.css'

export const metadata = {
    title : 'Space Tourism',
    description : 'Discover & Share space together',
}

const RootLayout = ({children}) => {
    return (
      <html lang='en'>
          <body className=''>
              <div className='main'>
              </div>
              <main className='app'>  
                  {children}
              </main>
          </body>
      </html>
    )
  }
  
  export default RootLayout