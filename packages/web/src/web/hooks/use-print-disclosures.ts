import { useEffect } from "react";

/** Native closed details suppress their content even when print CSS sets display:block. */
export function usePrintDisclosures() {
  useEffect(() => {
    let states: Array<{ node: HTMLDetailsElement; open: boolean }> = [];
    const expand = () => {
      if (states.length) return;
      states = Array.from(document.querySelectorAll("details")).map((node) => ({
        node,
        open: node.open,
      }));
      states.forEach(({ node }) => {
        node.open = true;
      });
    };
    const restore = () => {
      states.forEach(({ node, open }) => {
        node.open = open;
      });
      states = [];
    };
    const printMedia = window.matchMedia("print");
    const onMediaChange = (event: MediaQueryListEvent) => (event.matches ? expand() : restore());
    window.addEventListener("beforeprint", expand);
    window.addEventListener("afterprint", restore);
    printMedia.addEventListener("change", onMediaChange);
    return () => {
      window.removeEventListener("beforeprint", expand);
      window.removeEventListener("afterprint", restore);
      printMedia.removeEventListener("change", onMediaChange);
      restore();
    };
  }, []);
}
