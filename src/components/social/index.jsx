import { Container } from "./style"
import GithubImage from '../../assets/github.svg'
import LinkedinImage from '../../assets/linkedin.svg'
import CodeImage from '../../assets/code.svg'

export const SocialLinks = () => {
    const GITHUB_LINK = "https://github.com/rodrigorobl"
    const LINKEDIN_LINK = "https://www.linkedin.com/in/rodrigo-robl/"

    return (
        <Container>
            <div>
                <a href={GITHUB_LINK} target="_blank">
                    <img src={GithubImage} alt="Github" />
                </a>

                <a href={LINKEDIN_LINK} target="_blank">
                    <img src={LinkedinImage} alt="LinkedIn" />
                </a>
            </div>

            <div>
                <img src={CodeImage} alt="Code" />
                Rodrigo Robl

            </div>


        </Container>
    )
}