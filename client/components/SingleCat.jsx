import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import EditCat from './EditCat'
import {deleteCatRequest} from '../actions/catActions'

class SingleCat extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cat: props.cat || null,
      showEdit: false
    }
  }
  componentWillReceiveProps({cat}) {
    this.setState({cat})
  }
  toggleEdit() {
    this.setState({showEdit: !this.state.showEdit})
  }
  render() {
    let {cat} = this.state
    return (
      <div className="catContainer">
        <Link to='/'>Home</Link>
        {cat
          ? (<div>
            {this.state.showEdit
              ? <EditCat cat={cat} submit={this.toggleEdit.bind(this)}/>
              : (<div className="SingleCat">
                <h1>{cat.name}</h1>
                <img style={{height: '30vh'}} src={cat.image_url} />
                <p>{cat.description}</p>
                <button onClick={() => this.props.dispatch(deleteCatRequest(cat))}>Delete Me</button>
              </div>)
            }
            <button onClick={this.toggleEdit.bind(this)}>{this.state.showEdit ? 'Cancel Edit' : 'Edit Me'}</button>
          </div>)
          : <h1>No Cat!</h1>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    cat: state.cats.find(cat => cat.id == props.match.params.id)
  }
}

export default connect(mapStateToProps)(SingleCat)
