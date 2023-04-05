import { onMount } from "solid-js";
import Vditor from "vditor";
export const Editor = () => {
    let container: HTMLDivElement;
    onMount(() => {
        new Vditor(container, {
            value: "你好",
            mode: "ir",
        });
    });
    return (
        <>
            <section class="full" ref={container!}></section>
            <link
                rel="stylesheet"
                href="https://unpkg.com/vditor/dist/index.css"
            />
        </>
    );
};
