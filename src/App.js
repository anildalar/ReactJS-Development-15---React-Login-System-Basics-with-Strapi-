import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes/Route'


export const App =()=>{  //Fat Arrow ES6 2015
  return (
    <BrowserRouter>
        <Routes>
            {/*array.map(function(currentValue, index, arr), thisValue)*/}
            {
                routes.map((currentValue,index,arr)=>{
                    return <Route key={index} path={currentValue.path} element={currentValue.element} />
                })
            }
        </Routes>
    </BrowserRouter>
  )
}
