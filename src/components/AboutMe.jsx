const AboutMe = () => {
    return (
        <section className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="[&>p]:mb-4 [&>p>strong]:text-yellow-400 [&>p>strong]:font-semibold text-pretty order-2 md:order-1">
                <p>Me llamo Miguel Ángel pero mis amigos me llaman midu. Empecé en la programación con un Amstrad, tenía 10 años. Actualmente estoy <strong>liderando equipos de desarrollo en multinacionales</strong>.</p>

                <p>Algunos de mis éxitos incluyen <strong>colaborar con Mozilla para el desarrollo de las primeras apps en su sistema FirefoxOS</strong>. Aunque hoy está desaparecido fue un gran avance en el mundo del desarrollo web.</p>

                <p>Como creador de contenido, <strong>cuento con el canal de habla hispana más visto del mundo en la categoría de <em className="italic">Software & Game Development</em> en Twitch</strong>. Mi objetivo es mejorar la empleabilidad de la comunidad hispana y el acceso a contenido de calidad.</p>
            </div>
        </section>
    )
}

export default AboutMe