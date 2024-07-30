function Card({ children, reverse = false }) {
  // return <div className={`card ${reverse && 'reverse'}`}>{children}</div>
  return (
    <div
      className='card'
      style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#ffffff',
        color: reverse ? '#ffffff' : '#000000',
      }}
    >
      {children}
    </div>
  )
}

export default Card
