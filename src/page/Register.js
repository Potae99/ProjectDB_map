import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { Radio } from "@material-tailwind/react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';


function Register() {

  const [DoB, setDoB] = useState('');
  const [formattedDoB, setFormattedDoB] = useState('');

  useEffect(() => {
    if (DoB instanceof Date && !isNaN(DoB)) {
      const formattedDate = format(DoB, 'yyyy-dd-MM');
      setFormattedDoB(formattedDate);
      // You can use formattedDate in other parts of your component
      console.log(formattedDate);
    } else {
      console.error("Invalid Date for DoB");
    }
  }, [DoB]);



  //////////////////

  const [createdTime, setCreatedTime] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = `0${currentDate.getMonth() + 1}`.slice(-2);
    const day = `0${currentDate.getDate()}`.slice(-2);
    const hours = `0${currentDate.getHours()}`.slice(-2);
    const minutes = `0${currentDate.getMinutes()}`.slice(-2);
    const seconds = `0${currentDate.getSeconds()}`.slice(-2);

    const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    setCreatedTime(formattedTime);
  }, []);

  // console.log(createdTime);
  ////////////////

  const [tableName, setTableName] = useState("User");
  const [password, setpassword] = useState("");
  const [Uname, setUname] = useState("");
  const [Fname, setFname] = useState("");
  const [Lname, setLname] = useState("");
  const [Bio, setBio] = useState("");
  // const [createdTime, setcreatedTime] = useState("");
  const [picturePath, setpicturePath] = useState("");
  const [GID, setgender] = useState("");
  // const [DoB, setDoB] = useState("");



  const [data, setData] = useState([]);
  console.log(' ตาราง = ' + tableName)
  console.log('รหัสผ่าน = ' + password)
  console.log('Uname = ' + Uname)
  console.log('Fname = ' + Fname)
  console.log('Lname = ' + Lname)
  console.log('DoB = ' + formattedDoB)
  console.log('Bio = ' + Bio)
  console.log('createdTime = ' + createdTime)
  console.log('picturePath = ' + picturePath)
  console.log('GID = ' + GID)




  const addUser = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Validate fields before submission

    axios
      .post(process.env.REACT_APP_API_URL, {
        tableName: tableName,
        password: password,
        Uname: Uname,
        Fname: Fname,
        Lname: Lname,
        DoB: formattedDoB, // Use formatted date here
        Bio: Bio,
        createdTime: createdTime,
        picturePath: picturePath,
        GID: GID
      })
      .then((response) => {
        // Handle successful response
      })
      .catch((error) => {
        // Handle error response
      });
  };
  

  const backgroundImage = {
    backgroundImage: `url(/forest1.jpg)`, // แทนตำแหน่งของรูปภาพที่ต้องการใช้
    backgroundSize: 'cover',
    // ขนาดของภาพ
    // คุณสามารถเพิ่ม style อื่น ๆ ที่ต้องการเพิ่มในภาพพื้นหลังได้ตามต้องการ
  };


  return (
    <div >
      <div style={backgroundImage} class=" min-h-screen min-w-full bg-indigo-100 flex justify-center items-center">
        <div class=" bg-white rounded-lg lg:w-2/5 md:w-1/2 w-2/3" >
          <form onSubmit={addUser} class="bg-white p-10 rounded-lg shadow-lg min-w-full">
            <h1 class="text-center text-3xl mb-6 text-black  font-bold font-sans">CREATE ACCOUNT</h1>
            <div>
              <label class="text-gray-800 font-semibold text-lg block my-3 text-md" for="username">Username</label>
              <input
                type='text'
                name='tableName'
                onChange={(event) => {
                  setUname(event.target.value)
                }}
                class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" placeholder="username" />
            </div>
            <div>
              <label class="text-gray-800 font-semibold text-lg block my-3 text-md" for="password">Password</label>
              <input
                name='password'

                type='text'
                onChange={(event) => {
                  setpassword(event.target.value)
                }} class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" placeholder="password" />
            </div>
            <div>
              <label class="text-gray-800 font-semibold text-lg block my-3 text-md" for="password">Fullname</label>
              <input
                name=''

                type='text'
                onChange={(event) => {
                  setFname(event.target.value)
                }} class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" placeholder="password" />
            </div>
            <div>
              <label class="text-gray-800 font-semibold text-lg block my-3 text-md" for="password">Lastname</label>
              <input
                name='Fname'

                type='text'
                onChange={(event) => {
                  setLname(event.target.value)
                }} class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" placeholder="password" />
            </div>
            <div>
              <label class="text-gray-800 font-semibold text-lg block my-3 text-md" for="password">Bio</label>
              <input
                name='Bio'

                type='text'
                onChange={(event) => {
                  setBio(event.target.value)
                }} class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" placeholder="password" />
            </div>
            <div>
              <label class="text-gray-800 font-semibold text-lg block my-3 text-md" for="dateOfBirth">DoB</label>
              <DatePicker
                selected={DoB}
                onChange={date => setDoB(date)}
                dateFormat="yyyy/dd/MM"
                placeholderText="dd/MM/yyyy"
                className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-black focus:shadow-md"
                required
              />
            </div>
            <div>
              <label class="text-gray-800 font-semibold text-lg block my-3 text-md" for="password">PicturePath</label>
              <input
                name='picturePath'

                type='text'
                onChange={(event) => {
                  setpicturePath(event.target.value)
                }} class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none" placeholder="password" />
            </div>
            <div>
              <label class="text-gray-800 font-semibold text-lg block my-3 text-md" for="confirm">Gender</label>
              <div className="flex gap-10">
                <Radio
                  onChange={(event) => {
                    setgender(event.target.value)
                  }}
                  name="gender"
                  label="Male"
                  value={1} />
                <Radio
                  onChange={(event) => {
                    setgender(event.target.value)
                  }}
                  name="gender"
                  label="Female"
                  value={2} />
              </div>
            </div>
            <button type="submit" class="w-full mt-5 text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register