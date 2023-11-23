
function Layout({ children}) {
  return (
    <div className='flex flex-col items-center mt-20 text-xl font-bold'>
        {children}
    </div>
  )
}

export { Layout}