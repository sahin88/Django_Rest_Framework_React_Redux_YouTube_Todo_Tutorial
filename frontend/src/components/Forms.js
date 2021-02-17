import React, { Component } from 'react'
import '../css/form.css'

export class Forms extends Component {
    render() {
        return (
            <div>

          
            <div className="Division-Create-Form">
            <form
              className="Create-Form"
              onSubmit={(event) =>
                this.handleSubmit(
                  event,
                  this.props.requestType,
                  this.props.articleID
                )
              }
              encType="multipart/form-data"
            >
              <div>
                <input
                  type="text"
                  name="title"
                  placeholder="Please Enter a Title"
                />
              </div>
              <div>
                <input type="text" name="author" placeholder="Autor specify" />
              </div>
              <div>
                <input
                  type="file"
                  name="file"
                  onChange={(event) => this.normalfunc(event.target.files[0])}
                />
              </div>
              <button type="submit"> Create</button>
            </form>
          </div>
          </div>
        )
    }
}

export default Forms
