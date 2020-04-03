import React, { Component } from "react"
import Typical from 'react-typical'
import '../styles/splash.scss'

function splashAnimation() {
  return (
    <div className="splash">
      <div className="splash_logo">
        <h1>BHD.</h1>
        <Typical
          steps={[
            'Beau Herron Dev', 20, 
            'Beau Herron Dev', 1200, 
            'Beau Herron Developer', 300,
            'Beau Herron Designer', 300,
            'Beau Herron Creator', 400
          ]}
          wrapper="p"
        />
      </div>
      <div className="splash_svg">
        <svg width="100%" height="100%">
          <rect width="100%" height="100%" />
        </svg>
      </div>
      <div className="splash_minimize">
        <svg width="100%" height="100%">
          <rect width="100%" height="100%" />
        </svg>
      </div>
    </div>
  )
}

function withSplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({
          loading: false,
        });
      }, 5500);
    }

    render() {
      if (this.state.loading) return splashAnimation();

      return <WrappedComponent {...this.props} />
    }
  }
}

export default withSplashScreen
