import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Swiper from './Swiper'
import Slide from '@material-ui/core/Slide';

const styles = {
    body: {
      height: '100%'
    },
    container: {
        width: '100%',
        padding: 20,
        marginTop: 20,
        bottom: 0
    },
    logout: {
        color: 'white'
    }
}

class App extends React.Component {

    state = {
        loaded: false
    }

    componentDidMount() {
        this.setState({
            loaded: true,
            csrf: this.props.csrf
        })
    }

    logout = () => {
        fetch('/users/sign_out', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'X_CSRF_Token': this.state.csrf
            }
        }).then(()=> {
            this.setState({loaded: false});
            window.location = "/signed_out"
        })
    }

    render(){
        return(
            <Slide direction="up" in={this.state.loaded} >
                <Swiper>
                    <div  label="Info" style={styles.container}>
                        <a className="btn btn-danger" style={styles.logout} onClick={this.logout} >logout</a>
                        <h3>Hello {this.props.user.email}!</h3>
                    </div>
                    <div  label="Info" style={styles.container}>
                        <h3>Other content</h3>
                    </div>
                    <div label="new tab" style={styles.container}>
                        <h4>HEJ MANGE</h4>
                    </div>
                    <div label="new tab" style={styles.container}>
                        <h4>HEJ MANGE</h4>
                    </div>
                </Swiper>
            </Slide>
        )
    }
}

App.defaultProps = {
    name: 'Henrik'
}

App.propTypes = {
    name: PropTypes.string
}

export default App;