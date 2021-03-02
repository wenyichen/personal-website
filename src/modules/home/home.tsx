import { emailUrl, githubUrl, linkedinUrl, mediumUrl } from '../../constants/constants';
import './home.scss';


export const Home = () => (
    <div className="home">
        <div className="home-menu">
            <a target="_blank" href={mediumUrl}>blog</a>
            <a target="_blank" href={linkedinUrl}>linkedin</a>
            <a target="_blank" href={githubUrl}>github</a>
            <a target="_blank" href={emailUrl}>email</a>
            <a href="">resume</a>
        </div>
    </div>
)