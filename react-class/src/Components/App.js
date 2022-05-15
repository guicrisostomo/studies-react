import React, { Component } from 'react'

import Post from './Post'

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Post title="Post 1"/>
        <Post title="Post 2"/>
        <Post title="Post 3"/>
      </div>
    )
  }
}
