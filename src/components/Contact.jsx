import { Screen } from "./Screen";

export const Contact = () => {
  return (
    <Screen title="Contacto">
        <ul className="contact-list">
            <li>
                <a className="contact-link" href="mailto:anaqcorreo.com">
                    Correo: karensofiajimenez785@gmail.com
                    </a>
            </li>
            <li>
            <a className="contact-link" href="http://github.com">
            GitHub: karensofiajimenez785-sketch
            </a>
            </li>
        </ul>
    </Screen>
  )
}
