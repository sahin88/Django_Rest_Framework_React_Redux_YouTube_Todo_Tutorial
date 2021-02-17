
import React, { Component } from "react";
import { Link, Route, withRouter } from "react-router-dom";
import '../css/table.css'
export class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
    };
  }

  render() {
    return (
      <div className='Table'>
        <table className="Table_horizontal">
          <th>#</th>
          <th>Image</th>
          <th>Author</th>
          <th>Title</th>
          <th>Update</th>
          <th>Delete</th>

        
              <tbody>
                <tr>
                  <td>1</td>

                  <td>
                    <img
                      src=''
                      style={{ width: "100px", height: "50px" }}
                    />
                  </td>

                  <td>Dostoyevski</td>
                  <td>Suc ve Ceza</td>
                  <td>
                    <form >
                      <button className="Update_Button" type="submit">
                        Update{" "}
                      </button>
                    </form>
                  </td>
                  <td>
                    <form
                     
                    >
                      <button className="Delete_Button" type="submit">
                        Delete
                      </button>
                    </form>
                  </td>
                </tr>
              </tbody>
        
        </table>
        <table className="Table_vertical">
        
              <tbody>
                <tr>
                  <td>#</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Image</td>
                  <td>
                    <img
            
                      style={{ width: "100px", height: "50px" }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Author</td>
                  <td>Dostoyevski</td>
                </tr>
                <tr>
                  <td>Title</td>
                  <td>Suc ve Ceza</td>
                </tr>
                <tr>
                  <td>Update</td>
                  <td>
                    <form >
                      <button className="Update_Button" type="submit">
                        Update{" "}
                      </button>
                    </form>
                  </td>
                </tr>
                <tr>
                  <td>Delete</td>
                  <td>
                    <form
                    
                    
                    >
                      <button className="Delete_Button" type="submit">
                        Delete
                      </button>
                    </form>
                  </td>
                </tr>
              </tbody>
        
        </table>
      </div>
    );
  }
}

export default Table;