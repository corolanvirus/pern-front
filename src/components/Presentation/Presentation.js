import './_Presentation.scss'
import React, { useState, UseEffect, useEffect } from 'react';
import Splash from '../Splash/Splash';
import Typewriter from 'typewriter-effect';
import {  Button } from 'carbon-components-react';



export default function TestLoader({username}){
    const [isLoading, setLoading] = useState(true);
    function fakeRequest(){
        return new Promise(resolve => setTimeout(() => resolve(), 2500));
    }

    useEffect(()=> {
        fakeRequest().then(() => {
            const el = document.querySelector(".loader");
            if (el) {
              el.remove();
              setLoading(!isLoading);
            }
          });
        }, []);
      
        if (isLoading) {
          return <Splash/>;
        }
      
        return (
          <div className="presentation">
            <h1>
                <Typewriter
                  options={{
                    strings: ['Hello World', 'Hello Leaks', 'Hello' + {username}],
                    autoStart: true,
                    loop: true,
                  }}
                  />          
            </h1>
            <Button>Just let me start</Button>

            <p>Le site a pour but de découvrir react ainsi que son gestionnaire d'état Redux</p>
          </div>
        );
    }