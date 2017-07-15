import React, { Component } from 'react';
import {ButtonThick, ButtonThin, Navbar, Cookiebar, InputBox, SelectBox, TextArea} from '../../components';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import Slider from 'material-ui/Slider';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Checkbox from 'material-ui/Checkbox';
import './profile.css';

export default class Profile extends Component {

  constructor(props){
    super(props);
    this.state={
    }
  }

  handleInputChange = () => {

  }

  render() {
    let days = [];
    for(let i=1;i<32;i++){
      days.push(i);
    }

    let months = [];
    for(let i=1;i<13;i++){
      months.push(i);
    }

    let years = [];
    for(let i=parseInt(new Date().getFullYear(),10) ; i>(parseInt(new Date().getFullYear(),10)-50) ; i--){
      years.push(i);
    }

    let residency=["International","Permanant Resident","Citizen"];
    let locations=["VIC","NSW","WA","TAS","SA","NT"];
    let degrees=["High School","Diploma","Bachelors","Masters","PhD"];
    let industries=["All","Accounting","Public Health","Business","Planning","Architecture"];

    let userImg = (<i className="material-icons user-img">person</i>);
    if(this.props.userImg)
      userImg = <img className="user-img" src={this.props.userImg} alt=""/>


      let styles = {
        activeBtnStyle: {
        width:"250px",
        fontSize:"14px",
        fontWeight:"normal",
        backgroundColor:"#00887A"
      },
      inactiveBtnStyle: {
        width:"250px",
        fontSize:"14px",
        fontWeight:"normal",
        backgroundColor:"#F1F1F1",
        color:"#333333"
      },
      inputStyle: {
        width:"100%",
        marginTop:"5px",
        marginBottom:"5px"
      },
      selectStyle: {
        containerStyle:{
          width:"80px",
          margin:"5px"
        },
        inputStyle:{
          width:"80px"
        },
        dropDownStyle:{
          width:"80px",
          backgroundColor:"#FFF"
        }
      },
      selectStyleLong: {
        containerStyle:{
          width:"100%",
          marginTop:"5px",
          marginBottom:"5px"
        },
        inputStyle:{
          width:"100%"
        },
        dropDownStyle:{
          backgroundColor:"#FFF"
        }
      },
      radioBtnStyle: {
        display:"inline-block",
        width:"75px"
      },
      radioBtnStyleLon: {
        display:"inline-block",
        width:"140px"
      },
      uploadBtnStyle: {
        width:"150px",
        margin:"0px",
        marginLeft:"10px",
        height:"30px"
      },
      btnStyleLong: {
        width:"200px",
        margin:"30px"
      },
      sliderStyle: {
        height:"30px",
        margin:"0px"
      }
    };

      let muiTheme = getMuiTheme({
        palette:{
          primary1Color: '#4EB8AA',
          textColor:'#333'
        },
        radioButton: {
          borderColor: '#999'
        },
        checkbox: {
          boxColor: '#999',
        }
      });

    return (

      <div>

        <div className="input-section-container">

          <div className="input-section">
            <div><h2>
            CREATE YOUR PROFILE
            </h2></div>

            <div className="upload-photo">
            Upload your photo
            </div>

            <InputBox style={styles.inputStyle} placeholder="First Name" />
            <InputBox style={styles.inputStyle} placeholder="Last Name" />
            <InputBox style={styles.inputStyle} placeholder="Email" />

            <div>
            <h3>
            ABOUT ME
            </h3>
            </div>

            <div className="input-block">
            <span className="label">Date of Birth</span>
            <span className="input">
            <SelectBox style={styles.selectStyle} placeholder="Day" options={days}/>
            <SelectBox style={styles.selectStyle} placeholder="Month" options={months}/>
            <SelectBox style={styles.selectStyle} placeholder="Year" options={years}/>
            </span>
            </div>

            <div className="input-block check-block">
            <span className="label">Gender</span>
            <span className="input">
            <MuiThemeProvider muiTheme={muiTheme}>
            <RadioButtonGroup name="gender" defaultSelected="male" labelPosition="right">
              <RadioButton
                style={styles.radioBtnStyle}
                value="male"
                label="Male" />
              <RadioButton
                style={styles.radioBtnStyle}
                value="female"
                label="Female" />
            </RadioButtonGroup>
            </MuiThemeProvider>
            </span>
            </div>

            <div className="input-block">
            <span className="label">Contact Number</span>
            <span className="input">
            <InputBox style={styles.inputStyle} type="number"/>
            </span>
            </div>

            <div className="input-block">
            <span className="label">Location</span>
            <span className="input">
            <SelectBox style={styles.selectStyleLong} options={locations}/>
             </span>
            </div>

            <div className="input-block">
            <span className="label">Residency Status</span>
            <span className="input">
            <SelectBox style={styles.selectStyleLong} options={residency}/>
             </span>
            </div>

            <TextArea placeholder="Write something about yourself..."/>

            <div>
            <h3>
            RESUME
            </h3>
            </div>

            <div className="input-block">
            <InputBox placeholder="Upload your resume" type="text" style={styles.inputStyle}/>
            <ButtonThick icon="add" label="Upload" style={styles.uploadBtnStyle}/>
            </div>


            <div>
            <h3>
            AVAILABILITY
            </h3>
            </div>

            <div className="input-block check-block">
            <MuiThemeProvider muiTheme={muiTheme}>
            <RadioButtonGroup name="availability" defaultSelected="immediately" labelPosition="right">
              <RadioButton
                style={styles.radioBtnStyleLong}
                value="immediately"
                label="Immediately" />
              <RadioButton
                style={styles.radioBtnStyleLong}
                value="fromDate"
                label="Available from" />
            </RadioButtonGroup>
            </MuiThemeProvider>
            </div>

            <div className="input-block">
            <span className="label"></span>
            <span className="input">
            <SelectBox style={styles.selectStyle} placeholder="Day" options={days}/>
            <SelectBox style={styles.selectStyle} placeholder="Month" options={months}/>
            <SelectBox style={styles.selectStyle} placeholder="Year" options={years}/>
            </span>
            </div>

             <div>
            <h3>
            EDUCATION
            </h3>
            </div>

            <div className="input-block">
            <span className="label">Highest Degree</span>
            <span className="input">
            <SelectBox style={styles.selectStyleLong} options={degrees}/>
             </span>
            </div>

            <div className="input-block">
            <span className="label">University</span>
            <span className="input">
            <InputBox style={styles.inputStyle} type="text"/>
            </span>
            </div>

             <div>
            <h3>
            SKILLS
            </h3>
            </div>

            <div className="input-block">
            <span className="label">Profession/Industry</span>
            <span className="input">
            <SelectBox style={styles.selectStyleLong} options={industries}/>
            </span>
            </div>

            <div className="input-block slider-block">
            <span className="label">Self assessment skill</span>
            <span className="slider-input">
            <MuiThemeProvider muiTheme={muiTheme}>
            <Slider min={0} max={3} step={1} value={3} sliderStyle={styles.sliderStyle}/>
            </MuiThemeProvider>
            </span>
            </div>

            <div className="input-block slider-block">
            <span className="label">Self assessment skill</span>
            <span className="slider-input">
            <MuiThemeProvider muiTheme={muiTheme}>
            <Slider min={0} max={3} step={1} value={2} sliderStyle={styles.sliderStyle}/>
            </MuiThemeProvider>
            </span>
            </div>

            <div className="input-block slider-block">
            <span className="label">Self assessment skill</span>
            <span className="slider-input">
            <MuiThemeProvider muiTheme={muiTheme}>
            <Slider min={0} max={3} step={1} value={1} sliderStyle={styles.sliderStyle}/>
            </MuiThemeProvider>
            </span>
            </div>

            <div className="input-block slider-block">
            <span className="label">Self assessment skill</span>
            <span className="slider-input">
            <MuiThemeProvider muiTheme={muiTheme}>
            <Slider min={0} max={3} step={1} value={0} sliderStyle={styles.sliderStyle}/>
            </MuiThemeProvider>
            </span>
            </div>

            <div>
            <h3>
            TERMS OF USE
            </h3>
            </div>


            <MuiThemeProvider muiTheme={muiTheme}>
            <Checkbox label="I accept the InternMatch Terms of use and InternMatch Privacy Policy"  />
            </MuiThemeProvider>


            <ButtonThick label="Sign Up" style={styles.btnStyleLong}/>

            <div className="social-login">
            <img className="social-icon" src="images/fb.jpg" alt=""/>
            <img className="social-icon" src="images/google.png" alt=""/>
            <img className="social-icon" src="images/linkedin.png" alt=""/>
            </div>

          </div>


        </div>

        <div className="spacer">
        </div>


      </div>
    );
  }
}
