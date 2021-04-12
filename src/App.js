import './App.css';
import Heading from './Components/heading';
import Header from './Components/header';
import Master from './Components/master';
import Latest from './Components/LatestBlog';
import LatestStory from './Components/latestStory';
import LatestArticle from './Components/latestArticle';
import { Component } from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from '@testing-library/react';

class App extends Component{
  states = {
    headerList : [
      {
        title: 'Home',
        url: '#'
      },
      {
        title: 'Bollywood',
        url: '#'
      },
      {
        title: 'Technology',
        url: '#'
      },
      {
        title: 'Hollywood',
        url: '#'
      },
      {
        title: 'Fitness',
        url: '#'
      },
      {
        title: 'Food',
        url: '#'
      }
    ],
    latestBlogList : [
      {
        srcimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYrqdbJK3peFLxbiPFfNw8fNBxXt10jVH3w&usqp=CAU",
        title: "Joshua Tree Overnight Adventure",
        text: "Gujarat is vastly underrated and its a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and places",
        footer_head: "Travel",
        time: " / August 21 2017"
      },
      {
        srcimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYrqdbJK3peFLxbiPFfNw8fNBxXt10jVH3w&usqp=CAU",
        title: "Joshua Tree Overnight Adventure",
        text: "Gujarat is vastly underrated and its a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and places",
        footer_head: "Travel",
        time: " / August 21 2017"
      },
      {
        srcimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYrqdbJK3peFLxbiPFfNw8fNBxXt10jVH3w&usqp=CAU",
        title: "Joshua Tree Overnight Adventure",
        text: "Gujarat is vastly underrated and its a mystery to us why the region isn't more well-known as a tourist destination. It has a plethora of temples and places",
        footer_head: "Travel",
        time: " / August 21 2017"
      }
    ],
    latestStory: [
      {
        srcimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYrqdbJK3peFLxbiPFfNw8fNBxXt10jVH3w&usqp=CAU",
        title: "Catch waves with an adventure guid",
        text: "Gujarat is vastly underrated and it's a mystery to us with the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrate and it's mystery to us why the region isn't more well-known as a tourist destination. It has a pletora of temples and palaces",
        subtext1: "TECH",
        subtext2: " / TODAY AT 11:54"
      },
      {
        srcimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYrqdbJK3peFLxbiPFfNw8fNBxXt10jVH3w&usqp=CAU",
        title: "Catch waves with an adventure guid",
        text: "Gujarat is vastly underrated and it's a mystery to us with the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrate and it's mystery to us why the region isn't more well-known as a tourist destination. It has a pletora of temples and palaces",
        subtext1: "TECH",
        subtext2: " / AUGUST 21 2017"
      },
      {
        srcimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYrqdbJK3peFLxbiPFfNw8fNBxXt10jVH3w&usqp=CAU",
        title: "Catch waves with an adventure guid",
        text: "Gujarat is vastly underrated and it's a mystery to us with the region isn't more well-known as a tourist destination. It has a plethora of temples and palaces Gujarat is vastly underrate and it's mystery to us why the region isn't more well-known as a tourist destination. It has a pletora of temples and palaces",
        subtext1: "TECH",
        subtext2: " / AUGUST 21 2017"
      }
    ],
    latestArticle: [
      {
        srcimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYrqdbJK3peFLxbiPFfNw8fNBxXt10jVH3w&usqp=CAU",
        title: "Catch waves with an adventure guide",
        text: "Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-",
        subtext1: "Travel",
        subtext2: " / August 21 2017",
        num: "2"
      },
      {
        srcimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYrqdbJK3peFLxbiPFfNw8fNBxXt10jVH3w&usqp=CAU",
        title: "Catch waves with an adventure guide",
        text: "Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-",
        subtext1: "Travel",
        subtext2: " / August 21 2017",
        num: "3"
      },
      {
        srcimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYrqdbJK3peFLxbiPFfNw8fNBxXt10jVH3w&usqp=CAU",
        title: "Catch waves with an adventure guide",
        text: "Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-",
        subtext1: "Travel",
        subtext2: " / August 21 2017",
        num: "4"
      },
      {
        srcimg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREYrqdbJK3peFLxbiPFfNw8fNBxXt10jVH3w&usqp=CAU",
        title: "Catch waves with an adventure guide",
        text: "Gujarat is vastly underrated and it's a mystery to us why the region isn't more well-",
        subtext1: "Travel",
        subtext2: " / August 21 2017",
        num: "5"
      }
    ]
  }
  render(){
    return (
      <>
      <Heading />
      <Header headerList={this.states.headerList} />
      <Master />
      <Latest latestBlogList={this.states.latestBlogList} />
      <LatestArticle latestArticle={this.states.latestArticle} />
      <hr />
      <LatestStory latestStory={this.states.latestStory} />
      <hr />
      <p className="text">VIEW MORE<ArrowRightAltIcon className="arrow" /></p>
      </>
    );
  }
}

export default App;