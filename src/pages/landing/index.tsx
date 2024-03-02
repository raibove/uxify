import { SignInButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import './index.css'

const Landing = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  return (
    <div className="landing-con">
      <h1>Experience the workflow the best frontend teams love.</h1>
      <p>Let your team focus on shipping features instead of managing infrastructure with automated CI/CD.</p>
      {isAuthenticated ? <Link to="/home"><button>Go to Home Page</button></Link> : <SignInButton mode="modal" />}
    </div>
  )
}

export default Landing;