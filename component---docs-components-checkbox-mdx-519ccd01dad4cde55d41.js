(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{kNAa:function(e,c,n){"use strict";n.r(c),n.d(c,"_frontmatter",(function(){return g})),n.d(c,"default",(function(){return j}));var o=n("zjfJ"),t=n("cxan"),a=n("+wNj"),b=n("ERkP"),h=n("ZVZ0"),l=n("9Rvw"),s=n("qbsg"),d=n("Ejgk"),i=n("9mtu"),r=n("8fQv"),k=n("sQ7B"),x=n("vD+s"),p=n("x0e6");n("l1C2");function u(e,c){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);c&&(o=o.filter((function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable}))),n.push.apply(n,o)}return n}function m(e){for(var c=1;c<arguments.length;c++){var n=null!=arguments[c]?arguments[c]:{};c%2?u(Object(n),!0).forEach((function(c){Object(o.a)(e,c,n[c])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(c){Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(n,c))}))}return e}var g={};void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&!g.hasOwnProperty("__filemeta")&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/components/checkbox.mdx"}});var O={_frontmatter:g},v=l.a;function j(e){var c,n,o=e.components,u=Object(a.a)(e,["components"]);return Object(h.b)(v,Object(t.a)({},O,u,{components:o,mdxType:"MDXLayout"}),Object(h.b)("h1",{id:"checkboxes"},"Checkboxes"),Object(h.b)(d.a,{type:"info",mdxType:"StatusLabel"},"Stable"),Object(h.b)(d.a,{type:"success",style:{marginLeft:"var(--spacing-xs)"},mdxType:"StatusLabel"},"Accessible"),Object(h.b)(x.a,{mdxType:"LargeParagraph"},"Checkboxes are used to pick an option when one or more options can be chosen."),Object(h.b)("h2",{id:"principles"},"Principles"),Object(h.b)("ul",null,Object(h.b)("li",{parentName:"ul"},"If the user can only select one option from a list, use ",Object(h.b)("a",Object(t.a)({parentName:"li"},{href:"/components/radio-button"}),"radio buttons")," instead."),Object(h.b)("li",{parentName:"ul"},"Checkbox label should always clearly describe what will happen if the specific option is chosen. A good practice is to keep labels a maximum of three words long."),Object(h.b)("li",{parentName:"ul"},"Checkboxes work independently from each other. This means that checking one option should never affect other checkboxes."),Object(h.b)("li",{parentName:"ul"},"If Checkboxes are related to each other, use ",Object(h.b)("a",Object(t.a)({parentName:"li"},{href:"/components/selection-group"}),"HDS Selection group")," to achieve that. "),Object(h.b)("li",{parentName:"ul"},"Checkboxes should not have any immediate effects. The checkbox selection takes effect when the user presses a submit button (e.g. in a form). If you need the selection to have an immediate effect, use ",Object(h.b)("a",Object(t.a)({parentName:"li"},{href:"/components/toggle"}),"HDS Toggle button component")," instead. Also see ",Object(h.b)("a",Object(t.a)({parentName:"li"},{href:"/guidelines/checkboxes-radiobuttons-toggles"}),"guidelines for choosing between radio buttons, checkboxes, and toggles."))),Object(h.b)("h2",{id:"accessibility"},"Accessibility"),Object(h.b)("ul",null,Object(h.b)("li",{parentName:"ul"},Object(h.b)("strong",{parentName:"li"},"It is advisable to use colour combinations provided by the implementation.")," These combinations are ensured to comply with WCAG AA requirements. When customising colors, refer to ",Object(h.b)("a",Object(t.a)({parentName:"li"},{href:"/design-tokens/colour",title:"Colour"}),"colour guidelines")," to ensure accessibility."),Object(h.b)("li",{parentName:"ul"},"When multiple Checkboxes are related to each other, group them together using ",Object(h.b)("a",Object(t.a)({parentName:"li"},{href:"/components/selection-group"}),"HDS Selection group"),". Selection group also includes a title for the group.")),Object(h.b)("h2",{id:"usage"},"Usage"),Object(h.b)("h3",{id:"checkbox-with-label"},"Checkbox with label"),Object(h.b)(s.c,{__position:2,__code:'() => {\n  const [checkedItems, setCheckedItems] = React.useState({\n    \'checkbox-checked\': true,\n    \'checkbox-checked-disabled\': true,\n  })\n  const onChange = event => {\n    setCheckedItems({\n      ...checkedItems,\n      [event.target.id]: event.target.checked,\n    })\n  }\n  return (\n    <>\n      <Checkbox\n        label="Label"\n        id="checkbox"\n        checked={checkedItems[\'checkbox\']}\n        onChange={onChange}\n      />\n      <Checkbox\n        label="Label"\n        id="checkbox-checked"\n        checked={checkedItems[\'checkbox-checked\']}\n        onChange={onChange}\n      />\n      <Checkbox\n        label="Label"\n        id="checkbox-disabled"\n        checked={checkedItems[\'checkbox-disabled\']}\n        onChange={onChange}\n        disabled\n      />\n      <Checkbox\n        label="Label"\n        id="checkbox-checked-disabled"\n        checked={checkedItems[\'checkbox-checked-disabled\']}\n        onChange={onChange}\n        disabled\n      />\n    </>\n  )\n}',__scope:(c={props:u,DefaultLayout:l.a,Playground:s.c,Checkbox:i.a,StatusLabel:d.a,SelectionGroup:r.a,ColorBox:k.a,LargeParagraph:x.a,Text:p.a},c.DefaultLayout=l.a,c._frontmatter=g,c),mdxType:"Playground"},(function(){var e=b.useState({"checkbox-checked":!0,"checkbox-checked-disabled":!0}),c=e[0],n=e[1],o=function(e){var o;n(m(m({},c),{},((o={})[e.target.id]=e.target.checked,o)))};return Object(h.b)(b.Fragment,null,Object(h.b)(i.a,{label:"Label",id:"checkbox",checked:c.checkbox,onChange:o,mdxType:"Checkbox"}),Object(h.b)(i.a,{label:"Label",id:"checkbox-checked",checked:c["checkbox-checked"],onChange:o,mdxType:"Checkbox"}),Object(h.b)(i.a,{label:"Label",id:"checkbox-disabled",checked:c["checkbox-disabled"],onChange:o,disabled:!0,mdxType:"Checkbox"}),Object(h.b)(i.a,{label:"Label",id:"checkbox-checked-disabled",checked:c["checkbox-checked-disabled"],onChange:o,disabled:!0,mdxType:"Checkbox"}))})),Object(h.b)("h4",{id:"core-code-example"},"Core code example:"),Object(h.b)("pre",null,Object(h.b)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- Enabled --\x3e\n<div class="hds-checkbox">\n  <input type="checkbox" id="checkbox" class="hds-checkbox__input" />\n  <label for="checkbox"  class="hds-checkbox__label">Label</label>\n</div>\n\n\x3c!-- Enabled & selected --\x3e\n<div class="hds-checkbox">\n  <input type="checkbox" id="checkbox-checked" class="hds-checkbox__input" checked />\n  <label for="checkbox"  class="hds-checkbox__label">Label</label>\n</div>\n\n\x3c!-- Disabled --\x3e\n<div class="hds-checkbox">\n  <input type="checkbox" id="checkbox-disabled" class="hds-checkbox__input" disabled />\n  <label for="checkbox"  class="hds-checkbox__label">Label</label>\n</div>\n\n\x3c!-- Disabled & selected --\x3e\n<div class="hds-checkbox">\n  <input type="checkbox" id="checkbox-checked-disabled" class="hds-checkbox__input" checked disabled />\n  <label for="checkbox"  class="hds-checkbox__label">Label</label>\n</div>\n')),Object(h.b)("h4",{id:"react-code-example"},"React code example:"),Object(h.b)("pre",null,Object(h.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),'  {() => {\n    const [checkedItems, setCheckedItems] = React.useState({ "checkbox-checked": true, "checkbox-checked-disabled": true });\n    const onChange = (event) => {\n      setCheckedItems({ ...checkedItems, [event.target.id]: event.target.checked });\n    };\n    return <>\n      <Checkbox label="Label" id="checkbox" checked={checkedItems["checkbox"]} onChange={onChange} />\n      <Checkbox label="Label" id="checkbox-checked" checked={checkedItems["checkbox-checked"]} onChange={onChange} />\n      <Checkbox label="Label" id="checkbox-disabled" checked={checkedItems["checkbox-disabled"]} onChange={onChange} disabled />\n      <Checkbox label="Label" id="checkbox-checked-disabled" checked={checkedItems["checkbox-checked-disabled"]} onChange={onChange} disabled />\n    </>\n  }}\n')),Object(h.b)("h3",{id:"checkbox-group"},"Checkbox group"),Object(h.b)("p",null,"Related checkboxes can be grouped together with the Selection group component. See ",Object(h.b)("a",Object(t.a)({parentName:"p"},{href:"/components/selection-group"}),"HDS Selection group page")," for full documentation."),Object(h.b)(s.c,{__position:3,__code:'() => {\n  const [checkedItems, setCheckedItems] = React.useState({\n    \'v-checkbox1\': true,\n    \'v-checkbox2\': true,\n  })\n  const onChange = event => {\n    setCheckedItems({\n      ...checkedItems,\n      [event.target.name]: event.target.checked,\n    })\n  }\n  return (\n    <SelectionGroup label="Checkbox group">\n      <Checkbox\n        id="v-checkbox1"\n        name="v-checkbox1"\n        label="Option"\n        checked={checkedItems[\'v-checkbox1\']}\n        onChange={onChange}\n      />\n      <Checkbox\n        id="v-checkbox2"\n        name="v-checkbox2"\n        label="Option"\n        checked={checkedItems[\'v-checkbox2\']}\n        onChange={onChange}\n      />\n      <Checkbox\n        id="v-checkbox3"\n        name="v-checkbox3"\n        label="Option"\n        checked={checkedItems[\'v-checkbox3\']}\n        onChange={onChange}\n      />\n      <Checkbox\n        id="v-checkbox4"\n        name="v-checkbox4"\n        label="Option"\n        checked={checkedItems[\'v-checkbox4\']}\n        onChange={onChange}\n      />\n    </SelectionGroup>\n  )\n}',__scope:(n={props:u,DefaultLayout:l.a,Playground:s.c,Checkbox:i.a,StatusLabel:d.a,SelectionGroup:r.a,ColorBox:k.a,LargeParagraph:x.a,Text:p.a},n.DefaultLayout=l.a,n._frontmatter=g,n),mdxType:"Playground"},(function(){var e=b.useState({"v-checkbox1":!0,"v-checkbox2":!0}),c=e[0],n=e[1],o=function(e){var o;n(m(m({},c),{},((o={})[e.target.name]=e.target.checked,o)))};return Object(h.b)(r.a,{label:"Checkbox group",mdxType:"SelectionGroup"},Object(h.b)(i.a,{id:"v-checkbox1",name:"v-checkbox1",label:"Option",checked:c["v-checkbox1"],onChange:o,mdxType:"Checkbox"}),Object(h.b)(i.a,{id:"v-checkbox2",name:"v-checkbox2",label:"Option",checked:c["v-checkbox2"],onChange:o,mdxType:"Checkbox"}),Object(h.b)(i.a,{id:"v-checkbox3",name:"v-checkbox3",label:"Option",checked:c["v-checkbox3"],onChange:o,mdxType:"Checkbox"}),Object(h.b)(i.a,{id:"v-checkbox4",name:"v-checkbox4",label:"Option",checked:c["v-checkbox4"],onChange:o,mdxType:"Checkbox"}))})),Object(h.b)("h4",{id:"core-code-example-1"},"Core code example:"),Object(h.b)("pre",null,Object(h.b)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),'<fieldset class="hds-selection-group">\n  <legend class="hds-selection-group__legend">Checkbox group</legend>\n  <div class="hds-selection-group__items">\n    <div class="hds-selection-group__item">\n      <div class="hds-checkbox">\n        <input type="checkbox" id="v-checkbox1" name="v-checkbox1" class="hds-checkbox__input" value="foo" checked />\n        <label for="v-checkbox1" class="hds-checkbox__label">Option</label>\n      </div>\n    </div>\n    <div class="hds-selection-group__item">\n      <div class="hds-checkbox">\n        <input type="checkbox" id="v-checkbox2" name="v-checkbox2" class="hds-checkbox__input" value="bar" checked/>\n        <label for="v-checkbox2" class="hds-checkbox__label">Option</label>\n      </div>\n    </div>\n    <div class="hds-selection-group__item">\n      <div class="hds-checkbox">\n        <input type="checkbox" id="v-checkbox3" name="v-checkbox3" class="hds-checkbox__input" value="baz" />\n        <label for="v-checkbox3" class="hds-checkbox__label">Option</label>\n      </div>\n    </div>\n    <div class="hds-selection-group__item">\n      <div class="hds-checkbox">\n        <input type="checkbox" id="v-checkbox4" name="v-checkbox4" class="hds-checkbox__input" value="qux" />\n        <label for="v-checkbox4" class="hds-checkbox__label">Option</label>\n      </div>\n    </div>\n  </div>\n</fieldset>\n')),Object(h.b)("h4",{id:"react-code-example-1"},"React code example:"),Object(h.b)("pre",null,Object(h.b)("code",Object(t.a)({parentName:"pre"},{className:"language-tsx"}),'<SelectionGroup label="Checkbox group">\n  <Checkbox id="v-checkbox1" name="v-checkbox1" label="Option" checked />\n  <Checkbox id="v-checkbox2" name="v-checkbox2" label="Option" checked />\n  <Checkbox id="v-checkbox3" name="v-checkbox3" label="Option" />\n  <Checkbox id="v-checkbox4" name="v-checkbox4" label="Option" />\n</SelectionGroup>\n')),Object(h.b)("h2",{id:"demos--api"},"Demos & API"),Object(h.b)("h3",{id:"core"},"Core"),Object(h.b)("p",null,Object(h.b)("a",Object(t.a)({parentName:"p"},{href:"/storybook/core/?path=/story/components-checkbox--default"}),"Checkboxes in hds-core")),Object(h.b)("h3",{id:"react"},"React"),Object(h.b)("p",null,Object(h.b)("a",Object(t.a)({parentName:"p"},{href:"/storybook/react/?path=/story/components-checkbox--default"}),"Checkboxes in hds-react")),Object(h.b)("p",null,Object(h.b)("a",Object(t.a)({parentName:"p"},{href:"/storybook/react/?path=/docs/components-checkbox--default"}),"Checkbox API")))}void 0!==j&&j&&j===Object(j)&&Object.isExtensible(j)&&!j.hasOwnProperty("__filemeta")&&Object.defineProperty(j,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/components/checkbox.mdx"}}),j.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-components-checkbox-mdx-519ccd01dad4cde55d41.js.map