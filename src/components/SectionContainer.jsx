export const SectionContainer = ({ className, id }) => {
    return (
        <section
            id={id}
            data-section={id}
            class={`section ${className} w-full mx-auto lg:w-[740px] pb-24`}
        >
            <slot />
        </section>
    )
}