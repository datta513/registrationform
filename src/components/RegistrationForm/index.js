import {Component} from 'react'

export default class RegistrationForm extends Component {
  state = {username: '', uerr: false, password: '', perr: false, subit: false}

  ucheck = event => {
    if (event.target.value === '') {
      this.setState(() => ({uerr: true}))
    }
  }

  ufill = event => {
    this.setState(() => ({username: event.target.value, uerr: false}))
  }

  pcheck = event => {
    if (event.target.value === '') {
      this.setState(() => ({perr: true}))
    }
  }

  reset = () => {
    this.setState(() => ({
      username: '',
      uerr: false,
      password: '',
      perr: false,
      subit: false,
    }))
  }

  submit = event => {
    event.preventDefault()
    const {username, password} = this.state

    if (username !== '') {
      if (password !== '') {
        this.setState(() => ({
          subit: true,
        }))
      }
    }
    if (username === '') {
      this.setState(() => ({uerr: true}))
    }
    if (password === '') {
      this.setState(() => ({perr: true}))
    }
  }

  pfill = event => {
    this.setState(() => ({password: event.target.value, perr: false}))
  }

  onsucess = () => {
    const k = 0
    return (
      <div>
        <p>Submitted Successfully</p>
        <button onClick={this.reset} type="button">
          Submit Another Response
        </button>
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
      </div>
    )
  }

  form = () => {
    console.log('formentered')
    const {username, uerr, perr, password} = this.state
    return (
      <div>
        <form onSubmit={this.submit}>
          <label htmlFor="User">FIRST NAME</label>
          <br />
          <input
            type="text"
            placeholder="Username"
            id="User"
            value={username}
            onChange={this.ufill}
            onBlur={this.ucheck}
          />
          <br />
          {uerr ? <p>Required</p> : ''}
          <label htmlFor="pass">LAST NAME</label>
          <br />
          <input
            type="text"
            placeholder="Username"
            id="pass"
            value={password}
            onChange={this.pfill}
            onBlur={this.pcheck}
          />
          <br />
          {perr ? <p>Required</p> : ''}

          <button type="submit">submit</button>
        </form>
      </div>
    )
  }

  render() {
    const {subit} = this.state

    return (
      <div>
        <h1>Registration</h1>
        {!subit ? this.form() : this.onsucess()}
      </div>
    )
  }
}
