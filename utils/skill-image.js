import aws from '/public/svg/skills/aws.svg';
import bootstrap from '/public/svg/skills/bootstrap.svg';
import cplusplus from '/public/svg/skills/cplusplus.svg';
import css from '/public/svg/skills/css.svg';
import django from '/public/svg/skills/django.svg';
import git from '/public/svg/skills/git.svg';
import html from '/public/svg/skills/html.svg';
import java from '/public/svg/skills/java.svg';
import javascript from '/public/svg/skills/javascript.svg';
import materialui from '/public/svg/skills/materialui.svg';
import mongoDB from '/public/svg/skills/mongoDB.svg';
import mysql from '/public/svg/skills/mysql.svg';
import nextJS from '/public/svg/skills/nextJS.svg';
import numpy from '/public/svg/skills/numpy.svg';
import opencv from '/public/svg/skills/opencv.svg';
import postgresql from '/public/svg/skills/postgresql.svg';
import python from '/public/svg/skills/python.svg';
import react from '/public/svg/skills/react.svg';
import selenium from '/public/svg/skills/selenium.svg';
import tailwind from '/public/svg/skills/tailwind.svg';



export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'react':
      return react;
    case 'bootstrap':
      return bootstrap;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'c++':
      return cplusplus;
    case 'java':
      return java;
    case 'python':
      return python;
    case 'aws':
      return aws;
    case 'django':
      return django;
    case 'git':
      return git;
    case 'materialui':
      return materialui;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'selenium':
      return selenium;
    default:
      break;
  }
}
