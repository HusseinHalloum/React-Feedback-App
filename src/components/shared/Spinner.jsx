import spinner from '../assets/spinner.gif'

function Spinner() {
  return (
    <img
      src={spinner}
      alt='Loading ...'
      style={{ width: '100px', margin: '50px auto', display: 'block' }}
    />
  )
}

export default Spinner
