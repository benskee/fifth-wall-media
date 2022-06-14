import { Switch, Route } from 'react-router-dom';

import CodeProject from './components/codeTutorial/CodeProject';
import AnimationProject from './components/animation/AnimationProject';
import Logout from './components/user/Logout';
import CodeTutorial from './views/CodeTutorial';
import Home from './views/Home';
import Chart from './views/Chart';
import Animation from './views/Animation';
import Upload from './views/Upload';
import EditProject from './views/EditProject';
import ProjectList from './views/ProjectList';
import Login from './views/Login';
import Register from './views/Register';
import Recorder from './views/Recorder';
import UploadTutorial from './views/UploadTutorial';
import EditUser from './views/EditUser';

function Routes(props) {
    const { user, handleUpdateUser } = props

    return(
        <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/code/:id" render={props => <CodeProject  {...props}/>} />
            <Route path="/animation/:id" render={props => <AnimationProject  {...props}/>} />
            <Route exact path="/code" render={() => <CodeTutorial />} />
            <Route exact path="/tutorial/upload" render={() => <UploadTutorial />} />
            <Route exact path="/recorder" render={() => <Recorder />} />
            <Route path="/chartDeck" render={() => <Chart />} />
            <Route exact path="/animation" render={() => <Animation />} />
            <Route exact path="/upload" render={props => <Upload user={user} {...props}/>} />
            <Route exact path="/editUser/:id" render={props => <EditUser user={user} onUpdateUser={handleUpdateUser} {...props}/>} />
            <Route exact path="/edit/:id" render={props => <EditProject user={user} {...props}/>} />
            <Route exact path="/projects" render={() => <ProjectList user={user}/>} />
            <Route exact path="/login" render={props => <Login {...props}/>} />
            <Route exact path="/logout" render={() => <Logout />} />
            <Route exact path="/register" render={props => <Register {...props}/>} />
        </Switch>
    )
}

export default Routes