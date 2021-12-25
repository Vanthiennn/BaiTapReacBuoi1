import React, { Component } from "react";
import UserItem from "./UserItem";
import { connect } from "react-redux";

class Users extends Component {
  renderListUser = () => {
    // nhận props listUser,keyword từ hàm mapStateToProps , ko còn từ file Index truyền sang
    let {listUser, keyword} = this.props ;
    listUser = listUser.filter((user)=>{
      return user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 ;
     })
    return listUser?.map((user)=>{
      return <UserItem key={user.id} user={user}
      //  deleteUser={this.props.deleteUser}
       getInfo={this.props.getInfo}  />
    })
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {this.renderListUser()}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // key:value
    listUser: state.userReducer.listUser,
    keyword: state.userReducer.keyword,
  }
}

export default connect(mapStateToProps,null) (Users);
