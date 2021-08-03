// export class App extends Component {
//     constructor(){
//       super();
//       this.state = {
//         items: [ {id:1 , name : 'ash' , gender:'female',edit:false},
//                  { id:2 , name : 'ash' , gender:'female',edit:false}],
//         name:'',
//         gender:'',
//         addData : false
//       }
//       this.handleAdd = this.handleAdd.bind(this);
//       this.handleAddName = this.handleAddName.bind(this);
//       this.handleAddGender = this.handleAddGender.bind(this);
//       this.handleSave = this.handleSave.bind(this)
//       this.handleEditName = this.handleEditName.bind(this);
//       this.handleEditGender = this.handleEditGender.bind(this);
  
  
  
//     }
//     handleAddName = (e) => {
//       // console.log({...this.state})
//       e.preventDefault();
//       this.setState({...this.state, name:e.target.value})
//     }
//     handleAddGender= (e) =>{
//       this.setState({...this.state,gender:e.target.value})
//     }
//     handleSave(){
//       let newData = {
//         id:this.state.items.length+1,
//         name: this.state.name,
//         gender: this.state.gender
//       };
//       this.setState({...this.state,
//         items:[...this.state.items,newData],
//         addData:false,
//         name:'',
//         gender:''
//       });
//     }
//     handleAdd(){
//       this.setState({addData:true})
//     }
//     handleDelete(item) {
//       // console.log('button clicked', item)
//       let list = [...this.state.items]
//       let index = list.indexOf(item)
//       list.splice(index,1);
//       this.setState({...this.state,items:list})
//       console.log('button clicked', index)
  
//     }
//     handleEdit(item) {
//       const list = [...this.state.items]
//       let index = list.indexOf(item)
//       list[index].edit = true
//       this.setState({
//         ...this.state,
//         items: list,
//         name: item.name,
//         gender: item.gender
//     })
//     console.log(item.name)
//     }
//     handleEditSave(item){
//       let list = [...this.state.items]
//       let index=list.indexOf(item)
//       list[index].edit = false;
//       list[index].name = this.state.name;
//       list[index].gender = this.state.gender;
//       this.setState({
//         ...this.state,
//         items:list,
//         name:'',
//         gender:'',
//         appData:false
//       })
      
//     }
//     handleEditName = (e) => {
//       this.setState({...this.state, name:e.target.value});
//     }
//     handleEditGender = (e) => {
//       this.setState({...this.state, gender:e.target.value})
//     }
  
//     render() {
//       const {items,name,gender,addData} = this.state;
//       return (
//         <div>
//           <h3>Crud operation</h3>
//           <ul>{items.map((item) => (
//             <li key={item.id}>
//              {/* RollNo :{item.id}, */}
//              Name : {item.edit  //here we used turnary operator means if item.edit is true 
//              //then below line works
//              ? (<input type="text" value={name} placeholder="Enter name"  onChange={this.handleEditName}  />)
//              //if false below line works
//              : (item.name)},
//              Gender:  {item.edit 
//              ? (<input type="text" value={gender} placeholder="Enter Gender"  onChange={this.handleEditGender} />)
//              : (<strong>{item.gender}</strong>)}&emsp;
//              <button type='button' onClick={()=> this.handleEdit(item)} > Edit </button>&emsp;
//              <button type='button'  onClick={()=> this.handleEditSave(item)} > Save </button>&emsp;
//              <button type='button'  onClick={()=> this.handleDelete(item)} > Delete </button> <br />
//               <br />
//               </li>
//           ))}</ul>
  
//           {addData 
//           ? (<div>
//             <input type="text" value={name} onChange={this.handleAddName} placeholder={'Enter Name'}  /> &emsp;
//             {/* <input type="text" placeholder={'Enter name'}  /> &emsp; */}
//             <input type="text" value={gender} onChange={this.handleAddGender} placeholder={'Enter Gender'}  /> <br/>
//             <br />
//             <button type='button'  onClick={()=> this.handleSave()} >Save</button><br />
//           </div>)
//           : ''} 
//           <br/>
//           <button type='button'  onClick={()=> this.handleAdd()} >Add</button>
  
//         </div>
//       )
//     }
//   }
  
//   export default App

// handleEditSubmit = event => {
//     event.preventDefault();
  
//     axios.post('http://localhost:5000/name/Edit' ,{
//       studid :this.state.stud_id,
//       studfirstname : this.state.stud_firstname,
//       studlastname: this.state.stud_lastname,
  
//       studgrade :this.state.stud_grade,
//       studdob : this.state.stud_dob,
//       studgender: this.state.stud_gender,
  
//       studemail :this.state.stud_email,
//       studmobile : this.state.stud_mobile,
//       studaddress: this.state.stud_address,
//       studstatus:this.state.stud_status
  
//     })
//     .then(res => {
//       alert('sucess')
//       console.log(res);
//       console.log(res.data);
//     })
//     .catch(error => console.log(error));
  
//     this.setState({EditData:false})
//   }
// handleSubmit = event => {
//     event.preventDefault();
//     axios.post('http://localhost:5000/name/insert' ,{
//       studid :this.state.stud_id,
//       studfirstname : this.state.stud_firstname,
//       studlastname: this.state.stud_lastname,

//       studgrade :this.state.stud_grade,
//       studdob : this.state.stud_dob,
//       studgender: this.state.stud_gender,

//       studemail :this.state.stud_email,
//       studmobile : this.state.stud_mobile,
//       studaddress: this.state.stud_address,
//       studstatus :this.state.stud_status
//     })
//     .then(res => {
//       alert('sucess')
//       console.log(res);
//       console.log(res.data);
//     })
//     .catch(error => console.log(error));

//     this.setState({action:false})
//   }
// {EditData // using action flage we are complate te action
//     ? (<div className='forms'>
//     <label>stud id : </label>
//     <input type="text" placeholder="Enter id" value={stud_id} onChange= {this.handleid} /> &emsp; 
//     <label>First Name : </label>
//     <input type="text" placeholder='Enter name' value={stud_firstname} name='stud_firstname' onChange= {this.handleFirstName} /> &emsp;
//     <label>Last Name :</label>
//     <input type="text" placeholder='Enter lastname' value={stud_lastname} name='stud_lastname' onChange= {this.handleSurnameChange} /> &emsp; 
//     <br/>
//     <label>Grade: </label>
//     <input type="text" placeholder='Enter Grade' value={stud_grade} name='stud_grade' onChange= {this.handleGrade} /> &emsp;
//     <label>DOB: </label>
//     <input type="text" placeholder='yyyy-mm-dd' value={stud_dob} name='stud_DOB' onChange= {this.handleDOB} /> &emsp;
//     <label>Gender : </label>
//     <input type="text" placeholder="enter gender" value={stud_gender} name='stud_gender' onChange= {this.handleGender} /> <br/>
//     <br/>
//     <label>Email: </label>
//     <input type="text" placeholder="adcd@gmail.com" value={stud_email} name='stud_email' onChange= {this.handleEmail} /> &emsp;
//     <label>Mobile: </label>
//     <input type="text" placeholder="Enter Mobile no" value={stud_mobile} name='stud_mobile' onChange= {this.handleMobile} /> &emsp;
//     <label>Address :</label>
//     <input type="text" placeholder='Enter address' value={stud_address} name='stud_address' onChange= {this.handleAddress} /> <br/>
//     <br/>
//     <label>Status :</label>
//     <input type="text" placeholder='satus' value={stud_status} name='stud_address' onChange= {this.handleStatus} /> <br/>
    
//     <br/>
//     <Button onClick={this.handleEditSubmit} >Save</Button> <br/>
//     <br/>
//     {/* <button onClick={this.handleView} >View</button> */}
//     </div>)
//     :''
//     } 
//     </div>
//     :''
//     }
//     </div>

//handleSubmit = (event) => {
    //   event.preventDefault();
    //   axios
    //     .post("http://localhost:5000/name/insert", {
    //       studid: this.state.stud_id,
    //       studfirstname: this.state.stud_firstname,
    //       studlastname: this.state.stud_lastname,
  
    //       studgrade: this.state.stud_grade,
    //       studdob: this.state.stud_dob,
    //       studgender: this.state.stud_gender,
  
    //       studemail: this.state.stud_email,
    //       studmobile: this.state.stud_mobile,
    //       studaddress: this.state.stud_address,
    //       studstatus: this.state.stud_status,
    //     })
    //     .then((res) => {
    //       alert("sucess");
    //       console.log(res);
    //       console.log(res.data);
    //     })
    //     .catch((error) => console.log(error));
  
    //   this.setState({ action: false });
    // };
    // if (this.state.EditData === true) {
    //   return (
    //     <Redirect
    //       to={{
    //         pathname: "/editpage",
            // state: {
            //   stud_id: this.state.stud_id,
            //   stud_firstname: this.state.stud_firstname,
            //   stud_lastname: this.state.stud_lastname,
            //   stud_grade: this.state.stud_grade,
            //   stud_DOB: this.state.stud_dob,
            //   stud_gender: this.state.stud_gender,
            //   stud_email: this.state.stud_email,
            //   stud_mobile: this.state.stud_mobile,
            //   stud_address: this.state.stud_address,
            //   //  stud_image: this.state.image
            // },
    //       }}
    //     />
    //   );
    // }
    // app.post("/name/insert", function (req, res) {
//   console.log("reched");
//   // const sql = "select * from coreco student"
//   const id = req.body.studid;
//   const FirstName = req.body.studfirstname;
//   const LastName = req.body.studlastname;
//   const Grade = req.body.studgrade;
//   const dob = req.body.studdob;
//   const Gender = req.body.studgender;
//   const email = req.body.studemail;
//   const mobile = req.body.studmobile;
//   const address = req.body.studaddress;
//   const status = req.body.studstatus;
//   const sql =
//     "insert into coreco_student(stud_id,stud_firstname,stud_lastname,stud_grade,stud_DOB,stud_gender,stud_email,stud_mobile,stud_address,stud_status) values (?,?,?,?,?,?,?,?,?,?);";
//   let qry = db.query(
//     sql,
//     [
//       id,
//       FirstName,
//       LastName,
//       Grade,
//       dob,
//       Gender,
//       email,
//       mobile,
//       address,
//       status,
//     ],
//     function (err, data) {
//       // let qry = db.query(sql,function(err,data){
//       if (err) throw err;
//       console.log(data);
//       //    res.send('hello')
//     }
//   );
// });

// app.post("/name/Edit",function (req, res) {
//   console.log("reched");
//   console.log(req.body);
//   // const data = new FormData();
//   // data.append('image',req.body.studimage.toString("base64"),{filename:'image'});
//   const sql = "select * from coreco student"
//   const id = req.body.studid;
//   const FirstName = req.body.studfirstname;
//   const LastName = req.body.studlastname;
//   const Grade = req.body.studgrade;
//   const dob = req.body.studdob;
//   const Gender = req.body.studgender;
//   const email = req.body.studemail;
//   const mobile = req.body.studmobile;
//   const address = req.body.studaddress;
//   const status = 'active';
//   const img = req.body.studimage.toString("base64");
//   // let sql = 'UPDATE student SET studName =? ,studAdhar=? ,mobileNo=? ,streams=? ,studCourseId=? ,address=? ,marks=? ,practical=? where studId =? '

//   const sql =
//     "UPDATE coreco_student SET stud_firstname=?, stud_lastname=?, stud_grade=?, stud_DOB=?, stud_gender=?,stud_email=?,stud_mobile=?,stud_address=?,stud_status=?,stud_image=? WHERE stud_id=?";
//   let qry = db.query(
//     sql,
//     [
//       FirstName,
//       LastName,
//       Grade,
//       dob,
//       Gender,
//       email,
//       mobile,
//       address,
//       status,
//       img,
//       id
//     ],
//     function (err, data) {
//       if (err) throw err;
//       console.log(data);
//     }
//   );
// });