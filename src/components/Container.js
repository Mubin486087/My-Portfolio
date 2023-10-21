 'use client'


const Container = ({children,className}) => {
  return (
    <div className={`max-w-screen-xl mx-auto py-10 px-4 xl:px-0 ${className}`}>{children}</div>
  )
}

export default Container