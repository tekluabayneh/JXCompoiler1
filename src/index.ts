import helper from "./ma.js";
const test = helper("div", { ClassName: "box" }, "Hello");
console.log(test);
// { NodeName: 'div', props: { ClassName: 'box' }, children: [ 'Hello' ] }

type VNode =
  | string
  | {
      NodeName: string;
      props: { ClassName: string };
      children: Array<string>;
    };
const render = (VNode: VNode) => {
  if (typeof VNode == "string") {
    return document.createTextNode(VNode);
  }

  let Element = document.createElement(VNode.NodeName);
  let attribute = VNode.props || {};

  // add the class to the element
  Object.keys(attribute).forEach((k) => Element.setAttribute(k, attribute[k]));

  /// call the render method recursively to append the child
  (VNode.children || []).forEach((c) => Element.appendChild(render(c)));
  return Element;
};
