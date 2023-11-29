import "./HeroImgStyles.css"
import React from 'react'

import IntroImg from "../assets/back1.jpg"
import { Link } from "react-router-dom"
const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src= {IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>Hi I'm Sreyas S, This is my personal website

package com.example.myapplication;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button button=findViewById(R.id.btn);
        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent=new Intent(Intent.ACTION_VIEW);
                intent.setData(Uri.parse("https://www.google.com"));
                startActivity(intent);
            }
        });


    }
}

</p>
            <h1> </h1>  
            <div>
                <Link to="/project" className="btn">Projects</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg
