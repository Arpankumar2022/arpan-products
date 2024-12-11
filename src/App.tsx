import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ListProductAll from './components/product1/ListProductAll.jsx'
import NavbarHeader from './components/header/NavbarHeader.jsx'
import Footer from './components/product/Footer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateProductComponent from './components/product/CreateProductComponent.jsx'
import RegisterComponent from './components/loginAndRegister/RegisterComponent.jsx'
import LoginComponent from './components/loginAndRegister/LoginComponent.jsx'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@chakra-ui/layout'
import { Navbar } from 'react-bootstrap'



{/**
    -- FOR ARPAN BAGS PRODUCTS --
    import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
  import ListProductComponent from './components/product/ListProductComponent.jsx'
import Header from './components/product/Header.jsx'
import Footer from './components/product/Footer.jsx'
import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import CreateProductComponent from './components/product/CreateProductComponent.jsx'
import RegisterComponent from './components/loginAndRegister/RegisterComponent.jsx'
import LoginComponent from './components/loginAndRegister/LoginComponent.jsx'
import WelcomePopUp from  

  
  */}
{/**
import Student from './components/test/Student.jsx'
import DeStructureProcess from './components/test/DeStructureProcess.jsx'
import UseStateProcess from './components/test/UseStateProcess.jsx'
import EventHandlingProcess from './components/test/EventHandlingProcess.jsx'
import ConditionalRenderingProcess from './components/test/ConditionalRenderingProcess.jsx'
import UseEffectProcess from './components/test/UseEffectProcess.jsx'
import CustomHookProcess from './components/test/CustomHookProcess.jsx'
import useLocalStorage  from './useLocalStorage.js'
import UseRefProcessSecond from './components/test/UseRefProcessSecond.jsx'
import UseRefProcessFirstUncontrolledWay from './components/test/UseRefProcessFirstUncontrolledWay.jsx'
import UseState2Process from './components/test/UseState2Process.jsx'
import UseReducerClient from './components/test/UseReducerClient.jsx'
import VarHoistingWillGoOntheTopTheFunctionAtFirstLine from './components/test/VarHoistingWillGoOntheTopTheFunctionAtFirstLine.jsx'
import ListAndKeysIteratingOnArrayProcess from './components/test/ListAndKeysIteratingOnArrayProcess.jsx'
import ListAndKeysIteratingOnArrayProcess from './components/test/ListAndKeysIteratingOnArrayProcess.jsx'
import ArrayWithStateCoutriesSecondDropDown from './components/test2/ArrayWithStateCoutriesSecondDropDown.jsx'
import IncrementDecrementPage from './components/reduxToolKit/IncrementDecrementPage.jsx'
 */}

function App() {


  return (
    <>
      <div className="container-fluid">
        <div className="table-responsive">
          <BrowserRouter>

            <NavbarHeader />

            <div className="card mt-2">
              <Routes>
                <Route path='/' element={<ListProductAll />}></Route>
                <Route path='/productsList' element={<ListProductAll />}></Route>
                <Route path='/add-products' element={<CreateProductComponent />}></Route>
                <Route path="/register" element={<RegisterComponent />}> </Route>
                <Route path="/login" element={<LoginComponent />} ></Route>
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </div>
      </div>

      {/**  O=Part
<IncrementDecrementPage/>
**/ }



      {/**  N=Part
<ArrayWithStateCoutriesSecondDropDown/>  
**/ }

      {/**
              <div><h2>Hello Arpan !! Welcome to your first project !!</h2></div>
              * */}

      {/**  M=Part
          <ListAndKeysIteratingOnArrayProcess/>
           **/ }

      {/**  L=Part
          <VarHoistingWillGoOntheTopTheFunctionAtFirstLine/>
          **/ }

      {/**  K=Part
          <UseReducerClient/>  **/ }


      {/**  J= Part
           <UseState2Process/>
          */}


      {/**  I=Part
        <UseRefProcessFirstUncontrolledWay />
        {/**


      {/**  H=Part
      <UseRefProcessSecond/>
      */}

      {/**  G=Part
       <CustomHookProcess/>
        */}



      {/**  F=Part
      <UseEffectProcess/>
      */}
      {/*  E=Part
      <ConditionalRenderingProcess/>
       */}

      {/*  D=Part
      <EventHandlingProcess/>
       */}

      {/*  C=Part
       <UseStateProcess student={studentObj}></UseStateProcess>
      */}


      {/*  B=Part
      <DeStructureProcess  student={studentObj}></DeStructureProcess>
     */}

      {/*  A=Part
      ----  Normal Props  Passing
      <Student name="Arpan" email="arpansri2022@gmail.com" address="Noida , UP" ></Student>
      */}
      {/*
       --- Array type Props Passing
       <Student data = {arraySkillsData}></Student>
      */}
      {/*
         --- Object type Props Passing
      <Student student={studentObj}></Student>
      */}
    </>
  )
}

export default App


{/**
 Other Activity

 <Col xs={6} md={4}>
                       <Image style={{ alignSelf: 'center' }} src={logo} roundedCircle />
                      <Image src={logo}  fluid />
                    </Col>
            </Row>
          </Container>

 const [count, setCount] = useState(0)

  const studentObj = {
     name : "Kumar",
     email : "arpansri2015@gmail.com",
     address : "Mau , UP"
  }

  const arraySkillsData = ['HTML', 'CSS','JAVASCRIPT','JAVA'];


 */
}