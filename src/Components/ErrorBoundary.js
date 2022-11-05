import { Component } from 'react'
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo)
    console.log('rr')
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className='error'>
          <div>
            {' '}
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgZMQcf2G2xvLEiPcBsebw91AWmnntEZlZ6g&usqp=CAU'
              alt=''
            />
            <h1>Something went wrong.</h1>
            <button>Back to Home</button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
export default ErrorBoundary
