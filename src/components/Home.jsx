import { Screen } from "./Screen"

export const Home = () => {
    const name = "Karen SJC"
    const role = "Aprendiz"
return (
    <Screen title="Sofi">
        <section className= "hero">
            <div className="avatar">ER</div>
            <p className="hero-role">{role}</p>
            <p>
                Mi primer portafolio en React con jsx.
            </p>
        </section>
    </Screen>

)
}
