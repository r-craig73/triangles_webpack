import './styles.css';
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Triangle} from './triangle';

$(document).ready(function() {
<<<<<<< HEAD
  console.log("test");
  $("#submit").submit(function(event) {
    var storeRow = [];
=======
  $("form#triangle").submit(function(event) {
    var side1 = parseInt($("input#length1").val());
    var side2 = parseInt($("input#length2").val());
    var side3 = parseInt($("input#length3").val());

    var triangle = new Triangle(side1, side2, side3);
    if (triangle.equilateral()) {
      $(".result1").text("This is an equilateral triangle");
    }
    else if(triangle.isosceles()) {
      $(".result1").text("This is an isosceles triangle");
    }
    else if (triangle.scalene()) {
      $(".result1").text("This is an scalene triangle");
    }
    else if (!triangle.isTriangle){
      $(".result1").text("This is not a triangle :-(");
    }
>>>>>>> parent of e3b54ea... fix isTriangle interface bug

    storeRow = document.getElementsByClassName("cell").val();
    console.log(storeRow);
    event.preventDefault();

  });

});
