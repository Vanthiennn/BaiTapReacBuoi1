import React, { Component } from "react";
import Search from "./Search";
import Users from "./Users";
import Modal from "./Modal";
import data from "./data.json"

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listUser : data ,
      keyword : "",
      userEdit: null,
    }
  }

  // viết rút gọn = cách xóa return + {} (nếu hàm chỉ có một câu lệnh)
  _findIndex = (id) => this.state.listUser.findIndex((user) => user.id === id);
  
  // xóa user 
  handleDeleteUser = (user) => {
    const index = this._findIndex(user.id)
    if(index !== -1) {
      // const {listUser} = this.state
      let listUser = [...this.state.listUser] ;
      listUser.splice(index,1);
      this.setState({
        listUser
      })
    }
  }

  // bao gồm tính năng add và update
  handleSubmitUser = (user) => {
    let listUser = [...this.state.listUser]
    if(user.id) {
      //Update
      const index = this._findIndex(user.id)
      if(index !==-1){
        listUser[index] = user
      }
    } else {
      //Add
      // cách tạo id ko bị trùng 
      // C1 : const id = Math.random()
      // C2 
      // user.id = new Date().getTime(); bị tham chiếu khi push vào [] , {}
      const userNew = {...user, id: new Date().getTime()} ;
      listUser.push(userNew);
      console.log(listUser)
    }
    
    this.setState({
      listUser
    })
  }

  handleSearching = (keyword) => {   
    // const listUser = this.state.listUser.filter((user)=>{
    //  return user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 ;
    // })
    this.setState({
      keyword
    })
    
  }

  handleGetInfo = (user) => {
    this.setState({
      userEdit:user,
    })
  }

  render() {
    let{listUser,keyword} = this.state
    // console.log(this.state.listUser)
     listUser = this.state.listUser.filter((user)=>{
     return user.fullname.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 ;
    })

    return (
      <div className="container">
        <h1 className="display-4 text-center my-3">User Management</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Search searchUser={this.handleSearching} />
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target="#modelIdUser"
            onClick={() => {
              this.setState({
                userEdit:null,
              })
            }}
          >
            Add User
          </button>
        </div>
        <Users listUser={listUser} deleteUser={this.handleDeleteUser} getInfo={this.handleGetInfo} />
        <Modal getUser={this.handleSubmitUser} userEdit={this.state.userEdit} />
      </div>
    );
  }
}

export default Home;
