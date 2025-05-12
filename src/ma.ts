const helper = (
  NodeName: string,
  props: { ClassName?: string } = {},
  ...args: any
) => {
  let children = args.length ? [].concat(...args) : null;
  return { NodeName, props, children };
};

export default helper;
console.log("man can do it right");
