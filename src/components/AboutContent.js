// import "./AboutContentStyles.css";
// import React from 'react';
// //import { Link } from "react-router-dom";

// import IntroImg from "../assets/Sreyas_Resume.pdf"
// const AboutContent = () => {
//   return (
//     <div className="content">
//         <div className="left">
//         <h1>ABOUT</h1>
//     <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
//             <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
//             <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
//             <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
//             <p>Hi! I'm a Freelance Developer currenlty persuing my Masters in Computer Applications
// *
// package com.example.myapplication;

// import androidx.appcompat.app.AppCompatActivity;

// import android.content.Intent;
// import android.net.Uri;
// import android.os.Bundle;
// import android.view.View;
// import android.widget.Button;

// public class MainActivity extends AppCompatActivity {

//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//         super.onCreate(savedInstanceState);
//         setContentView(R.layout.activity_main);
//         Button button=findViewById(R.id.btn);
//         button.setOnClickListener(new View.OnClickListener() {
//             @Override
//             public void onClick(View view) {
//                 Intent intent=new Intent(Intent.ACTION_VIEW);
//                 intent.setData(Uri.parse("https://www.google.com"));
//                 startActivity(intent);
//             }
//         });


//     }
// }*
// </p><p>&nbsp;&nbsp;&nbsp;</p>
//             <p>2022 - Present: Pursuing MCA at <a href="https://www.cet.ac.in/"><u>College of Engineering Thiruvanandhapuram</u></a></p><p>&nbsp;&nbsp;&nbsp;</p>
//             <p>2021 - 2022: Software Analyst(L3) at <a href="https://www.claysys.com/"><u>Claysys Technologies</u></a></p><p>&nbsp;&nbsp;&nbsp;</p>
//             <a className="btn" href={IntroImg} target="_blank">My Resume</a>
         

//         </div>
//     </div>
//   )
// }

// export default AboutContent
import "./AboutContentStyles.css";
import React from 'react';

import IntroImg from "../assets/Sreyas_Resume.pdf";

const AboutContent = () => {
  return (
    <div className="content">
      <div className="left">
        <h1>ABOUT</h1>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
        <p>Hi! I'm a Freelance Developer currently pursuing my Masters in Computer Applications.</p>
        <p>&nbsp;&nbsp;&nbsp;</p>
        <p>2022 - Present: Pursuing MCA at <a href="https://www.cet.ac.in/"><u>College of Engineering Thiruvananthapuram</u></a></p>
        <p>&nbsp;&nbsp;&nbsp;</p>
        <p>2021 - 2022: Software Analyst (L3) at <a href="https://www.claysys.com/"><u>Claysys Technologies</u></a></p>
        <p>&nbsp;&nbsp;&nbsp;</p>
        <a className="btn" href={IntroImg} target="_blank" rel="noopener noreferrer">My Resume</a>
      </div>
    </div>
  );
}

export default AboutContent;
