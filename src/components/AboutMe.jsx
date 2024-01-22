import Translate from "@/components/Translation"

const AboutMe = () => {
    return (
        <section className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <div className="[&>p]:mb-4 [&>p>strong]:text-yellow-400 [&>p>strong]:font-semibold text-pretty order-2 md:order-1">
                <p>{<Translate translationKey={"aboutMeName"} />} {<span className="text-sky-700"><Translate translationKey={"webDeveloper"} /></span>}{<Translate translationKey="aboutMeTime" />}{<span className="text-sky-700"><Translate translationKey="aboutMeProposal" /></span>}</p>
                <p>{<Translate translationKey="aboutMeProposal01" />} {<span className="text-sky-700"><Translate translationKey="aboutMeObjective02" /></span>} {<Translate translationKey="aboutMeObjective03" />} {<Translate translationKey="aboutMeObjective04" />}</p>
                <p>{<Translate translationKey="aboutMeObjective05" />} <span className="text-sky-700">{<Translate translationKey="aboutMeObjective06"/>}</span> {<Translate translationKey="aboutMeObjective07"/>} {<span className="text-sky-700"><Translate translationKey="aboutMeObjective08" /></span>} {<Translate translationKey="aboutMeObjective09"/>}</p>
            </div>
            <img src="/dimasNormie.webp" className="rounded-full size-96 order-1 md:order-2" />
        </section>
    )
}

export default AboutMe