import Link from 'next/link'
import Wrapper from '../components/Wrapper'

export default function Home() {
    return (
        <Wrapper id="home-wrapper">

            <h1>Webapplikasjoner</h1>

            <Link href="/oppgave9">
                <a>Oppgave 9</a>
            </Link>
        </Wrapper>
    )
}
