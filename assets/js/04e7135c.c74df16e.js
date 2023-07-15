"use strict";(self.webpackChunksimba_ui_website=self.webpackChunksimba_ui_website||[]).push([[476],{1848:(e,t,n)=>{n.r(t),n.d(t,{BasicUsage:()=>m,ControlledInput:()=>g,InputColors:()=>k,InputSizes:()=>c,InputVariants:()=>h,assets:()=>u,contentTitle:()=>p,default:()=>N,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(7896),l=n(2784),s=n(876),r=n(6636);n(194);const o={sidebar_position:3},p=void 0,i={unversionedId:"tutorial-basics/Input",id:"tutorial-basics/Input",title:"Input",description:"Input component is a component that is used to get user input in a text field.",source:"@site/docs/tutorial-basics/Input.mdx",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/Input",permalink:"/mariothemed-ui/docs/tutorial-basics/Input",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Checkbox",permalink:"/mariothemed-ui/docs/tutorial-basics/Checkbox"},next:{title:"Textarea",permalink:"/mariothemed-ui/docs/tutorial-basics/Textarea"}},u={},d=[{value:"<strong>Import</strong>",id:"import",level:3},{value:"<strong>Usage</strong>",id:"usage",level:3},{value:"<strong>Input Sizes</strong>",id:"input-sizes",level:3},{value:"<strong>Changing the appearance of the input</strong>",id:"changing-the-appearance-of-the-input",level:2},{value:"<strong>Changing the color of the input</strong>",id:"changing-the-color-of-the-input",level:2},{value:"<strong>Controlled input</strong>",id:"controlled-input",level:2}],m=e=>{let{size:t}=e;return(0,s.kt)("div",{className:"border-2 rounded-xl mb-4"},(0,s.kt)("div",{className:"m-2"},(0,s.kt)(r.II,{placeholder:"Basic usage",mdxType:"Input"})))},c=e=>{let{size:t}=e;return(0,s.kt)("div",{className:"flex flex-col border-2 rounded-xl mb-4"},(0,s.kt)("div",{className:"m-2"},(0,s.kt)(r.II,{size:"xs",placeholder:"extra small size",mdxType:"Input"})),(0,s.kt)("div",{className:"m-2"},(0,s.kt)(r.II,{size:"sm",placeholder:"small size",mdxType:"Input"})),(0,s.kt)("div",{className:"m-2"},(0,s.kt)(r.II,{size:"md",placeholder:"medium size",mdxType:"Input"})),(0,s.kt)("div",{className:"m-2"},(0,s.kt)(r.II,{size:"lg",placeholder:"large size",mdxType:"Input"})))},h=e=>{let{variant:t}=e;return(0,s.kt)("div",{className:"flex flex-col border-2 rounded-xl mb-4"},(0,s.kt)("div",{className:"m-2"},(0,s.kt)(r.II,{variant:"outline",placeholder:"Outline",mdxType:"Input"})),(0,s.kt)("div",{className:"m-2"},(0,s.kt)(r.II,{variant:"filled",placeholder:"Filled",mdxType:"Input"})),(0,s.kt)("div",{className:"m-2"},(0,s.kt)(r.II,{variant:"flushed",placeholder:"Flushed",mdxType:"Input"})),(0,s.kt)("div",{className:"m-2"},(0,s.kt)(r.II,{variant:"unstyled",placeholder:"Unstyled",mdxType:"Input"})))},k=e=>{let{color:t}=e;return(0,s.kt)("div",{className:"flex flex-col border-2 rounded-xl mb-4"},(0,s.kt)("div",{className:"m-2"},(0,s.kt)(r.II,{color:"yellow",placeholder:"Yellow input",mdxType:"Input"})),(0,s.kt)("div",{className:"m-2"},(0,s.kt)(r.II,{color:"red",placeholder:"Red input",mdxType:"Input"})),(0,s.kt)("div",{className:"m-2"},(0,s.kt)(r.II,{color:"blue",placeholder:"Blue input",mdxType:"Input"})),(0,s.kt)("div",{className:"m-2"},(0,s.kt)(r.II,{color:"green",placeholder:"Green input",mdxType:"Input"})))},g=function(e){let{onChange:t}=e;const[n,a]=(0,l.useState)("");return(0,s.kt)("div",{className:"flex flex-col border-2 rounded-xl mb-4"},(0,s.kt)("div",{className:"m-2"},(0,s.kt)("p",{className:"m-2"}," Value : ",n),(0,s.kt)(r.II,{color:"yellow",variant:"filled",value:n,onChange:e=>a(e.target.value),mdxType:"Input"})))},I={toc:d,BasicUsage:m,InputSizes:c,InputVariants:h,InputColors:k,ControlledInput:g},v="wrapper";function N(e){let{components:t,...n}=e;return(0,s.kt)(v,(0,a.Z)({},I,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Input component is a component that is used to get user input in a text field."),(0,s.kt)("h3",{id:"import"},(0,s.kt)("strong",{parentName:"h3"},"Import")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'import { Input } from "tailwind-simba-ui";\n')),(0,s.kt)("h3",{id:"usage"},(0,s.kt)("strong",{parentName:"h3"},"Usage")),(0,s.kt)("p",null,"Here's a basic usage example of the Input component:"),(0,s.kt)(m,{mdxType:"BasicUsage"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'<Input placeholder="Basic usage" />\n')),(0,s.kt)("h3",{id:"input-sizes"},(0,s.kt)("strong",{parentName:"h3"},"Input Sizes")),(0,s.kt)("p",null,"Use the size prop to change the size of the input. You can set the value to ",(0,s.kt)("strong",{parentName:"p"},"xs"),", ",(0,s.kt)("strong",{parentName:"p"},"sm"),", ",(0,s.kt)("strong",{parentName:"p"},"md"),", or ",(0,s.kt)("strong",{parentName:"p"},"lg"),"."),(0,s.kt)(c,{mdxType:"InputSizes"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'<div>\n  <Input size="xs" placeholder="extra small size" />\n  <Input size="sm" placeholder="small size" />\n  <Input size="md" placeholder="medium size" />\n  <Input size="lg" placeholder="large size" />\n</div>\n')),(0,s.kt)("h2",{id:"changing-the-appearance-of-the-input"},(0,s.kt)("strong",{parentName:"h2"},"Changing the appearance of the input")),(0,s.kt)("p",null,"The input component comes in 4 variants: ",(0,s.kt)("strong",{parentName:"p"},"outline"),", ",(0,s.kt)("strong",{parentName:"p"},"filled"),", ",(0,s.kt)("strong",{parentName:"p"},"flushed"),", or ",(0,s.kt)("strong",{parentName:"p"},"unstyled"),". Pass the variant prop and set it to one of these values."),(0,s.kt)(h,{mdxType:"InputVariants"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'<div>\n  <Input variant="outline" placeholder="Outline" />\n  <Input variant="filled" placeholder="Filled" />\n  <Input variant="flushed" placeholder="Flushed" />\n  <Input variant="unstyled" placeholder="Unstyled" />\n</div>\n')),(0,s.kt)("h2",{id:"changing-the-color-of-the-input"},(0,s.kt)("strong",{parentName:"h2"},"Changing the color of the input")),(0,s.kt)("p",null,"Use the color prop to change the visual style of the Input. You can set the value to ",(0,s.kt)("strong",{parentName:"p"},"yellow"),", ",(0,s.kt)("strong",{parentName:"p"},"red"),", ",(0,s.kt)("strong",{parentName:"p"},"blue"),", or ",(0,s.kt)("strong",{parentName:"p"},"green"),"."),(0,s.kt)(k,{mdxType:"InputColors"}),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'<div>\n  <Input variant="outline" placeholder="Outline" />\n  <Input variant="filled" placeholder="Filled" />\n  <Input variant="flushed" placeholder="Flushed" />\n  <Input variant="unstyled" placeholder="Unstyled" />\n</div>\n')),(0,s.kt)("h2",{id:"controlled-input"},(0,s.kt)("strong",{parentName:"h2"},"Controlled input")),(0,s.kt)(g,{mdxType:"ControlledInput"})," ",(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'function Example() {\n  const [value, setValue] = React.useState("");\n  const handleChange = (event) => setValue(event.target.value);\n\n  return (\n    <>\n      <p>Value: {value}</p>\n      <Input\n        onChange={handleChange}\n        placeholder="Sample placeholder"\n        size="md"\n      />\n    </>\n  );\n}\n')))}N.isMDXComponent=!0},194:()=>{}}]);